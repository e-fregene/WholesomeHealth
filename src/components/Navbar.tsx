import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center transition-transform hover:scale-105">
            <img src={logo} alt="Wholesome Health" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              HOME
            </a>
            <Button
              variant="default"
              size="default"
              onClick={() => window.open("https://practice.kareo.com/wholesome-behavioral-health", "_blank")}
            >
              BOOK ONLINE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </a>
              <Button
                variant="default"
                className="mx-4"
                onClick={() => {
                  window.open("https://practice.kareo.com/wholesome-behavioral-health", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                BOOK ONLINE
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
