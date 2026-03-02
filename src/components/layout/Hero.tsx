import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { BadgePill } from '@/src/components/common/Common';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-dark">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 noise-overlay opacity-5" />
      
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-10 gap-12 items-center relative z-10">
        
        {/* Left Content (40%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col items-start"
        >
          <BadgePill className="mb-6 bg-accent/20 text-accent border border-accent/30">
            Creative Photography Studio
          </BadgePill>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase">
            Design<br />
            <span className="text-accent">Studio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-md mb-10 leading-relaxed">
            We craft visual narratives that transcend time. Premium photography for brands, weddings, and editorial projects.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90">
                View Portfolio <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-white/20 text-white hover:bg-white/10">
                Book a Shoot
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image (60%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 relative group"
        >
          <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
            <img 
              src="https://picsum.photos/seed/hero-studio/1600/1200" 
              alt="Professional Photography Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-dark p-6 rounded-2xl shadow-xl hidden md:block border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark"
                    alt="Client"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-dark dark:text-white">500+ Happy Clients</p>
                <div className="flex text-accent">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-[10px]">{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
