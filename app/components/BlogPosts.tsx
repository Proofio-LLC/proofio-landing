"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "./Blog";
import { urlFor } from "@/lib/sanity/image";

interface BlogPostsProps {
  posts: BlogPost[];
}

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Get image URL from Sanity
const getImageUrl = (image?: BlogPost["mainImage"]) => {
  if (!image?.asset) return "/blog-placeholder.jpg";
  try {
    // Handle asset reference (_ref) or resolved asset object
    const imageSource = image.asset._ref || image.asset._id || image.asset;
    return urlFor(imageSource).width(800).height(450).url();
  } catch (error) {
    // Fallback to direct URL if available
    if (image.asset.url) {
      return image.asset.url;
    }
    console.warn('Failed to get image URL:', error);
    return "/blog-placeholder.jpg";
  }
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base-content/70">No blog posts available yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug.current}`} className="block h-full">
              <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-xl transition-all h-full flex flex-col overflow-hidden group">
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden bg-base-200">
                  <Image
                    src={getImageUrl(post.mainImage)}
                    alt={post.mainImage?.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {post.category && (
                    <div className="badge badge-outline badge-sm mb-3 w-fit">
                      {post.category}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-base-content/70 text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-200">
                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link href="/blog" className="btn btn-outline btn-lg rounded-xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
          View all articles
        </Link>
      </motion.div>
    </>
  );
}

