# Proofio Landing Page

Modern landing page for Proofio - API-First Review Aggregation Platform.

## Tech Stack

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **DaisyUI** - UI Components
- **Framer Motion** - Animations
- **Sanity CMS** - Content Management
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```bash
cp .env.example .env.local
```

4. Add your Sanity credentials to `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Add Environment Variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy!

### Environment Variables

Make sure to set these in Vercel Dashboard:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually "production")

## Project Structure

```
app/
  components/     # React components
  globals.css     # Global styles
  layout.tsx      # Root layout
  page.tsx        # Home page
lib/
  sanity/         # Sanity CMS integration
public/           # Static assets
```

## Features

- ✅ Responsive Design
- ✅ Smooth Animations
- ✅ Sanity CMS Integration
- ✅ SEO Optimized
- ✅ Performance Optimized
- ✅ TypeScript
