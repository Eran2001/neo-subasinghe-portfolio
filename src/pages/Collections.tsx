import { motion } from 'framer-motion';
import { ALBUMS } from '@/src/data/mockData';
import { SectionHeading } from '@/src/components/common/Common';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';

export const Collections = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Albums" 
          title="Curated Collections" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ALBUMS.map((album, i) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-[2.5rem] overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <Link to={`/album/${album.id}`} className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
                  <img 
                    src={album.coverSrc} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    {album.tags.map(tag => (
                      <Badge key={tag} className="bg-white/90 backdrop-blur-md text-dark border-none shadow-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
                
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {album.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {album.location}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {album.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                    {album.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link to={`/album/${album.id}`}>
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-dark dark:text-white group-hover:text-accent transition-colors"
                      >
                        Explore Album <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
