import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ALBUMS, IMAGES } from "@/src/constant/mockData";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  Download,
  Share2,
} from "lucide-react";
import { NotFound } from "./NotFound";

export const AlbumDetails = () => {
  const { id } = useParams();
  const album = ALBUMS.find((a) => a.id === id);

  if (!album) return <NotFound />;

  const albumImages = IMAGES.filter((img) => img.albumId === id);

  return (
    <div className="pt-20 pb-24">
      {/* Album Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={album.coverSrc}
          alt={album.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="max-w-7xl mx-auto">
            <Link to="/collections">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 mb-8 rounded-full pl-2"
              >
                <ArrowLeft className="mr-2" size={18} /> Back to Collections
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {album.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-accent text-white border-none px-4 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                {album.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-white/70 text-sm font-medium uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" /> {album.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" /> {album.location}
                </span>
                <span className="flex items-center gap-2">
                  <Camera size={16} className="text-accent" /> {album.gear}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Album Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-8">About the Collection</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {album.description} Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              <div className="flex gap-4">
                <Button className="rounded-full px-8">
                  Request Availability
                </Button>
                <Button variant="outline" className="rounded-full px-8">
                  <Download className="mr-2" size={18} /> Download Pricing PDF
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-muted/30 p-10 rounded-3xl border border-border/50 h-fit">
              <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">
                Technical Details
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Camera Body</span>
                  <span className="font-medium">
                    {album.gear.split(",")[0]}
                  </span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Lens Used</span>
                  <span className="font-medium">
                    {album.gear.split(",")[1] || "Prime Lens"}
                  </span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Lighting</span>
                  <span className="font-medium">Natural Light</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Post-Processing</span>
                  <span className="font-medium">Lumina Signature Preset</span>
                </li>
              </ul>
              <Button
                variant="ghost"
                className="w-full mt-8 rounded-full border border-dashed border-border"
              >
                <Share2 className="mr-2" size={16} /> Share Collection
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {albumImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-muted break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
