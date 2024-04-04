import { Media, MediaQuery } from "@/interfaces/Media";

export interface Category {
  id: string;
  name: string;
  categoryName: string;
  description: string;
  slug: string;
  hero: {
    total: number;
    results: Media[];
  };
}

export interface AllCategoryResponse {
  data: {
    allCategory: {
      total: number;
      results: Partial<Category>[];
    };
  };
}

export interface CategoryResponse {
  data: {
    category: Partial<Category>;
  };
}

export const CategoryQuery =
  `
id
name
categoryName
description
slug
hero {
    total
    results {` +
  MediaQuery +
  `}
}
`;

export const AllCategoryQuery =
  `
  query AllCategory {
    allCategory(orderBy: CATEGORYNAME_ASC) {
      total
      results {` +
  CategoryQuery +
  `      
      }
    }
  }
`;

export const CategoryFromIDQuery = (categoryId: string) => {
  return (
    `
  query Category {
    category(id: "${categoryId}") {
        ` +
    CategoryQuery +
    `
    }
  }
  `
  );
};

export const CategoryFromSlugQuery = (slug: string) => {
  return (
    `
    query AllCategory {
      allCategory(where: { slug_eq: "${slug}" }) {
          total
          results {
        ` +
    CategoryQuery +
    `
          }
      }
    }
  `
  );
};
