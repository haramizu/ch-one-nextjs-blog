import BlogCard from "@/components/BlogCard";
import { BLOG_PAGE_SIZE } from "@/constants/build";
import {
  getBlogCursorWithTag,
  getBlogPaginationWithTag,
  getBlogWithTagTotal,
} from "@/utils/getBlog";
import { getAllCategoryUrl, getCategoryIDFromSlug } from "@/utils/getCategory";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = await getAllCategoryUrl();
  const staticParams = [];

  for (const tag of tags) {
    if (tag.id !== undefined) {
      const total = await getBlogWithTagTotal(tag.id);
      const pages = Math.ceil(total / BLOG_PAGE_SIZE);
      for (let i = 1; i <= pages; i++) {
        staticParams.push({ tag: tag.slug, id: `${i}` });
      }
    }
  }
  return staticParams;
}

export default async function TagPagination({
  params,
}: {
  params: { tag: string; id: string };
}) {
  const pageNumber = parseInt(params.id, 10);

  if (pageNumber == 1) {
    redirect("/tags/" + params.tag);
  } else {
    const tagId = await getCategoryIDFromSlug(params.tag);

    if (tagId === undefined) {
      return <></>;
    }
    const pageCausor = await getBlogCursorWithTag(
      (pageNumber - 1) * BLOG_PAGE_SIZE,
      tagId
    );

    const posts = await getBlogPaginationWithTag(pageCausor, tagId);

    return (
      <main>
        <h1 className="text-3xl bold p-6">
          {params.tag} List - Page {params.id}
        </h1>
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
