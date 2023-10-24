import { getAuthSession } from "@/lib/auth";
import { getUserProfile } from "@/lib/user.query";
import React from "react";
import { Profile } from "../users/[userId]/Profile";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Post } from "@/components/feature/post/Post";
import { buttonVariants } from "@/components/ui/button";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    notFound();
  }

  const user = await getUserProfile(session.user.id);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Link
            className={buttonVariants({
              variant: "outline",
            })}
            href={"/profile/edit"}
          >
            Edit profile
          </Link>
        </form>
      </Profile>
      <div className="divide-y divide-accent border-t border-accent mt-4">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
