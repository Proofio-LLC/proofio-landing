import { sanityClient } from "@/lib/sanity/client";
import { blogPostBySlugQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Calendar, ArrowLeft, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import NewsletterCTA from "@/app/components/NewsletterCTA";

// Blog post type for detail page
interface BlogPostDetail {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  category?: string;
  body?: any; // Portable Text
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

// Portable Text components
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value.asset).width(1200).height(675).url();
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={1200}
            height={675}
            className="rounded-[2rem] w-full shadow-lg"
          />
          {value.alt && (
            <p className="text-sm text-base-content/60 mt-2 text-center">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-black mt-12 mb-6 text-base-content tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-black mt-10 mb-5 text-base-content tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-base-content tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-bold mt-6 mb-3 text-base-content tracking-tight">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="relative border-l-0 pl-8 md:pl-12 my-10 italic">
        <div className="absolute left-0 top-0 text-6xl text-primary/20 font-serif leading-none select-none">“</div>
        <p className="text-xl md:text-2xl text-base-content/80 leading-relaxed font-medium">
          {children}
        </p>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-lg md:text-xl text-base-content/75 leading-[1.7] font-normal">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 mb-8 space-y-3 text-lg md:text-xl text-base-content/75 leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 mb-8 space-y-3 text-lg md:text-xl text-base-content/75 leading-relaxed">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-base-content">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-base-content/90">{children}</em>
    ),
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
const getImageUrl = (image?: BlogPostDetail["mainImage"]) => {
  if (!image?.asset) return null;
  try {
    const imageSource = image.asset._ref || image.asset._id || image.asset;
    return urlFor(imageSource).width(1200).height(675).url();
  } catch (error) {
    if (image.asset.url) {
      return image.asset.url;
    }
    return null;
  }
};

// Generate metadata for SEO and OpenGraph
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  if (!sanityClient) {
    return {
      title: "Blog Post",
    };
  }

  try {
    const { slug } = await params;
    const post = await sanityClient.fetch<BlogPostDetail>(blogPostBySlugQuery, {
      slug,
    });

    if (!post) {
      return {
        title: "Post not found",
      };
    }

    const imageUrl = getImageUrl(post.mainImage);

    return {
      title: `${post.title} | Proofio Blog`,
      description: post.excerpt || post.title,
      openGraph: {
        title: post.title,
        description: post.excerpt || post.title,
        type: "article",
        publishedTime: post.publishedAt,
        authors: post.author ? [post.author.name] : undefined,
        images: imageUrl
          ? [
              {
                url: imageUrl,
                width: 1200,
                height: 675,
                alt: post.mainImage?.alt || post.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || post.title,
        images: imageUrl ? [imageUrl] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
    };
  }
}

// Fetch blog post data
async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  if (!sanityClient) {
    console.warn("Sanity client not configured");
    return null;
  }

  try {
    if (process.env.NODE_ENV === 'development') {
      console.log("Fetching blog post with slug:", slug);
    }
    const post = await sanityClient.fetch<BlogPostDetail>(blogPostBySlugQuery, {
      slug,
    });
    if (process.env.NODE_ENV === 'development') {
      console.log("Fetched post:", post ? "Found" : "Not found", post);
    }
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = getImageUrl(post.mainImage);

  // Build BlogPosting and Breadcrumb JSON-LD
  const canonicalUrl = `https://proofio.app/blog/${post.slug?.current || slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": imageUrl ? [imageUrl] : [],
    "author": post.author ? { "@type": "Person", "name": post.author.name } : { "@type": "Organization", "name": "Proofio" },
    "publisher": {
      "@type": "Organization",
      "name": "Proofio",
      "logo": { "@type": "ImageObject", "url": "https://proofio.app/logo.svg" }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proofio.app" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://proofio.app/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": canonicalUrl }
    ]
  };

  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <article>
        {/* Hero Image with Title Overlay */}
        <div className="container mx-auto px-4 pt-32 pb-12 max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
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
              <li className="flex items-center">
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 opacity-50" />
              </li>
              <li className="font-medium text-base-content truncate max-w-[20ch] sm:max-w-[40ch]">
                {post.title}
              </li>
            </ol>
          </nav>

          {imageUrl ? (
            <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                {/* Category Badge */}
                {post.category && (
                  <div className="mb-4">
                    <span className="badge badge-outline badge-lg bg-white/20 backdrop-blur-sm border-white/30 text-white">
                      {post.category}
                    </span>
                  </div>
                )}
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {post.title}
                </h1>
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-white/90 drop-shadow-md">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm md:text-base">{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base">from {post.author.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Fallback if no image */
            <div className="mb-8">
              {post.category && (
                <div className="mb-4">
                  <span className="badge badge-outline badge-lg">{post.category}</span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                {post.title}
              </h1>
            </div>
          )}
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12 max-w-4xl">
        {/* Excerpt Card */}
        {post.excerpt && (
          <div className="bg-gradient-to-br from-base-200 to-base-300 rounded-[2rem] p-6 md:p-8 mb-8 border border-base-300 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-1 h-full min-h-[40px] bg-primary rounded-full"></div>
              <p className="text-lg md:text-xl text-base-content/90 leading-relaxed font-medium italic">
                {post.excerpt}
              </p>
            </div>
          </div>
        )}

        {/* Body Content */}
        {post.body && (
          <div className="prose prose-lg md:prose-xl max-w-none prose-primary prose-headings:tracking-tight prose-p:leading-relaxed prose-img:rounded-[2rem]">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        )}
      </div>
      </article>

      <NewsletterCTA />
      
      <Footer />
    </main>
  );
}
