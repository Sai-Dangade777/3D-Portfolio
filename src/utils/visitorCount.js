import { db } from '../firebase';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

export const VISITOR_DOC_ID = 'visitorCount';

export async function incrementVisitorCount() {
  const docRef = doc(db, 'stats', VISITOR_DOC_ID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      count: docSnap.data().count + 1
    });
    return docSnap.data().count + 1;
  } else {
    await setDoc(docRef, { count: 1 });
    return 1;
  }
}

export async function getVisitorCount() {
  const docRef = doc(db, 'stats', VISITOR_DOC_ID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().count;
  } else {
    return 0;
  }
}
