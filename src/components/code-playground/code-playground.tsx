'use client';

import Link from 'next/link';
import { PlaygroundType } from '@/components/code-playground/playground-type';
import { useState } from 'react';
import { Spinner } from '@/components/shared/spinner/spinner';
import { PlaygroundTemplate } from '@/components/code-playground/playground-template';

interface CodePlaygroundProps {
  playgroundTemplate: PlaygroundTemplate;
}

const CodePlayground = ({ playgroundTemplate }: CodePlaygroundProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-full flex flex-col items-start gap-5 px-9 pt-4 pb-16">
      <div className={'w-full flex flex-row justify-between items-center'}>
        <div className={'flex-1'}>
          <Link
            href="/dashboard"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            ← Dashboard
          </Link>
        </div>
        <h1 className={'flex-1 text-center text-2xl leading-8 font-medium'}>
          {playgroundTemplate.title} Code Playground
        </h1>
        <div className={'flex-1'}></div>
      </div>
      <div className={'w-full flex-auto'}>
        {isLoading && (
          <div className={'w-full h-full flex justify-center items-center'}>
            <Spinner />
          </div>
        )}
        <iframe
          onLoad={hideSpinner}
          className={`w-full h-full rounded-md ${isLoading ? 'hidden invisible' : ''}`}
          src={getPlaygroundUrl(playgroundTemplate.type)}></iframe>
      </div>
    </div>
  );
};

const getPlaygroundUrl = (playgroundType: PlaygroundType) => {
  return `https://stackblitz.com/fork/${playgroundType}?embed=1&theme=dark&view=both`;
};

export default CodePlayground;
