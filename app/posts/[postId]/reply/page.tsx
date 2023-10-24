import { WritePostForm } from "@/app/write/WritePostForm";
import { Post } from "@/components/feature/post/Post";
import { getPost } from "@/lib/post.query";
import { getUser } from "@/lib/user.query";
import { notFound } from "next/navigation";
import React from "react";
import { createReply } from "./writeReply.actions";

export default async function PostReplay({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const user = await getUser();
  const post = await getPost(params.postId, user.id);

  if (!post) return notFound();

  return (
    <div>
      <Post post={post} />
      <WritePostForm
        user={user}
        onSubmit={async (values) => {
          "use server";
          return createReply(post.id, values);
        }}
      />
    </div>
  );
}
