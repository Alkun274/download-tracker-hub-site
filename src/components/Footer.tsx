import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              SoftHub
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted source for safe and secure software downloads. 
              Discover, download, and track the best applications for your needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:softhub@outlook.sa" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">
                  Safe Downloads
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Real-time Stats
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Trusted Software
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SoftHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};