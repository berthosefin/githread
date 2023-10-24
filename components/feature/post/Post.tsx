import { PostHome } from "@/lib/post.query";
import React from "react";
import { PostLayout } from "./PostLayout";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { LikeButton } from "./LikeButton";

type PostProps = {
  post: PostHome;
};

export const Post = ({ post }: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="tex-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex gap-2 items-center">
        <LikeButton postId={post.id} isLiked={post.likes.length > 0} />
        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href={`/posts/${post.id}/reply`}
        >
          <MessageCircle size={20} />
        </Link>
      </div>
      <div>
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.likes} likes
        </Link>
        {" . "}
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
