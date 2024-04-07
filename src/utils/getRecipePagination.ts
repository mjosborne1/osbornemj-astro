import { SITE } from "@config";
import getPageNumbers from "./getPageNumbers";

interface GetRecipePaginationProps<T> {
    recipes: T;
    page: string | number;
    isIndex?: boolean;
  }
  
  const getRecipePagination = <T>({
    recipes,
    page,
    isIndex = false,
  }: GetRecipePaginationProps<T[]>) => {
    const totalPagesArray = getPageNumbers(recipes.length);
    const totalPages = totalPagesArray.length;
  
    const currentPage = isIndex
      ? 1
      : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))
        ? Number(page)
        : 0;
  
    const lastRecipe = isIndex ? SITE.postPerPage : currentPage * SITE.postPerPage;
    const startRecipe = isIndex ? 0 : lastRecipe - SITE.postPerPage;
    const paginatedRecipes = recipes.slice(startRecipe, lastRecipe);
  
    return {
      totalPages,
      currentPage,
      paginatedRecipes,
    };
  };
  
  export default  getRecipePagination;
  