import { getBlogFromID } from "@/utils/getBlog";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBlogFromID(params.slug);
  return (
    <>
      <h1>Blog Title: {post.title}</h1>
      <p>PublishDate: {post.publishDate}</p>
    </>
  );
}
