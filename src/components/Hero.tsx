import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Empowering Others with their Mental Health Journey
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Identifying with my patients' strengths and guiding them toward a brighter future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://practice.kareo.com/wholesome-behavioral-health", "_blank")}
              className="animate-scale-in"
            >
              ACT AND CONNECT
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = "tel:+13143977219"}
              className="gap-2 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Phone className="h-5 w-5" />
              +1(314)-397-7219
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
