import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  selectedCategory: string;
  categories: string[];
}

export function SearchBar({ onSearch, onCategoryFilter, selectedCategory, categories }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search software..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/50 border-border/50 focus:border-primary/50"
          />
        </div>
        <Button type="submit" variant="outline" className="px-6">
          <Filter className="w-4 h-4 mr-2" />
          Search
        </Button>
      </form>
      
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === "all" ? "default" : "outline"}
          className="cursor-pointer hover:bg-primary/20 transition-colors"
          onClick={() => onCategoryFilter("all")}
        >
          All Categories
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/20 transition-colors"
            onClick={() => onCategoryFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}