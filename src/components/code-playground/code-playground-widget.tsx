'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { PlaygroundType } from '@/components/code-playground/playground-type';

const directLinks: PlaygroundType[] = [
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
  const [filteredTemplates, setFilteredTemplates] = useState([...directLinks]);
  const filterTemplates = (event) => {
    setFilteredTemplates(directLinks.filter((type) => type.includes(event.target.value)));
  };

  return (
    <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
      <h2 className={'text-lg leading-7 font-medium'}>Code Playground</h2>
      <div className={'rounded-md border border-gray-300 '}>
        <input
          type="text"
          className={'bg-transparent text-sm leading-5 font-normal px-2.5 py-1.5'}
          onInput={filterTemplates}
        />
      </div>
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
  );
};

export default CodePlaygroundWidget;
