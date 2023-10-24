import { getUser } from "@/lib/user.query";
import { WritePostForm } from "./WritePostForm";
import { createPost } from "./writePost.action";

export default async function Write() {
  const user = await getUser();

  return <WritePostForm user={user} onSubmit={createPost} />;
}
