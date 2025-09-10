import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, TrendingUp } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Users,
      title: "Direct Access to AI Experts",
      description: "No sales middlemen, just PhD-level expertise working alongside you.",
    },
    {
      icon: Award,
      title: "White-Glove Service",
      description: "We handle design, build, and integration, so your team can focus on outcomes.",
    },
    {
      icon: TrendingUp,
      title: "ROI-First Approach",
      description: "We don't upsell features you don't need; every solution is built to deliver measurable returns.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Work With Us?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-card">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;