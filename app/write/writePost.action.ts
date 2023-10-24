"use server";

import { WritePostFormValues } from "./WritePostForm";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/user.query";

export const createPost = async (values: WritePostFormValues) => {
  const user = await getUser();

  console.log("Next");
  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
    },
  });

  return post.id;
};
