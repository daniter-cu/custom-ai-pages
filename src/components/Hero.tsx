import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary-foreground font-medium">
          🚀 Bespoke AI Solutions for Modern Business
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Transform Your Back Office with{" "}
          <span className="bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
            Bespoke AI Solutions
          </span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8 text-primary-foreground/80">
          <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">White-Glove AI Services</span>
          <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Micro-SaaS Platforms</span>
          <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Measurable ROI</span>
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Built for Your Business, Not for Ours
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-premium"
            onClick={() => {
              const waitlistSection = document.getElementById('waitlist');
              if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Project
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 py-4 text-lg"
            onClick={() => {
              const waitlistSection = document.getElementById('waitlist');
              if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;