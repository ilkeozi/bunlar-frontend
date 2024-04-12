import { BunlarLogo } from "@/components/icons";
import NextLink from "next/link";

import { LoginForm } from "@/components/loginform";

export default function SignInPage() {
  return (
    <div>
      <div className="flex h-full  w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center pb-6">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <BunlarLogo size={48} />
          </NextLink>
          <br />
          <p className="text-xl font-medium">Welcome Back</p>
          <p className="text-small text-default-500">
            Log in to your account to continue
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
