import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-premium">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Let's Build What You Actually Need
            </CardTitle>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Whether it's contract visibility in procurement, custom copilots for your teams, or intelligent workflow automation, we design systems that work for your business.
            </p>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="bg-background/95 backdrop-blur-sm rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Join Our Waitlist
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Be the first to know when we're accepting new clients. Get exclusive insights and early access to our solutions.
              </p>
              
              {/* Space for Google Form Embed */}
              <div className="min-h-[300px] bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-medium mb-2">Google Form Embed Area</p>
                  <p className="text-sm">
                    Replace this placeholder with your Google Form embed code
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;