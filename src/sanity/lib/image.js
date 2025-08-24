import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

// Create a builder instance using the Sanity client
const builder = imageUrlBuilder(client);

// Export the image URL builder function
export function image(source) {
  // Return the image URL builder for the given source
  return builder.image(source);
}

// You can also export a more comprehensive function if needed
export function urlFor(source) {
  return builder.image(source);
}
