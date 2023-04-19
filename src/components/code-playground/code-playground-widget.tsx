'use client';

import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import { PlaygroundType } from '@/components/code-playground/playground-type';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SearchInput from '@/components/shared/search-input/search-input';

const defaultTemplates: PlaygroundType[] = [
  'node',
  'nextjs',
  'react-ts',
  'angular',
  'vue',
  'js',
  'typescript',
  'rxjs',
  'web-platform'
];
const CodePlaygroundWidget: FC<{}> = () => {
  const [filteredTemplates, setFilteredTemplates] = useState([...defaultTemplates]);
  const filterTemplates = (event: FormEvent<HTMLInputElement>) => {
    setFilteredTemplates(
      defaultTemplates.filter((type) =>
        type.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
        <h2 className={'text-lg leading-7 font-medium'}>Code Playground</h2>
        <SearchInput onInput={filterTemplates}></SearchInput>
        <div className={'flex flex-wrap gap-5'}>
          {filteredTemplates.map((type) => (
            <>
              <Link
                href={{ pathname: '/code-playground', query: { playgroundType: type } }}
                className="bg-blue-100 text-black py-5 px-6">
                {type.toLocaleUpperCase()}
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CodePlaygroundWidget;
