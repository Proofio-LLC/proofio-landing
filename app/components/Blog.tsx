import { sanityClient } from "@/lib/sanity/client";
import { blogPostsQuery } from "@/lib/sanity/queries";
import BlogPosts from "./BlogPosts";
import BlogHeader from "./BlogHeader";

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
  
  // Only fetch if Sanity is configured
  if (sanityClient) {
    try {
      blogPosts = await sanityClient.fetch<BlogPost[]>(blogPostsQuery);
      // Debug logging
      if (process.env.NODE_ENV === 'development') {
        console.log('Fetched blog posts:', blogPosts.length, blogPosts);
      }
    } catch (error) {
      // Log errors in both development and production
      console.error("Error fetching blog posts:", error);
      // Fallback to empty array if Sanity is not configured or fails
    }
  } else {
    // Log if Sanity client is not configured
    if (process.env.NODE_ENV === 'development') {
      console.warn('Sanity client is not configured. Check NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local');
    }
  }
  
  return (
    <section id="blog" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <BlogHeader />
        <BlogPosts posts={blogPosts} />
      </div>
    </section>
  );
}
