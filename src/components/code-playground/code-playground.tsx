'use client';

import Link from 'next/link';
import { PlaygroundType } from '@/components/code-playground/playground-type';
import { useState } from 'react';
import { Spinner } from '@/components/shared/spinner/spinner';

interface CodePlaygroundProps {
  playgroundType: PlaygroundType;
}

const CodePlayground = ({ playgroundType }: CodePlaygroundProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-full flex flex-col items-start gap-5">
      <h1 className={'flex-none'}>Code Playground - {playgroundType}</h1>

      <Link href="/dashboard" className={'flex-none bg-stone-100 px-5 py-4'}>
        ← Dashboard
      </Link>
      <div className={'w-full flex-auto'}>
        {isLoading && (
          <div className={'w-full h-full flex justify-center items-center'}>
            <Spinner />
          </div>
        )}
        <iframe
          onLoad={hideSpinner}
          className={`w-full h-full rounded-md ${isLoading ? 'hidden invisible' : ''}`}
          src={getPlaygroundUrl(playgroundType)}></iframe>
      </div>
    </div>
  );
};

const getPlaygroundUrl = (playgroundType: PlaygroundType) => {
  return `https://stackblitz.com/fork/${playgroundType}?embed=1&theme=dark&view=both`;
};

export default CodePlayground;
