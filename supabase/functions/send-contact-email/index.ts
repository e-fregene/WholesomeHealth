import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    if (!RESEND_API_KEY) {
      throw new Error("Email service is not configured.");
    }

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message?.trim() || "I have a question.");

    console.log("Sending contact email for:", name, email);

    // Send email to provider
    const providerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Wholesome Behavioral Health <contact@wholesomehealth.care>",
        to: ["contact@wholesomehealth.care"],
        reply_to: email,
        subject: "New Contact Form Submission",
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    const providerEmailData = await providerEmailResponse.json();
    if (!providerEmailResponse.ok) {
      console.error("Provider email failed:", providerEmailData);
      throw new Error(providerEmailData?.message || "Provider email failed to send.");
    }
    console.log("Provider email sent successfully:", providerEmailData);

    // Send confirmation email to user
    const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Wholesome Behavioral Health <contact@wholesomehealth.care>",
        to: [email],
        subject: "We Received Your Message",
        html: `
          <h1>Thank you for contacting Wholesome Behavioral Health, ${safeName}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${safeMessage}</p>
          <br>
          <p>Best regards,<br>Wholesome Behavioral Health Team</p>
        `,
      }),
    });

    const confirmationEmailData = await confirmationEmailResponse.json();
    if (!confirmationEmailResponse.ok) {
      console.error("Confirmation email failed:", confirmationEmailData);
    } else {
      console.log("Confirmation email sent successfully:", confirmationEmailData);
    }

    return new Response(JSON.stringify({ 
      provider: providerEmailData, 
      confirmation: confirmationEmailData 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
