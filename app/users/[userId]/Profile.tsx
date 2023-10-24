import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserProfile } from "@/lib/user.query";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const removeHttp = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};

export const Profile = ({
  user,
  children,
}: PropsWithChildren<{ user: getUserProfile }>) => {
  return (
    <div className="mt-4 container">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <p>{user.username}</p>
        </div>
        <Avatar size="lg">
          {user.image ? (
            <AvatarImage src={user.image} alt={user.username} />
          ) : null}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {user.bio ? (
        <p>{user.bio}</p>
      ) : (
        <p className="text-muted-foreground">no bio</p>
      )}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex -space-x-2">
          {user.followeds.map((f) => (
            <Avatar
              size="sm"
              className="boder-2 border-background"
              key={f.follower.id}
            >
              {f.follower.image ? (
                <AvatarImage src={f.follower.image} alt={f.follower.id} />
              ) : null}
              <AvatarFallback>
                {f.follower.username.slice(0, 2).toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-muted-foreground">{" . "}</p>
        <p className="text-muted-foreground">
          {user._count.followeds} followers
        </p>
        {user.link ? (
          <>
            <p className="text-muted-foreground">{" . "}</p>
            <Link
              className="text-muted-foreground hover:underline"
              href={user.link}
            >
              {removeHttp(user.link)}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
