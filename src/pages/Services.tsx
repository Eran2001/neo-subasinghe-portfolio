import { motion } from "framer-motion";
import { SectionHeading } from "@/src/components/common/Common";
import { SERVICES } from "@/src/constant/mockData";
import { Button } from "@/src/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Offerings"
          title="Tailored Photography Packages"
          centered
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-[3rem] p-12 border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-accent font-black text-3xl">
                  {service.priceRange}
                </p>
              </div>

              <p className="text-muted-foreground mb-10 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-12 grow">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="w-full rounded-full py-7 text-lg group">
                  Select Package{" "}
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <section className="bg-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 noise-overlay opacity-10" />
          <div className="relative z-10">
            <SectionHeading
              title="Custom Add-ons"
              subtitle="Enhance Your Session"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Extra Hour", price: "$150" },
                { title: "Express Delivery", price: "$200" },
                { title: "Fine Art Album", price: "$450" },
                { title: "Second Shooter", price: "$500" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-accent font-black">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
