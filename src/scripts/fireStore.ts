// NPM packages
import { Firestore, DocumentData } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";

import { firestoreInstance } from "./firebase";

// Create doc with auto id
export async function createDoc(db: Firestore, path: string, data: object) {
  const collectionReference = collection(db, path);

  await addDoc(collectionReference, data);
}

export async function createDocumentWithId(
  path: string,
  id: string,
  data: object
) {
  const documentReference = doc(firestoreInstance, path, id);
  await setDoc(documentReference, data);

  return id;
}

// Read files
export async function getCollection(db: Firestore, path: string) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

// Update file
export async function updateDocument(
  db: Firestore,
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(db, path, id);

  await updateDoc(docReference, data as DocumentData);
}

// Delete file
export async function deleteDocument(db: Firestore, path: string, id: string) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
