import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';

interface SearchInputProps {
  onInput: (event: FormEvent<HTMLInputElement>) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { onInput } = props;

  return (
    <div
      className={
        'rounded-md border border-gray-300 shadow-sm flex flex-row items-center gap-2.5 px-2.5'
      }>
      <MagnifyingGlassIcon className={'text-gray-900 w-4 h-4'} height={10} width={10} />

      <input
        type="text"
        className={'bg-transparent text-sm leading-5 font-normal py-1.5'}
        onInput={onInput}
      />
    </div>
  );
};

export default SearchInput;
