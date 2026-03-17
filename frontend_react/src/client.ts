import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-03-17",
  useCdn: true,
  token: import.meta.env.VITE_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);