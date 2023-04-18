'use client';

import { signIn } from 'next-auth/react';
import { Hero } from '@/components/hero/hero';

const Home=()=> {
  const handler = {
    onLogin: () => {
      signIn('google', { callbackUrl: '/dashboard' });
    }
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
}
export default Home;