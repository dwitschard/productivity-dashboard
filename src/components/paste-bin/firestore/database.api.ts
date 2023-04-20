import {
  addDoc,
  deleteDoc,
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  where,
  doc
} from '@firebase/firestore';
import { database } from '../../../../firebase.config';

export interface PasteBin {
  id: string;
  userId: string;
  data: string;
}

export const getPasteBinDocuments = async (userId: string): Promise<PasteBin[]> => {
  const dbInstance = collection(database, 'pastebin');
  const queryByUserId = query(dbInstance, where('userId', '==', userId));

  return getDocs(queryByUserId).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => mapFromDbToPasteBin(doc))
  );
};

export const pasteBinWithUpdates = async (
  userId: string,
  callbackFn: (values: PasteBin[]) => void
) => {
  const dbInstance = collection(database, 'pastebin');
  const queryByUserId = query(dbInstance, where('userId', '==', userId));

  onSnapshot(queryByUserId, (querySnapshot) => {
    const res = querySnapshot.docs.map((doc) => {
      return mapFromDbToPasteBin(doc);
    });

    callbackFn(res);
  });
};

export const addToCollection = async (userId: string, textToPersist: string) => {
  addDoc(collection(database, 'pastebin'), mapToPasteBin(userId, textToPersist));
};

export const removeFromCollection = async (item: PasteBin) => {
  deleteDoc(doc(collection(database, 'pastebin'), item.id));
};

const mapToPasteBin = (userId: string, data: string): PasteBin => {
  return {
    userId,
    data
  } as PasteBin;
};

const mapFromDbToPasteBin = (data: QueryDocumentSnapshot<DocumentData>): PasteBin => {
  return {
    ...data.data(),
    id: data.id
  } as PasteBin;
};

/*    addDoc(dbInstance, {
          userId: session.data?.user?.email ?? 'EMPTY',
          data: 'Hello World'
        });*/
