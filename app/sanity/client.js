import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

//... 

const client = createClient({
  projectId: "ehtqjgk8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false
});


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client