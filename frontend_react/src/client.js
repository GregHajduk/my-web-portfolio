import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "REACT_APP_SANITY_PROJECT_ID",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: "REACT_APP_SANITY_TOKEN",
});

const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source);
