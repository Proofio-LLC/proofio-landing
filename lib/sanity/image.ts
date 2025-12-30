import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create builder only if client exists
const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity client not configured');
  }
  return builder.image(source);
}

