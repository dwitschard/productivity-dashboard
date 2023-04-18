'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

const MyPage = () => {
  useEffect(() => {
    signIn('google', { callbackUrl: process.env.NEXTAUTH_URL + '/api/auth/callback/google' });
  }, []);

  return <></>;
};

export default MyPage;
