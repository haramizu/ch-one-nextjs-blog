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
