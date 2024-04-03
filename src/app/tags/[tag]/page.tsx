import { getAllBlogFromTag } from "@/utils/getBlog";
import { getCategoryFromSlug } from "@/utils/getCategory";

export default async function Page({ params }: { params: { tag: string } }) {
  const tag = await getCategoryFromSlug(params.tag);

  if (tag.id === undefined) {
    return <></>;
  }

  const posts = await getAllBlogFromTag(tag.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl bold">Tag: {tag.categoryName}</h1>
      <p>Description: {tag.description}</p>
      <hr className="my-4" />
      <div>
        <ul>
          {posts.map((post, index) => (
            <div key={index}>{post.title}</div>
          ))}
        </ul>
      </div>
    </div>
  );
}
