import { getAllCategory } from "@/utils/getCategory";

export default async function Tags() {
  const tags = await getAllCategory();

  return (
    <main>
      <h1>Content Hub ONE - Tag list</h1>
      <ul>
        {tags.map((tag) => (
          <>
            <li key={tag.id}>{tag.categoryName}</li>
          </>
        ))}
      </ul>
    </main>
  );
}
