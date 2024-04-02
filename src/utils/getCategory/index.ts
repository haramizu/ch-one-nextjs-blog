import {
  AllCategoryQuery,
  AllCategoryResponse,
  Category,
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
