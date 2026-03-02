import { motion } from "framer-motion";
import { SectionHeading } from "@/src/components/common/Common";
import { Camera, Award, Zap, Heart } from "lucide-react";

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/photographer/800/1000"
                alt="The Photographer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-4xl text-white hidden md:block">
              <p className="text-4xl font-black">12+</p>
              <p className="text-sm uppercase tracking-widest font-bold opacity-70">
                Years Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="The Artist"
              title="Capturing the Soul of the Moment"
              className="mb-8"
            />
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm Julian Thorne, a visual storyteller based in London. My work
              is defined by a relentless pursuit of light, emotion, and the
              quiet moments that often go unnoticed.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-12">
              With over a decade of experience in editorial and commercial
              photography, I've had the privilege of working with global brands
              and intimate clients alike. My philosophy is simple: every subject
              has a story worth telling, and every story deserves to be told
              beautifully.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Camera size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Premium Gear</h4>
                  <p className="text-sm text-muted-foreground">
                    Only the finest optics for your vision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized by IPA and Sony Awards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Awards & Publications */}
        <section className="py-24 border-y border-border/50 mb-32">
          <SectionHeading
            title="Awards & Publications"
            subtitle="Recognition"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-center font-black text-2xl tracking-tighter">
              VOGUE
            </div>
            <div className="text-center font-black text-2xl tracking-tighter">
              BAZAAR
            </div>
            <div className="text-center font-black text-2xl tracking-tighter">
              NY TIMES
            </div>
            <div className="text-center font-black text-2xl tracking-tighter">
              NATIONAL GEO
            </div>
          </div>
        </section>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Zap />,
              title: "Precision",
              desc: "Meticulous attention to every pixel and shadow.",
            },
            {
              icon: <Heart />,
              title: "Emotion",
              desc: "Capturing the raw, authentic feelings of the day.",
            },
            {
              icon: <Camera />,
              title: "Artistry",
              desc: "A unique perspective that transcends the ordinary.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[2.5rem] bg-muted/30 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center mb-8">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
