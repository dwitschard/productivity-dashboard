'use client';

import { signIn } from 'next-auth/react';
import { Hero } from '@/components/landing-page/hero/hero';

const Home = () => {
  const handler = {
    onLogin: () => {
      signIn('google');
    }
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
};
export default Home;
