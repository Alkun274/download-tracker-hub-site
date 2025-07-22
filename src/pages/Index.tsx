import { useState, useMemo } from "react";
import { SoftwareCard } from "@/components/SoftwareCard";
import { SearchBar } from "@/components/SearchBar";
import { softwareData, categories } from "@/data/software";
import { Download, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSoftware = useMemo(() => {
    return softwareData.filter((software) => {
      const matchesSearch = software.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           software.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || software.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalDownloads = useMemo(() => {
    return softwareData.reduce((total, software) => {
      const stored = localStorage.getItem(`downloads_${software.id}`);
      const count = stored ? parseInt(stored) : Math.floor(Math.random() * 10000) + 1000;
      return total + count;
    }, 0);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              SoftHub
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the best software with real-time statistics. 
              Track downloads, discover popular apps, and get what you need instantly.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <Download className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{formatNumber(totalDownloads)}</div>
                <div className="text-sm text-muted-foreground">Total Downloads</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{softwareData.length}</div>
                <div className="text-sm text-muted-foreground">Software Available</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Safe & Secure</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Catalog */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Browse Software</h2>
            <SearchBar
              onSearch={setSearchQuery}
              onCategoryFilter={setSelectedCategory}
              selectedCategory={selectedCategory}
              categories={categories}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSoftware.map((software) => (
              <SoftwareCard key={software.id} software={software} />
            ))}
          </div>

          {filteredSoftware.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No software found matching your criteria.</p>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
