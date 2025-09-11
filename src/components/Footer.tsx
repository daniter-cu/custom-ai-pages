const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-foreground mb-2">
              Sagur &mdash; Bespoke AI Solutions
            </h3>
            <p className="text-primary-foreground/70">
              Transforming businesses with custom AI solutions
            </p>
          </div>
          
          <div className="text-primary-foreground/70 text-sm">
            © 2025 Sagur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;