import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground">Reach Out Today!</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-6 animate-fade-in-up"
          >
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" variant="default" size="lg" className="w-full">
              Send
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" className="underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
