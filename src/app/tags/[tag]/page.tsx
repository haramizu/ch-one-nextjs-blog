import BlogCard from "@/components/BlogCard";
import { getAllBlogFromTag } from "@/utils/getBlog";
import { getAllCategoryUrl, getCategoryFromSlug } from "@/utils/getCategory";

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = await getAllCategoryUrl();

  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tag = await getCategoryFromSlug(params.tag);

  if (tag.id === undefined) {
    return <></>;
  }

  const posts = await getAllBlogFromTag(tag.id);

  return (
    <main>
      <h1 className="text-3xl ml-6 bold p-6">Tag: {tag.categoryName}</h1>
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
