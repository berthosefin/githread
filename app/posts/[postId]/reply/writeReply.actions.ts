"use server";

import { getUser } from "@/lib/user.query";
import { WritePostFormValues } from "@/app/write/WritePostForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createReply = async (
  postId: string,
  values: WritePostFormValues
) => {
  const user = await getUser();

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
      parentId: postId,
    },
  });

  revalidatePath(`/posts/${postId}`);

  return postId;
};
