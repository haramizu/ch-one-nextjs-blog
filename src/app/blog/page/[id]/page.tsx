import BlogCard from "@/components/BlogCard";
import { BLOG_PAGE_SIZE } from "@/constants/build";
import {
  getBlogCursor,
  getBlogPagination,
  getBlogTotal,
} from "@/utils/getBlog";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const total = await getBlogTotal();

  const pages = Math.ceil(total / BLOG_PAGE_SIZE);

  const staticParams = [];
  for (let i = 1; i <= pages; i++) {
    staticParams.push({ id: `${i}` });
  }

  return staticParams;
}

export default async function BlogPagination({
  params,
}: {
  params: { id: string };
}) {
  const pageNumber = parseInt(params.id, 10);

  const pageCausor = await getBlogCursor((pageNumber - 1) * BLOG_PAGE_SIZE);
  const posts = await getBlogPagination(pageCausor);

  if (pageNumber == 1) {
    redirect("/blog");
  } else {
    return (
      <main>
        <h1 className="text-3xl bold p-6">Blog List - Page {params.id}</h1>
        <div className="py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post, index) => (
                <div key={index}>{BlogCard(post)}</div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
