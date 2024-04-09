import { Blog } from "@/interfaces/Blog";
import moment from "moment";

export function getBlogUrl(post: Partial<Blog>) {
  const yearmonthdate = post.publishDate?.slice(0, 10);
  const blogUrlDate = moment(yearmonthdate);

  return (
    "/blog/" +
    blogUrlDate.format("YYYY") +
    "/" +
    blogUrlDate.format("MM") +
    "/" +
    blogUrlDate.format("DD") +
    "/" +
    post.slug
  );
}

export function createBlogUrl(post: Partial<Blog>) {
  if (!post.publishDate || !post.slug) {
    return { slug: ["2024", "03", "25", "content-hub-one-overview"] };
  }
  const yearmonthdate = post.publishDate.slice(0, 10);
  const blogUrlDate = moment(yearmonthdate);

  return {
    slug: [
      blogUrlDate.format("YYYY"),
      blogUrlDate.format("MM"),
      blogUrlDate.format("DD"),
      post.slug,
    ],
  };
}
