import { motion } from "framer-motion";
import { SectionHeading } from "@/src/components/common/Common";
import { POSTS } from "@/src/constant/mockData";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";

export const Journal = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Journal"
          title="Insights & Stories"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link
                to={`/journal/${post.id}`}
                className="block relative aspect-[16/9] overflow-hidden rounded-[2.5rem] mb-8"
              >
                <img
                  src={post.coverSrc}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/90 backdrop-blur-md text-dark border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} /> {post.tags[0]}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-lg mb-8 line-clamp-2">
                {post.excerpt}
              </p>

              <Link
                to={`/journal/${post.id}`}
                className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:text-accent transition-colors"
              >
                Read Full Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
