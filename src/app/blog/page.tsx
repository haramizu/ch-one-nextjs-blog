import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getAllBlog, getBlogTotal } from "@/utils/getBlog";

export default async function BlogHome() {
  const posts = await getAllBlog();
  const total = await getBlogTotal();
  return (
    <main>
      <h1 className="text-3xl bold p-6">Blog List</h1>
      <div className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <div key={index}>{BlogCard(post)}</div>
            ))}
          </div>
        </div>
      </div>
      <Pagination totalNumber={total} />
    </main>
  );
}
