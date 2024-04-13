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

export const SignUpForm = () => {
  return (
    <div className="mt-2 flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 py-6 shadow-small">
      <form className="flex flex-col gap-3">
        <Input
          type="username"
          radius="sm"
          variant="bordered"
          label="Username"
          placeholder="Enter your username"
          isRequired
        />
        <Input
          type="email"
          radius="sm"
          variant="bordered"
          label="Email"
          placeholder="Enter your email"
          isRequired
        />
        <Input
          type="password"
          radius="sm"
          variant="bordered"
          label="Password"
          placeholder="Enter your password"
          isRequired
        />
        <Input
          type="password"
          radius="sm"
          variant="bordered"
          label="Confirm Password"
          placeholder="Retype your password"
          isRequired
        />
        <div className="flex items-center justify-between px-1 py-2">
          <Checkbox size="sm">
            I agree with the&nbsp;
            <Link className="text-small" href="/legal/terms">
              Terms
            </Link>
            &nbsp; and
            <Link className="text-small" href="/legal/privacy">
              &nbsp; Privacy Policy
            </Link>
          </Checkbox>
        </div>
        <Button color="primary">Sign Up</Button>
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
        Already have an account?&nbsp;
        <Link className="text-small" href="/auth/signin">
          Sign In
        </Link>
      </p>
    </div>
  );
};
