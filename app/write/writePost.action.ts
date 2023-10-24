"use server";

import { WritePostFormValues } from "./WritePostForm";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const createPost = async (values: WritePostFormValues) => {
  const session = await getAuthSession();

  if (!session?.user.id) {
    throw new Error("You must be logged in to do this.");
  }

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: session.user.id,
    },
  });

  try {
    redirect(`/posts/${post.id}`);
  } catch (error) {
    return `/posts/${post.id}`;
  }
};
