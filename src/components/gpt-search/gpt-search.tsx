'use client';

import SearchInput from '@/components/shared/search-input/search-input';
import { FormEvent, useState } from 'react';

const GptSearch = () => {
  const [searchResults, setSearchResults] = useState<{
    snippet: string;
    totalTokens: number;
  } | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const search = async (event) => {
    if (query?.length < 10) {
      setError('Query must be at least 10 characters.');
      return;
    }

    setError(null);

    const resp = await fetch('/api/gpt-search', {
      method: 'POST',
      body: JSON.stringify({ prompt: query })
    });

    if (!resp.ok) resp.text().then((text) => setError(text));

    resp.json().then((data) => {
      setSearchResults(data);
    });
  };

  const updateQuery = (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <>
      <div className={'rounded-md bg-white py-6 px-8 flex flex-col items-start gap-4'}>
        <h2 className={'text-lg leading-7 font-medium'}>GPT Search</h2>
        <div className={'flex flex-row items-center gap-4'}>
          <SearchInput onInput={updateQuery}></SearchInput>
          <button
            type={'button'}
            onClick={search}
            className={
              'text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            }>
            GO
          </button>
          <p>{query?.length} / 50</p>
        </div>
        {error && <div className={'text-red-500'}>{error}</div>}
        <div className={'w-full max-w-full flex'}>
          <div className={'flex-1 max-w-full relative bg-slate-200 p-4 rounded '}>
            <div
              className={
                'absolute top-px right-px text-gray-500 bg-gray-50 rounded-bl-md rounded-tr p-1'
              }>
              {searchResults?.totalTokens ? searchResults?.totalTokens : '-'} Tokens
            </div>
            <div className={'flex-1 max-w-full overflow-scroll'}>
              <code className={'flex-1 max-w-full min-h-[200px] pt-5'}>
                {searchResults?.snippet || 'Enter a search query to see results here.'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearch;
