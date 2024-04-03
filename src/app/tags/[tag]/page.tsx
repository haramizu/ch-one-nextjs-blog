import { getCategoryFromSlug } from "@/utils/getCategory";

export default async function Page({ params }: { params: { tag: string } }) {
  const tag = await getCategoryFromSlug(params.tag);
  return (
    <>
      <h1>Category Name: {tag.categoryName}</h1>
      <p>Description: {tag.description}</p>
    </>
  );
}
