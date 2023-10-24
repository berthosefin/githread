import { getLatestPosts } from "@/lib/post.query";
import { Post } from "@/components/feature/post/Post";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  const posts = await getLatestPosts(session?.user.id);

  return (
    <div className="divide-y divide-y-muted">
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
