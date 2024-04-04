import { Category } from "@/interfaces/Category";
import Image from "next/image";
import Link from "next/link";

export default function TagCard(tag: Partial<Category>) {
  return (
    <>
      <article
        key={tag.id}
        className="flex flex-col items-start justify-between "
      >
        <div className="relative w-full ">
          <Link href={"/tags/" + tag.id}>
            <Image
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              src={
                tag.hero?.results[0].fileUrl ||
                "/content-hub-one-horizontal-color-white-txt.svg"
              }
              alt={tag.hero?.results[0].description || "Image"}
              width={tag.hero?.results[0].fileWidth || "250"}
              height={tag.hero?.results[0].fileHeight || "250"}
            />
          </Link>
        </div>
        <div className="max-w-xl">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-300 group-hover:text-gray-600">
              <Link href={"/tags/" + tag.slug}>
                <span className="absolute inset-0" />
                {tag.categoryName}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {tag.description}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
