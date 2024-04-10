import { BLOG_PAGE_SIZE } from "@/constants/build";
import { Category, CategoryQuery } from "@/interfaces/Category";
import { Media, MediaQuery } from "@/interfaces/Media";
import { RichTextResponse } from "@/interfaces/RichText";

export interface Blog {
  id: string;
  name: string;
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  hero: {
    total: number;
    results: Media[];
  };
  tag: {
    total: number;
    results: Category[];
  };
  content: RichTextResponse;
}

export interface BlogResponse {
  data: {
    blog: Partial<Blog>;
  };
}

export interface AllBlogResponse {
  data: {
    allBlog: {
      total: number;
      results: Partial<Blog>[];
      pageInfo: {
        endCursor: string;
        hasNext: boolean;
      };
    };
  };
}

const BlogQuery =
  `
  id
  name
  title
  description
  publishDate
  slug
  content
  topStory
  hero {
      total
      results {
        ` +
  MediaQuery +
  `
      }
  }
  tag {
      total
      results {
        ` +
  CategoryQuery +
  `
      }
  }
  `;

export const AllBlogQuery =
  `
  query AllBlog {
    allBlog(first: ${BLOG_PAGE_SIZE}, orderBy: PUBLISHDATE_DESC) {
      total
        results {
            ` +
  BlogQuery +
  `
        }
    }
}
`;

export const AllBlogUrlQuery =
  `
  query AllBlog {
    allBlog(first: 1000, orderBy: PUBLISHDATE_DESC) {
      total
        results {
            ` +
  BlogQuery +
  `
        }
    }
}
`;

export const BlogFromIDQuery = (blogId: string) => {
  return (
    `
    query Blog {
      blog(id: "${blogId}") {
          ` +
    BlogQuery +
    `
      }
    }
    `
  );
};

export const AllTopStoryQuery =
  `
  query AllBlog {
    allBlog(where: { topStory_eq: true }, orderBy: PUBLISHDATE_DESC) {
        total
        results {
            ` +
  BlogQuery +
  `
        }
    }
}
`;

export const AllBlogFromTagQuery = (categoryid: string) => {
  return (
    `
    query AllBlog {
      allBlog(
          orderBy: PUBLISHDATE_DESC
          first: 12
          where: { tag: { category_ids: "${categoryid}" } }
      ) {
          total
          results {
              ` +
    BlogQuery +
    `
          }
      }
  }
    `
  );
};

export const BlogFromSlugQuery = (slug: string) => {
  return (
    `
  query AllBlog {
    allBlog( where: { slug_eq: "${slug}" }) {
      total
        results {` +
    BlogQuery +
    `}
    }
  } 
  `
  );
};

export const BlogCursorQuery = (first: number) => {
  return `
    query AllBlog {
      allBlog(first: ${first}, orderBy: PUBLISHDATE_DESC) {
        total
        pageInfo {
          endCursor
          hasNext
        }
      }
    }
`;
};

export const BlogPaginationQuery = (endCursor: string) => {
  return (
    `
    query AllBlog {
      allBlog(
          first: ${BLOG_PAGE_SIZE}
          after: "${endCursor}"
          orderBy: PUBLISHDATE_DESC
      ) {
          total
          results {` +
    BlogQuery +
    `}
      }
  }
  
  `
  );
};

export const BlogWithTagTotalQuery = (tagId: string) => {
  return `
    query AllBlog {
      allBlog(where: { tag: { category_ids: "${tagId}" } }) {
          total
      }
    }  `;
};
