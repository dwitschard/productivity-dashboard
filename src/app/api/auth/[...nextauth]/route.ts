import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const handler: NextAuthOptions = NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      id: 'google-productivity-app',
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],
  theme: {
    colorScheme: 'dark'
  },
  callbacks: {
    async jwt({ token }) {
      // token.userRole = "admin"
      return token;
    }
    /*    async redirect() {
      // token.userRole = "admin"
      return process.env.NEXTAUTH_URL + '/api/auth/callback/google';
    }*/
  }
});

export { handler as GET, handler as POST };
