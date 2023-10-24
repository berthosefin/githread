import { editProfile } from "@/app/profile/edit/editProfile.action";
import { getUserEdit } from "@/lib/user.query";
import React from "react";
import { EditProfileModal } from "./EditProfileModal";

export default async function page() {
  const user = await getUserEdit();

  return <EditProfileModal user={user} editProfile={editProfile} />;
}
