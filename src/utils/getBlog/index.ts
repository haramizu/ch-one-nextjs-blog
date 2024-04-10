import {
  AllBlogFromTagQuery,
  AllBlogQuery,
  AllBlogResponse,
  AllBlogUrlQuery,
  AllTopStoryQuery,
  Blog,
  BlogCursorQuery,
  BlogFromIDQuery,
  BlogFromSlugQuery,
  BlogPaginationQuery,
  BlogResponse,
  BlogWithTagTotalQuery,
} from "@/interfaces/Blog";
import { easyGraphQL, fetchGraphQL } from "@/utils";

export async function getAllBlog() {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllBlogQuery
  )) as AllBlogResponse;

  const contents: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    contents.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      hero: post.hero,
      tag: post.tag,
      content: post.content,
    });
  });

  return contents;
}

export async function getTopStory() {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllTopStoryQuery
  )) as AllBlogResponse;

  const contents: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    contents.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      hero: post.hero,
      tag: post.tag,
      content: post.content,
    });
  });

  return contents;
}

export async function getBlogFromID(id: string) {
  const post: BlogResponse = (await fetchGraphQL(
    BlogFromIDQuery(id)
  )) as BlogResponse;

  return post.data.blog;
}

export async function getAllBlogFromTag(id: string) {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllBlogFromTagQuery(id)
  )) as AllBlogResponse;

  const contents: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    contents.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      hero: post.hero,
      tag: post.tag,
      content: post.content,
    });
  });

  return contents;
}

export async function getBlogFromSlug(slug: string) {
  const post: AllBlogResponse = (await fetchGraphQL(
    BlogFromSlugQuery(slug)
  )) as AllBlogResponse;

  return post.data.allBlog.results[0];
}

export async function getBlogTotal() {
  const results: AllBlogResponse = (await easyGraphQL(
    AllBlogQuery
  )) as AllBlogResponse;

  return results.data.allBlog.total;
}

export async function getBlogCursor(pageNumber: number) {
  const results: AllBlogResponse = (await easyGraphQL(
    BlogCursorQuery(pageNumber)
  )) as AllBlogResponse;

  return results.data.allBlog.pageInfo.endCursor;
}

export async function getBlogPagination(endCursor: string) {
  const results: AllBlogResponse = (await easyGraphQL(
    BlogPaginationQuery(endCursor)
  )) as AllBlogResponse;

  const contents: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    contents.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      hero: post.hero,
      tag: post.tag,
      content: post.content,
    });
  });

  return contents;
}

export async function getAllBlogUrl() {
  const results: AllBlogResponse = (await easyGraphQL(
    AllBlogUrlQuery
  )) as AllBlogResponse;

  const contents: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    contents.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      slug: post.slug,
      hero: post.hero,
      tag: post.tag,
      content: post.content,
    });
  });

  return contents;
}

export async function getBlogWithTagTotal(tagId: string) {
  const tags: AllBlogResponse = (await easyGraphQL(
    BlogWithTagTotalQuery(tagId)
  )) as AllBlogResponse;

  return tags.data.allBlog.total;
}
