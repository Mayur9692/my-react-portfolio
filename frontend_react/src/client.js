
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const token = process.env.REACT_PUBLIC_SANITY_TOKEN;

export const config = {
  projectId: 'nu48nb5j',
  dataset: 'production',
  apiVersion: '2022-09-14',
  useCdn: false,
  token,
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

export { client, builder };
export const urlFor = (source) => builder.image(source);


