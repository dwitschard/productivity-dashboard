'use client';

import { FC, FormEvent, useState } from 'react';
import SearchInput from '@/components/shared/search-input/search-input';
import TemplateCard from '@/components/code-playground/template-card';
import { defaultPlaygroundTemplates } from '@/components/code-playground/playground-templates';

const CodePlaygroundWidget: FC<{}> = () => {
  const [filteredTemplates, setFilteredTemplates] = useState([...defaultPlaygroundTemplates]);
  const filterTemplates = (event: FormEvent<HTMLInputElement>) => {
    setFilteredTemplates(
      defaultPlaygroundTemplates.filter((template) =>
        template.title.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
        <h2 className={'text-lg leading-7 font-medium'}>Code Playground</h2>
        <SearchInput onInput={filterTemplates}></SearchInput>
        <div className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.type} playgroundTemplate={template} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CodePlaygroundWidget;
