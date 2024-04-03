import {
  AllBlogFromTagQuery,
  AllBlogQuery,
  AllBlogResponse,
  AllTopStoryQuery,
  Blog,
  BlogFromIDQuery,
  BlogResponse,
} from "@/interfaces/Blog";
import { fetchGraphQL } from "@/utils";

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
