import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import serviceEvaluation from "@/assets/service-evaluation.jpg";
import serviceMedication from "@/assets/service-medication.jpg";
import serviceTelehealth from "@/assets/service-telehealth.jpg";

const services = [
  {
    title: "Initial Psychiatric Evaluation",
    duration: "60 mins.",
    image: serviceEvaluation,
  },
  {
    title: "Medication Management",
    duration: "30 mins.",
    image: serviceMedication,
  },
  {
    title: "Telehealth",
    duration: "Weekends available.",
    image: serviceTelehealth,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-0 shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
