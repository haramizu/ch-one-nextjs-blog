import { BLOG_PAGE_SIZE } from "@/constants/build";
import { getBlogWithTagTotal } from "@/utils/getBlog";
import { getAllCategoryUrl } from "@/utils/getCategory";
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
  console.log(staticParams);
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
    return (
      <main>
        <div>tag: {params.tag}</div>
        <div>id: {params.id}</div>
      </main>
    );
  }
}
