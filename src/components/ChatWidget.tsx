import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/13143977219", "_blank");
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
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-card rounded-lg shadow-elegant animate-scale-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Have questions? We're here to help! Click below to start a conversation on WhatsApp.
            </p>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="default"
              className="w-full"
            >
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
