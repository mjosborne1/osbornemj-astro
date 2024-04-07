import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByTag = (Posts: CollectionEntry<"blog">[], tag: string) =>
  getSortedPosts(
    Posts.filter(posts => slugifyAll(posts.data.tags).includes(tag))
  );

export default getPostsByTag;
