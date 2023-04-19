'use client';

import { FC, FormEvent, useState } from 'react';
import SearchInput from '@/components/shared/search-input/search-input';
import TemplateCard from '@/components/code-playground/template-card';
import { PlaygroundTemplate } from '@/components/code-playground/playground-template';

const defaultPlaygroundTemplates: PlaygroundTemplate[] = [
  {
    type: 'node',
    title: 'Node.js',
    description: 'Node.js playground'
  },
  {
    type: 'nextjs',
    title: 'Next.js',
    description: 'Next.js playground'
  },
  {
    type: 'react-ts',
    title: 'React',
    description: 'React playground'
  },
  {
    type: 'angular',
    title: 'Angular',
    description: 'Angular playground'
  },
  {
    type: 'vue',
    title: 'Vue',
    description: 'Vue playground'
  },
  {
    type: 'js',
    title: 'Vanilla JS',
    description: 'Vanilla JS playground'
  },
  {
    type: 'typescript',
    title: 'TypeScript',
    description: 'TypeScript playground'
  },
  {
    type: 'rxjs',
    title: 'RxJS',
    description: 'RxJS playground'
  },
  {
    type: 'web-platform',
    title: 'Web Platform',
    description: 'Web Platform playground'
  }
];

const CodePlaygroundWidget: FC<{}> = () => {
  const [filteredTemplates, setFilteredTemplates] = useState([...defaultPlaygroundTemplates]);
  const filterTemplates = (event: FormEvent<HTMLInputElement>) => {
    setFilteredTemplates(
      defaultPlaygroundTemplates.filter((template) =>
        template.type.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
        <h2 className={'text-lg leading-7 font-medium'}>Code Playground</h2>
        <SearchInput onInput={filterTemplates}></SearchInput>
        <div className={'w-full grid grid-cols-3 gap-4'}>
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.type} playgroundTemplate={template} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CodePlaygroundWidget;
