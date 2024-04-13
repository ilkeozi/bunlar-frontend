import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
  providers: [
    CognitoProvider({
      clientId:
        process.env.COGNITO_CLIENT_ID !== undefined
          ? process.env.COGNITO_CLIENT_ID
          : "",
      clientSecret:
        process.env.COGNITO_CLIENT_SECRET !== undefined
          ? process.env.COGNITO_CLIENT_SECRET
          : "",
      issuer:
        process.env.COGNITO_ISSUER !== undefined
          ? process.env.COGNITO_CLIENT_SECRET
          : "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
