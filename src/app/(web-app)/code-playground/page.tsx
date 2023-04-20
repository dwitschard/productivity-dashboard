'use client';

import CodePlayground from '@/components/code-playground/code-playground';
import { PlaygroundType } from '@/components/code-playground/playground-type';
import { useSearchParams } from 'next/navigation';
import { defaultPlaygroundTemplates } from '@/components/code-playground/playground-templates';

interface CodePlaygroundQueryParams {
  playgroundType: PlaygroundType;
}
const CodePlaygroundPage = () => {
  let queryparams = useSearchParams();

  let playgroundType = queryparams.get('playgroundType') as PlaygroundType;

  if (!playgroundType) {
    playgroundType = 'typescript';
  }

  const playgroundTemplate = defaultPlaygroundTemplates.filter(
    (template) => template.type === playgroundType
  )[0];

  return <CodePlayground playgroundTemplate={playgroundTemplate} />;
};

export default CodePlaygroundPage;
