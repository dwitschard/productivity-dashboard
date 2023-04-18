'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

const MyPage = () => {
  useEffect(() => {
    fetch('/api/environment').then((envUrl) => {
      console.log(envUrl + '/api/auth/callback/google');
      signIn('google', { callbackUrl: envUrl + '/api/auth/callback/google' });
    });
  }, []);

  return <></>;
};

export default MyPage;
