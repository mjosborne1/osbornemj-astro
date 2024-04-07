import type { CollectionEntry } from "astro:content";
import recipeFilter from "./recipeFilter";
const getSortedRecipes = (recipes: CollectionEntry<"recipe">[]) => {
  return recipes
    .filter(recipeFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedRecipes;
