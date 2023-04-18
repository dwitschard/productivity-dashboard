import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const handler: NextAuthOptions = NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
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
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      console.log('url', url);
      console.log('baseUrl', baseUrl);
      console.log('process.env.NEXTAUTH_URL', process.env.NEXTAUTH_URL);

      return process.env.NEXTAUTH_URL!;
    }
  }
});

export { handler as GET, handler as POST };
