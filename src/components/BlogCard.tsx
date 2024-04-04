import { Blog } from "@/interfaces/Blog";
import Image from "next/image";
import Link from "next/link";

export default function TagCard(post: Partial<Blog>) {
  return (
    <>
      <article
        key={post.id}
        className="flex flex-col items-start justify-between "
      >
        <div className="relative w-full ">
          <Link href={"/blog/" + post.id}>
            <Image
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              src={
                post.hero?.results[0]?.fileUrl ||
                "/content-hub-one-horizontal-color-white-txt.svg"
              }
              alt={post.hero?.results[0]?.description || "Image"}
              width={post.hero?.results[0]?.fileWidth || "250"}
              height={post.hero?.results[0]?.fileHeight || "250"}
            />
          </Link>
        </div>
        <div className="max-w-xl">
          <div className="mt-4 flex items-center gap-x-4 text-xs">
            <time
              dateTime={post.publishDate}
              className="text-gray-500 dark:text-gray-400"
            >
              {post.publishDate}
            </time>
            <Link
              href="/tags/"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Tags
            </Link>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-300 group-hover:text-gray-600">
              <Link href={"/blog/" + post.id}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
