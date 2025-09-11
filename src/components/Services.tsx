import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, Zap, Brain, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Back Office Automation",
      description: "Streamline procurement, HR, finance, and facilities with tailored AI workflows.",
    },
    {
      icon: Bot,
      title: "Agentic Systems",
      description: "Deploy AI agents that proactively manage tasks, monitor agreements, and surface insights before you need them.",
    },
    {
      icon: Zap,
      title: "Workflow Automation & Batch Processing",
      description: "Eliminate manual processes and accelerate operations with intelligent automation.",
    },
    {
      icon: Brain,
      title: "AI Copilots",
      description: "Equip your team with product specific copilots that can help them with their work.",
    },
    {
      icon: Brain,
      title: "Finetuned Models",
      description: "Train models on your data to unlock smaller models that are more cost effective.",
    },
    {
      icon: Cog,
      title: "Micro-SaaS Solutions",
      description: "Lightweight, focused applications that solve one problem deeply—delivered quickly and maintained for you.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Deliver
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most software companies push you toward bloated platforms and endless add-ons. We take the opposite approach: every solution we build is custom-fit to your workflows, focused on ROI, and stripped of unnecessary features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardTitle className="text-xl mb-3 text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;