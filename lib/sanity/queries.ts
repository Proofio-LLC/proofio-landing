// GROQ query helper (simple tagged template function)
const groq = (strings: TemplateStringsArray, ...values: any[]): string => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
};

export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    mainImage {
      asset,
      alt
    },
    author-> {
      name,
      image {
        asset
      }
    }
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    body,
    mainImage {
      asset,
      alt
    },
    author-> {
      name,
      image {
        asset
      }
    }
  }
`;

