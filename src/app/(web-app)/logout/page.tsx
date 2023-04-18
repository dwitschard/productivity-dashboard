'use client';

import { useEffect } from 'react';
import { signIn, signOut } from 'next-auth/react';

const MyPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: '/', redirect: true });
  }, []);

  return <></>;
};

export default MyPage;
