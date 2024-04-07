import type { CollectionEntry } from "astro:content";
import getSortedRecipes from "./getSortedRecipes";
import { slugifyAll } from "./slugify";

const getRecipesByTag = (Recipes: CollectionEntry<"recipe">[], tag: string) =>
  getSortedRecipes(
    Recipes.filter(recipe => slugifyAll(recipe.data.tags).includes(tag))
  );

export default getRecipesByTag;
