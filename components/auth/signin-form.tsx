"use client";
import React from "react";
import { Checkbox, Divider, Link } from "@nextui-org/react";

import {
  GithubIcon,
  GoogleIcon,
  LockIcon,
  LoginIcon,
  MailIcon,
} from "../icons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export const SignInForm = () => {
  return (
    <div className="mt-2 flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 py-6 shadow-small">
      <form className="flex flex-col gap-3">
        <Input
          type="email"
          radius="sm"
          variant="bordered"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          type="password"
          radius="sm"
          variant="bordered"
          label="Password"
          placeholder="Enter your password"
        />
        <div className="flex items-center justify-between px-1 py-2">
          <Checkbox size="sm" defaultSelected>
            Remember Me
          </Checkbox>
          <Link className="text-default-500 text-small" href="#">
            Forgot password?
          </Link>
        </div>
        <Button color="primary">Sign In</Button>
      </form>
      <div className="flex items-center gap-4">
        <Divider orientation="horizontal" className="flex-1" />
        <p className="text-tiny text-default-500">OR</p>
        <Divider orientation="horizontal" className="flex-1" />
      </div>
      <Button color="default" variant="bordered" startContent={<GoogleIcon />}>
        Continue with Google
      </Button>
      <Button color="default" variant="bordered" startContent={<GithubIcon />}>
        Continue with Github
      </Button>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link className="text-small" href="/auth/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
