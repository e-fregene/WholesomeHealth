import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Dr Fregene was perfect. She listened without judgement and helped me take a huge step.",
    date: "5/14/2025",
  },
  {
    text: "Review Ebitari Fregene, was very attentive. She listened to me and took her time to make sure that she used the best method to treat my needs with what she felt was going to work best for me. I thank her so very much. I recommend scheduling an appointment with her if you are looking to speak with someone that is going to listen and do their best to treat your case in the most professional way possible.",
    date: "5/14/2025",
  },
  {
    text: "Review Very Knowledgeable and caring to help people improve their mental health",
    date: "5/14/2025",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reviews from Our Satisfied Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="animate-fade-in-up hover:shadow-elegant transition-all duration-300 border-0 shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 mb-4 line-clamp-6 leading-relaxed">
                  {review.text}
                </p>

                {/* Author & Date */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold">Anonymous</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
