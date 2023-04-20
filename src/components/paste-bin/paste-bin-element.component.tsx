'use client';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  TrashIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline';

import styles from './paste-bin.module.css';
import { PasteBin } from '@/components/paste-bin/firestore/database.api';
import { useState } from 'react';

export interface PasteBinElementProps {
  element: PasteBin;
  onDelete: (element: PasteBin) => void;
  onCopy: (element: PasteBin) => void;
}

export const PasteBinElement: React.FC<PasteBinElementProps> = ({ element, onDelete, onCopy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getClasses = () =>
    isExpanded ? 'min-w-0 break-words' : 'overflow-hidden whitespace-nowrap overflow-ellipsis';

  return (
    <div className={styles.wrapper + ' group bg-white rounded p-3'}>
      <button className="bg-gray-50 rounded border-0 p-2 hover:bg-gray-100">
        {isExpanded ? (
          <ChevronDownIcon
            onClick={() => setIsExpanded(false)}
            className={'text-gray-900 w-4 h-4'}
          />
        ) : (
          <ChevronRightIcon
            onClick={() => setIsExpanded(true)}
            className={'text-gray-900 w-4 h-4'}
          />
        )}
      </button>

      <div className={getClasses()}>{element.data}</div>

      <div className={'flex gap-x-2'}>
        <button
          className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 bg-red-500 rounded border-0 p-2"
          onClick={() => onDelete(element)}>
          <TrashIcon className={'w-4 h-4 text-white'} />
        </button>
        <button
          className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 bg-blue-500 rounded border-0 p-2"
          onClick={() => onCopy(element)}>
          <ClipboardDocumentIcon className={'w-4 h-4 text-white'} />
        </button>
      </div>
    </div>
  );
};
