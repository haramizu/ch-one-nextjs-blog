import { getTopStory } from "@/utils/getBlog";

export default async function Home() {
  const posts = await getTopStory();
  return (
    <main>
      <h1>Content Hub ONE Top Story</h1>
      <ul>
        {posts.map((post) => (
          <>
            <li key={post.id}>{post.title}</li>
          </>
        ))}
      </ul>
    </main>
  );
}
