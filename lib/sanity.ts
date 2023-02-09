import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	apiVersion: '2023-02-01' as const,
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN as string,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source);
