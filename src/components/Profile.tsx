import { Button } from "@/components/ui/button";
import doctorProfile from "@/assets/doctor-profile.jpg";

const Profile = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                <img
                  src={doctorProfile}
                  alt="Ebitari Fregene, DNP, APRN, PMHNPBC."
                  className="relative rounded-full w-full max-w-md mx-auto shadow-elegant aspect-square object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-in-right order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                Ebitari Fregene, DNP, APRN, PMHNPBC.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Dr. Fregene is a board-certified Psychiatric/Mental Health Nurse Practitioner. I offer psychiatric 
                medication management and supportive psychotherapy. I aim to be a beacon of hope as I identify 
                my patients' strengths and guide them toward a brighter future. My open-minded and non-judgmental 
                approach celebrates diversity.
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={() => window.open("https://www.psychologytoday.com/us/psychiatrists/ebitari-fregene-chesterfield-mo/1396566", "_blank")}
              >
                Find out more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
