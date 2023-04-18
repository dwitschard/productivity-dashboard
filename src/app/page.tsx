'use client';

import { signIn } from 'next-auth/react';
import { Hero } from '@/components/landing-page/hero/hero';

const Home = () => {
  const handler = {
    onLogin: () => {
      /*fetch('/api/environment').then((envUrl) => {
        envUrl.json().then((env) => {
          console.log(env.url);

        });
      });*/
      signIn('google');
    }
  };

  return <Hero onClickHandler={handler.onLogin}></Hero>;
};
export default Home;
