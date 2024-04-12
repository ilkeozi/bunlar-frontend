import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
