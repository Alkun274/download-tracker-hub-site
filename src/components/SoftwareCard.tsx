import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Check, X } from "lucide-react";

interface Software {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  size: string;
  downloadUrl: string;
  icon: string;
  rating: number;
  pros: string[];
  cons: string[];
}

interface SoftwareCardProps {
  software: Software;
}

export function SoftwareCard({ software }: SoftwareCardProps) {
  const [downloadCount, setDownloadCount] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`downloads_${software.id}`);
    setDownloadCount(stored ? parseInt(stored) : Math.floor(Math.random() * 10000) + 1000);
  }, [software.id]);

  const handleDownload = () => {
    setIsDownloading(true);
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem(`downloads_${software.id}`, newCount.toString());
    
    // Simulate file download without opening new pages
    setTimeout(() => {
      // Create a blob to simulate a file download
      const fileName = `${software.name.replace(/\s+/g, '_')}_v${software.version}.exe`;
      const blob = new Blob(['This is a simulated download file'], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      URL.revokeObjectURL(url);
      setIsDownloading(false);
    }, 1500);
  };

  const formatDownloadCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden">
              {typeof software.icon === 'string' && software.icon.length <= 2 ? (
                <span className="text-2xl">{software.icon}</span>
              ) : (
                <img 
                  src={software.icon} 
                  alt={`${software.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              )}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {software.name}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {software.category}
                </Badge>
                <span className="text-xs text-muted-foreground">v{software.version}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{software.rating}</span>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {software.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Pros and Cons */}
        <div className="space-y-2">
          <div className="space-y-1">
            {software.pros.map((pro, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span className="text-green-600 dark:text-green-400">{pro}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            {software.cons.map((con, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                <span className="text-red-600 dark:text-red-400">{con}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Size: {software.size}</span>
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {formatDownloadCount(downloadCount)} downloads
          </span>
        </div>
        
        <Button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
        >
          {isDownloading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Downloading...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}