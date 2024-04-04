import { getBlogFromSlug } from "@/utils/getBlog";
import moment from "moment";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBlogFromSlug(params.slug[3]);

  return (
    <main>
      <div className="mx-auto text-center mt-4">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 font-bold">
          Published: {showDate(post.publishDate)}
        </p>
        <p className="my-4">
          Tags:
          {post.tag?.results.map((tag, index) => (
            <Link href={"/tags/" + tag.slug} key={index} className="ml-2">
              {tag.categoryName}
            </Link>
          ))}
        </p>
      </div>
      <article>
        <div className="mx-10 mb-2">
          <p className="mb-2">{post.description}</p>
          <p className="mb-2">Rich Text Area</p>
        </div>
      </article>
    </main>
  );
}

function showDate(publishedDate: string | undefined) {
  const yearmonthdate = publishedDate?.slice(0, 10);
  const showDate = moment(yearmonthdate);

  return (
    showDate.format("YYYY") +
    "/" +
    showDate.format("MM") +
    "/" +
    showDate.format("DD")
  );
}
