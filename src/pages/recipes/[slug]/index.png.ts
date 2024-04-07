import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForRecipe } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const recipes = await getCollection("recipe").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return recipes.map(recipe => ({
    params: { slug: slugifyStr(recipe.data.title) },
    props: recipe,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<"recipe">), {
    headers: { "Content-Type": "image/png" },
  });
