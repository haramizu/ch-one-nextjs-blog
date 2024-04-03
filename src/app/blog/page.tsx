import { getAllBlog } from "@/utils/getBlog";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllBlog();

  return (
    <main>
      <h1>Content Hub ONE - Blog Title list</h1>
      <ul>
        {posts.map((post, index) => (
          <>
            <li key={index}>
              <Link href={"/blog/" + post.id}>{post.title}</Link>
            </li>
          </>
        ))}
      </ul>
    </main>
  );
}
