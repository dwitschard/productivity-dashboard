'use client';

import { signIn } from 'next-auth/react';
import { Hero } from '@/components/hero/hero';

export default function Home() {
  const handler = {
    onLogin: () => {
      signIn('google', { callbackUrl: '/dashboard' });
    }
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
}
