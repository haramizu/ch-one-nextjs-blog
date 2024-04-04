import TagCard from "@/components/TagCard";
import { getAllCategory } from "@/utils/getCategory";
import { Fragment } from "react";

export default async function Tags() {
  const tags = await getAllCategory();

  return (
    <main>
      <h1 className="text-3xl bold p-6">Blog Tags</h1>
      <div className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tags.map((tag, index) => (
              <div key={index}>{TagCard(tag)}</div>
            ))}{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
