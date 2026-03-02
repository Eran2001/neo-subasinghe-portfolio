import { motion } from "framer-motion";
import { IMAGES, ALBUMS, TESTIMONIALS } from "@/src/constant/mockData";
import { Hero } from "@/src/components/partials/Hero";
import { SectionHeading, BadgePill } from "@/src/components/common/Common";
import { Button } from "@/src/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Featured Work Carousel (Mocked as Grid for simplicity) */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionHeading
              subtitle="Portfolio"
              title="Featured Masterpieces"
              className="mb-0"
            />
            <Link to="/portfolio">
              <Button variant="outline" className="rounded-full group">
                Explore Full Gallery{" "}
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.slice(0, 6).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <BadgePill className="w-fit mb-3 bg-accent text-white border-none">
                    {img.tags[0]}
                  </BadgePill>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {img.title}
                  </h3>
                  <p className="text-white/60 text-sm">{img.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Collections */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Collections"
            title="Latest Albums"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ALBUMS.slice(0, 3).map((album, i) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <Link
                  to={`/album/${album.id}`}
                  className="relative aspect-3/4 overflow-hidden rounded-3xl mb-6 block"
                >
                  <img
                    src={album.coverSrc}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <BadgePill className="bg-white/90 backdrop-blur-md text-dark border-none shadow-lg">
                      {album.tags[0]}
                    </BadgePill>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {album.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {album.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 mb-6">
                    {album.description}
                  </p>
                  <Link
                    to={`/album/${album.id}`}
                    className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    View Collection <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Feedback"
            title="What Our Clients Say"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-muted/50 border border-border/50 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 text-foreground/80 leading-relaxed">
                  "{t.quote}"
                </p>
                <h4 className="font-bold text-dark dark:text-white uppercase tracking-widest text-sm">
                  {t.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 noise-overlay opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              LET'S CREATE SOMETHING TIMELESS
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Ready to capture your story? We're currently booking for 2024 and
              2025.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full px-12 py-8 text-xl bg-white text-primary hover:bg-white/90"
              >
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
