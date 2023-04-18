'use client';

import './(root)/globals.css';
import { SessionProvider } from 'next-auth/react';

const RootLayout =({ children }: { children: React.ReactNode })=> {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
export default RootLayout;
