'use client';
import { FC, FormEvent, useState } from 'react';
import HexDecimal from './hex-decimal';
import JsonValidation from './json-validation';
import { ArrowLeftIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import SearchInput from '../shared/search-input/search-input';

const HelperTools: FC<{}> = () => {
  const [expanded, setExpanded] = useState('');
  let content = null;
  const defaultTools: string[] = [
    'Json Validator',
    'Hex Decimal Converter',
    'Date Lookup',
    'Regex Matcher'
  ];
  const [tools, setTools] = useState([...defaultTools]);

  switch (expanded) {
    case 'Json Validator':
      content = <JsonValidation />;
      break;
    case 'Hex Decimal Converter':
      content = <HexDecimal />;
      break;
    case 'Date Lookup':
      content = <JsonValidation />;
      break;
    case 'Regex Matcher':
      content = <JsonValidation />;
      break;
  }

  function filterTools(event: FormEvent<HTMLInputElement>) {
    setTools(
      defaultTools.filter((type) =>
        type.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      )
    );
  }

  return (
    <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
      <h2 className={'text-lg leading-7 font-medium'}>
        {expanded === '' ? 'Helper Tools' : expanded}
      </h2>
      {expanded !== '' && (
        <button className="bg-gray-200 p-2 rounded-lg" onClick={() => setExpanded('')}>
          <ArrowLeftIcon className="w-6 mr-2 float-left" /> Helper Tools
        </button>
      )}
      {content}
      {expanded === '' && (
        <>
          <SearchInput onInput={filterTools}></SearchInput>
          <div className={'w-full grid grid-cols-2 lg:grid-cols-3 gap-4'}>
            {tools.map((name) => (
              <button
                key={name}
                className="bg-gray-200 p-4 rounded-lg"
                onClick={() => setExpanded(name)}>
                {name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HelperTools;
