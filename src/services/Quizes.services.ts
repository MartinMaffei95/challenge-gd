import {
  addDoc,
  collection,
  doc,
  DocumentData,
  Firestore,
  FirestoreError,
  getDocs,
} from 'firebase/firestore/lite';
import { db } from '../firebase/friebase';

export const getQuizes = async (): Promise<DocumentData> => {
  try {
    const quizesCol = collection(db, 'users');
    const quizesSnapshot = await getDocs(quizesCol);
    const quizRes = quizesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return quizRes;
  } catch (error) {
    if (error) {
      throw new Error('error');
    } else {
      throw new Error('UNEXPECTED ERROR');
    }
  }
};

export const postQuizes = async (body: any) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), body);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
