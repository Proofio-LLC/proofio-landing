# Sanity CMS Integration

Diese Dateien bereiten die Integration mit Sanity CMS vor.

## Setup

1. Installiere die Dependencies:

```bash
npm install
```

2. Erstelle eine `.env.local` Datei mit:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=deine-project-id
NEXT_PUBLIC_SANITY_DATASET=dein-dataset-name
```

**Wichtig:** Der Dataset-Name muss genau dem entsprechen, den du in deinem Sanity Studio verwendest. Standardmäßig heißt er oft "production", kann aber auch anders sein. Du findest den Dataset-Namen oben rechts im Sanity Studio oder in der `sanity.config.ts` deines Studio-Projekts.

3. Erstelle in deinem Sanity-Projekt (über sanity.io) ein Schema für Blog Posts:

- Type: `post`
- Fields: `title`, `slug`, `excerpt`, `publishedAt`, `category`, `mainImage`, `author`, `body`

## Verwendung

In der Blog-Komponente (`app/components/Blog.tsx`):

```typescript
// Uncomment these imports:
import { sanityClient } from "@/lib/sanity/client";
import { blogPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// Fetch data:
const blogPosts = await sanityClient.fetch(blogPostsQuery);

// Get image URL:
const imageUrl = urlFor(post.mainImage).width(800).height(450).url();
```

## Queries

Die Queries sind in `lib/sanity/queries.ts` definiert:

- `blogPostsQuery`: Holt die letzten 6 Blog Posts
- `blogPostBySlugQuery`: Holt einen einzelnen Post nach Slug
