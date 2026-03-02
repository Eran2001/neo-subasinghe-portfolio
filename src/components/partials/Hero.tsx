import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MainImg from "@/src/assets/MainImg.png";

import * as Icon from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";
import { BadgePill } from "@/src/components/common/Common";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark">
      <div className="absolute inset-0 noise-overlay opacity-5" />

      <div className="container max-w-7xl mx-auto max-xl:px-6 grid grid-cols-1 lg:grid-cols-10 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col items-start"
        >
          <BadgePill className="mb-6 bg-accent/20 text-accent border border-accent/30">
            Creative Photography Studio
          </BadgePill>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase">
            Neo
            <br />
            <span className="text-accent">Subasinghe</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-md mb-10 leading-relaxed">
            We craft visual narratives that transcend time. Premium photography
            for brands, weddings, and editorial projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="default"
                className="rounded-full px-8 py-8 text-lg"
              >
                View Portfolio <Icon.ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-8 text-lg"
              >
                Book a Shoot
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 relative group"
        >
          <div className="relative aspect-4/5 md:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
            <img
              src={MainImg}
              alt="Professional Photography Studio"
              className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 hero-gradient pointer-events-none" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-dark p-6 rounded-2xl shadow-xl hidden md:block border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark"
                    alt="Client"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-primary-foreground">
                  500+ Happy Clients
                </p>
                <div className="flex text-accent">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
