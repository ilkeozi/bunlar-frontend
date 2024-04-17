import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
  providers: [
    CognitoProvider({
      id: "cognito",
      name: "cognito",
      clientId: `${process.env.COGNITO_CLIENT_ID}`,
      clientSecret: `${process.env.COGNITO_CLIENT_SECRET}`,
      issuer: `${process.env.COGNITO_ISSUER}`,
    }),
    CognitoProvider({
      id: "google",
      name: "google",
      clientId: `${process.env.COGNITO_CLIENT_ID}`,
      clientSecret: `${process.env.COGNITO_CLIENT_SECRET}`,
      issuer: `${process.env.COGNITO_ISSUER}`,
      wellKnown: `${process.env.COGNITO_ISSUER}/.well-known/openid-configuration`,
      authorization: {
        url: `${process.env.COGNITO_DOMAIN}/oauth2/authorize`,
        params: {
          response_type: "code",
          client_id: process.env.COGNITO_CLIENT_ID,
          identity_provider: "Google",
          redirect_uri: `http://localhost:3000/api/auth/callback/cognito`,
          scope: "openid email profile aws.cognito.signin.user.admin",
        },
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      return params.token;
    },
    async session(params) {
      return params.session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
