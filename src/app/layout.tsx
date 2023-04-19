'use client';

import '@/app/(web-app)/globals.css';
import { SessionProvider } from 'next-auth/react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-slate-200">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};
export default RootLayout;
