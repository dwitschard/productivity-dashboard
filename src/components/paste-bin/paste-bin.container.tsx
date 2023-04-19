'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  addToCollection,
  PasteBin,
  pasteBinWithUpdates
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
    }
  };

  return (
    <div className={'grid auto-rows-max gap-y-4'}>
      <h1 className={'decoration-1 text-2xl'}>Pastebin</h1>
      <PasteAreaComponent onSubmitHandler={handler.onSubmit} />

      <div className={'grid auto-rows-auto gap-y-4 bg-gray-50 p-3 border-t-2 border-gray-200'}>
        {pasteBin.map((paste) => (
          <PasteBinElement key={paste.id} element={paste} />
        ))}
      </div>
    </div>
  );
};

export default PasteBinContainer;
