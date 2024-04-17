"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoginIcon } from "../icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const LoginButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={session.user.name ? session.user.name : undefined}
              size="sm"
              src={session.user.image ? session.user.image : undefined}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session.user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );
  }
  return (
    <div className="flex gap-2">
      <Button
        as={Link}
        href="/auth/signin"
        className="text-sm font-normal text-default-600 bg-default-100"
        startContent={<LoginIcon />}
        variant="flat"
      >
        Login
      </Button>
      <Button as={Link} href="/auth/signup" color="primary">
        Sign Up
      </Button>
    </div>
  );
};
