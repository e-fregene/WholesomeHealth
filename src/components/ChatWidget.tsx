import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleQuestionClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
        }
      });

      if (error) throw error;

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "" });
      setShowForm(false);
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-elegant animate-scale-in bg-primary hover:bg-primary/90"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 bg-card rounded-lg shadow-elegant animate-scale-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Wholesome Health</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsOpen(false);
                setShowForm(false);
              }}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-6 space-y-4">
            {!showForm ? (
              <>
                <p className="text-sm text-foreground">
                  Let me know if you have any questions!
                </p>
                
                <Button
                  onClick={handleQuestionClick}
                  variant="default"
                  className="w-full"
                >
                  I have a question
                </Button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">I have a question</p>
                  <p className="text-xs text-muted-foreground">Sent</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-4">
                    We just need some more information from you to proceed:
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" variant="default" className="w-full">
                      Send
                    </Button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
