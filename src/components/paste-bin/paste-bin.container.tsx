'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  addToCollection,
  PasteBin,
  pasteBinWithUpdates,
  removeFromCollection
} from '@/components/paste-bin/firestore/database.api';
import { PasteAreaComponent } from '@/components/paste-bin/paste-area.component';
import { PasteBinElement } from '@/components/paste-bin/paste-bin-element.component';

const PasteBinContainer: React.FC = () => {
  const session = useSession();

  const [pasteBin, setPasteBin] = useState<PasteBin[]>([]);

  useEffect(() => {
    pasteBinWithUpdates(session.data?.user?.email ?? '', (values) => setPasteBin(values));
  }, [session]);

  const handler = {
    onSubmit: (input: string) => {
      addToCollection(session.data?.user?.email ?? '', input);
    },
    onCopy: (element: PasteBin) => {
      navigator.clipboard.writeText(element.data);
    },
    onDelete: (element: PasteBin) => {
      removeFromCollection(element);
    }
  };

  return (
    <div className={'flex flex-col min-h-0 rounded-md bg-white pt-6'}>
      <h1 className={'text-lg leading-7 font-medium px-8'}>Pastebin</h1>
      <PasteAreaComponent onSubmitHandler={handler.onSubmit} />
      <div className={'flex-1 overflow-auto bg-gray-100 p-8'}>
        <div className={'grid grid-rows-1 align-top items-center gap-y-4'}>
          {pasteBin.map((paste) => (
            <PasteBinElement
              key={paste.id}
              element={paste}
              onCopy={handler.onCopy}
              onDelete={handler.onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasteBinContainer;
