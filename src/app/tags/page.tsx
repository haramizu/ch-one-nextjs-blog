import { getAllCategory } from "@/utils/getCategory";
import Link from "next/link";

export default async function Tags() {
  const tags = await getAllCategory();

  return (
    <main>
      <h1>Content Hub ONE - Tag list</h1>
      <ul>
        {tags.map((tag, index) => (
          <>
            <li key={index}>
              <Link href={"/tags/" + tag.id}>{tag.categoryName}</Link>
            </li>
          </>
        ))}
      </ul>
    </main>
  );
}
