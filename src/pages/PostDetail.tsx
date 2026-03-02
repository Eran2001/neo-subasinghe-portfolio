import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { POSTS } from "@/src/constant/mockData";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { NotFound } from "./NotFound";

export const PostDetail = () => {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/journal">
          <Button variant="ghost" className="mb-12 rounded-full pl-2">
            <ArrowLeft className="mr-2" size={18} /> Back to Journal
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} /> {post.tags[0]}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tighter">
            {post.title}
          </h1>

          <div className="aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-xl">
            <img
              src={post.coverSrc}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium italic">
              {post.excerpt}
            </p>
            <div className="text-lg leading-relaxed space-y-6">
              <p>{post.content}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <h3 className="text-2xl font-bold mt-12 mb-6">
                The Importance of Vision
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-border flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-4 py-1 rounded-full"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
            <Button variant="ghost" className="rounded-full">
              <Share2 className="mr-2" size={18} /> Share Post
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
