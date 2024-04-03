import {
  AllCategoryQuery,
  AllCategoryResponse,
  Category,
  CategoryFromIDQuery,
  CategoryFromSlugQuery,
  CategoryResponse,
} from "@/interfaces/Category";
import { fetchGraphQL } from "@/utils";

export async function getAllCategory() {
  const tags: AllCategoryResponse = (await fetchGraphQL(
    AllCategoryQuery
  )) as AllCategoryResponse;

  const results: Partial<Category>[] = [];

  tags.data.allCategory.results.forEach((post: Partial<Category>) => {
    results.push({
      id: post.id,
      name: post.name,
      categoryName: post.categoryName,
      description: post.description,
      slug: post.slug,
      hero: post.hero,
    });
  });

  return results;
}

export async function getCategoryFromID(id: string) {
  const tag: CategoryResponse = (await fetchGraphQL(
    CategoryFromIDQuery(id)
  )) as CategoryResponse;

  return tag.data.category;
}

export async function getCategoryFromSlug(slug: string) {
  const tags: AllCategoryResponse = (await fetchGraphQL(
    CategoryFromSlugQuery(slug)
  )) as AllCategoryResponse;

  return tags.data.allCategory.results[0];
}
