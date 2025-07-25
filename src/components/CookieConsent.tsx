import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-card border border-border shadow-lg">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your experience and show personalized ads. 
              By using our site, you agree to our cookie policy.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Button 
                onClick={acceptCookies}
                size="sm"
                className="text-xs"
              >
                Accept All
              </Button>
              <Button 
                onClick={declineCookies}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Decline
              </Button>
            </div>
          </div>
          <Button
            onClick={declineCookies}
            variant="ghost"
            size="sm"
            className="p-1 h-auto"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};