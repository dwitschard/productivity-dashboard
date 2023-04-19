'use client';
import { ChevronRightIcon, TrashIcon } from '@heroicons/react/24/outline';

import { PasteBin } from '@/components/paste-bin/firestore/database.api';

export const PasteBinElement: React.FC<{ element: PasteBin }> = ({ element }) => {
  return (
    <>
      <div className={'group flex items-center gap-x-4 p-2 border-2 rounded bg-white'}>
        <button className="bg-gray-100 rounded border-0 p-2 hover:bg-gray-200">
          <ChevronRightIcon className={'text-gray-900 w-4 h-4'} />
        </button>
        <div className={'flex-1 '}>{element.data}</div>
        <button className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 bg-red-500 rounded border-0 p-2">
          <TrashIcon className={'w-4 h-4'} />
        </button>
      </div>
    </>
  );
};
