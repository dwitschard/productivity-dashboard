'use client';

import CodePlayground from '@/components/code-playground/code-playground';
import { PlaygroundType } from '@/components/code-playground/playground-type';
import { useSearchParams } from 'next/navigation';

interface CodePlaygroundQueryParams {
  playgroundType: PlaygroundType;
}
const CodePlaygroundPage = () => {
  let queryparams = useSearchParams();

  let playgroundType = queryparams.get('playgroundType') as PlaygroundType;

  if (!playgroundType) {
    playgroundType = 'typescript';
  }

  return <CodePlayground playgroundType={playgroundType} />;
};

export default CodePlaygroundPage;
