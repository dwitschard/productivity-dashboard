'use client';

import './(root)/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
