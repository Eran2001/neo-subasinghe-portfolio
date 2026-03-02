import { motion } from "framer-motion";
import { IMAGES } from "@/src/constant/mockData";
import { SectionHeading } from "@/src/components/common/Common";
import { useGalleryStore } from "@/src/stores/stores";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Grid, LayoutGrid, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Portrait",
  "Landscape",
  "Editorial",
  "Wedding",
  "Urban",
];

export const Portfolio = () => {
  const { filter, setFilter, layout, setLayout } = useGalleryStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = IMAGES.filter((img) => {
    const matchesFilter = filter === "All" || img.tags.includes(filter);
    const matchesSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Gallery"
          title="Visual Narrative"
          className="mb-16"
        />

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full px-6"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Search gallery..."
                className="w-full pl-10 pr-4 py-2 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex border rounded-full p-1 bg-muted/50">
              <Button
                variant={layout === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setLayout("grid")}
                className="rounded-full"
              >
                <LayoutGrid size={18} />
              </Button>
              <Button
                variant={layout === "masonry" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setLayout("masonry")}
                className="rounded-full"
              >
                <Grid size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={cn(
            "grid gap-6",
            layout === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6",
          )}
        >
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-muted cursor-pointer",
                layout === "masonry" && "break-inside-avoid mb-6",
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2 bg-accent hover:bg-accent border-none">
                  {img.tags[0]}
                </Badge>
                <h3 className="text-white font-bold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">
              No images found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setFilter("All");
                setSearchQuery("");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
