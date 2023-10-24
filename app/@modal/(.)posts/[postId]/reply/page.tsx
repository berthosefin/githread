import { getUser } from "@/lib/user.query";
import { ReplyModal } from "./ReplyModal";
import { createReply } from "@/app/posts/[postId]/reply/writeReply.actions";

export default async function Page({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const user = await getUser();

  return (
    <ReplyModal
      user={user}
      createReply={async (values) => {
        "use server";

        const reply = await createReply(params.postId, values);
        return reply;
      }}
    />
  );
}
