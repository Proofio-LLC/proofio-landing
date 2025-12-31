import { createClient } from '@sanity/client';

// Only create client if credentials are available
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (projectId && process.env.NODE_ENV === 'development') {
  console.log(`Sanity Client initialized with projectId: ${projectId}, dataset: ${dataset}`);
}

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2025-02-19',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null;

