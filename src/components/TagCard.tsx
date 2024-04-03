import { Category } from "@/interfaces/Category";
import Image from "next/image";
import Link from "next/link";

export default function TagCard(tag: Partial<Category>) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border m-4 dark:border-gray-700">
      <Link href={"/tags/" + tag.slug}>
        <Image
          className="w-full h-48 object-cover object-top"
          src={
            tag.hero?.results[0].fileUrl ||
            "/content-hub-one-horizontal-color-white-txt.svg"
          }
          alt={tag.hero?.results[0].description || "Image"}
          width={tag.hero?.results[0].fileWidth || "250"}
          height={tag.hero?.results[0].fileHeight || "250"}
        />
      </Link>
      <div className="px-6 py-4 border-t">
        <div className="font-bold text-xl mb-2">
          <Link href={"/tags/" + tag.slug}>{tag.categoryName}</Link>
        </div>
        <p className="text-gray-700 text-base dark:text-gray-400">
          <Link href={"/tags/" + tag.slug}>{tag.description}</Link>
        </p>
      </div>
    </div>
  );
}
