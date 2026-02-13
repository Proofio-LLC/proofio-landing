import { sanityClient } from "@/lib/sanity/client";
import { allBlogPostsQuery } from "@/lib/sanity/queries";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Home, ChevronRight } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";
import { BlogPost } from "@/app/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Proofio",
  description: "Entdecke die neuesten Artikel, Best Practices und Insights rund um Review-Aggregation und Customer Feedback.",
  openGraph: {
    title: "Proofio Blog - Review Intelligence Insights",
    description: "Latest articles and best practices for review management and customer feedback.",
  },
};

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
    const imageSource = image.asset._ref || image.asset._id || image.asset;
    return urlFor(imageSource).width(800).height(450).url();
  } catch (error) {
    if (image.asset.url) {
      return image.asset.url;
    }
    return "/blog-placeholder.jpg";
  }
};

export default async function BlogPage() {
  // Fetch all blog posts from Sanity
  let blogPosts: BlogPost[] = [];

  if (sanityClient) {
    try {
      blogPosts = await sanityClient.fetch<BlogPost[]>(allBlogPostsQuery);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proofio.app" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://proofio.app/blog" }
            ]
          })
        }}
      />
      
      {/* Blog Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto mb-8">
            <ol className="flex items-center gap-1 sm:gap-2 text-sm text-base-content/50">
              <li className="flex items-center">
                <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 opacity-50" />
              </li>
              <li className="font-medium text-base-content">
                Blog
              </li>
            </ol>
          </nav>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Blog
            </h1>
            <p className="text-xl text-base-content/70">
              Entdecke die neuesten Artikel, Best Practices und Insights rund um
              Review-Aggregation und Customer Feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-base-content/70 text-lg">
                Noch keine Blog-Artikel verfügbar.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="block h-full group"
                >
                  <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-xl transition-all h-full flex flex-col overflow-hidden">
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
                      <h2 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
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
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

