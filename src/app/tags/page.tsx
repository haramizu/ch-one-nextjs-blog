import TagCard from "@/components/TagCard";
import { getAllCategory } from "@/utils/getCategory";
import { Fragment } from "react";

export default async function Tags() {
  const tags = await getAllCategory();

  return (
    <main>
      <h1 className="text-3xl bold p-6">Blog Tags</h1>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <div key={index}>{TagCard(tag)}</div>
        ))}
      </div>
    </main>
  );
}
