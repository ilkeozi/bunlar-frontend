"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoginIcon } from "../icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export const LoginButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Button
        as={Link}
        href="/auth/signin"
        className="text-sm font-normal text-default-600 bg-default-100"
        startContent={<LoginIcon />}
        variant="flat"
      >
        Login
      </Button>
    </>
  );
};
