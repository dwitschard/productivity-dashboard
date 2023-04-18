'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Session } from 'next-auth';
import { SessionProvider, signIn } from 'next-auth/react';
import { getBody } from 'next-auth/next/utils';
import { Hero } from '@/components/hero/hero';
import { signin } from 'next-auth/core/routes';

const inter = Inter({ subsets: ['latin'] });

export interface HomePageProps {
  session: Session;
}

export default function Home() {
  const handler = {
    onLogin: () => {
      signIn('google', { callbackUrl: '/dashboard' });
    },
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
}
