import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Business Info */}
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">WHOLESOME BEHAVIORAL HEALTH</h3>
            <div className="space-y-2 text-background/90">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                <p>100 Chesterfield Business Pky, Chesterfield, MO 63005</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+16366345668" className="hover:text-primary transition-colors">
                  +1.636.634.5668
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-background/20 text-background/70 text-sm">
            <p>Copyright © 2025 Wholesome Health - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
