'use client';

import News from '@/components/news/news';
import CodePlaygroundWidget from '@/components/code-playground/code-playground-widget';
import HelperTools from '@/components/helper-tools/helper-tools';
import PasteBinContainer from '@/components/paste-bin/paste-bin.container';
import { Header } from '@/components/shared/header/header';
import { signOut } from 'next-auth/react';

export default function DashboardPage() {
  return (
    <>
      <div className="py-8 px-9">
        <Header onLogout={() => signOut()} />
        <div className="mainGrid mt-3.5">
          <CodePlaygroundWidget />
          <PasteBinContainer />
          <HelperTools />
        </div>
      </div>
    </>
  );
}
