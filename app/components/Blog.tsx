import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import { blogPostsQuery } from "@/lib/sanity/queries";
import BlogPosts from "./BlogPosts";

// Blog post type for Sanity
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  category?: string;
  mainImage?: {
    asset: {
      _id?: string;
      _ref?: string;
      _type?: string;
      url?: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    image?: {
      asset: {
        _id?: string;
        _ref?: string;
        _type?: string;
        url?: string;
      };
    };
  };
}

export default async function Blog() {
  // Fetch blog posts from Sanity
  let blogPosts: BlogPost[] = [];
  
  try {
    blogPosts = await sanityClient.fetch<BlogPost[]>(blogPostsQuery);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Fallback to empty array if Sanity is not configured
  }
  return (
    <section id="blog" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">BLOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Tips, guides, and insights about review management
          </p>
        </motion.div>

        <BlogPosts posts={blogPosts} />
      </div>
    </section>
  );
}
