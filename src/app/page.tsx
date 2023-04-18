'use client';

import { signIn } from 'next-auth/react';
import { Hero } from '@/components/landing-page/hero/hero';

const Home = () => {
  const handler = {
    onLogin: () => {
      fetch('/api/environment').then((envUrl) => {
        console.log(envUrl);
        signIn('google', { callbackUrl: envUrl + '/api/auth/callback/google' });
      });
    }
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
};
export default Home;
