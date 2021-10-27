//@ts-nocheck
// NPM packages
import { Firestore, getDoc } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";
import { firestoreInstance } from "scripts/firebase";
import uploadFile from "scripts/storage";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(firestoreInstance, path);

  let newCourse = { ...data };

  if (data.files.l1) {
    const url = await uploadFile(data.files.l1, `courses/files`);
    const name = data.files.l1.name;
    newCourse.files.l1 = { url, name };
  }
  if (data.files.l2) {
    const url = await uploadFile(data.files.l2, `courses/files`);
    const name = data.files.l2.name;
    newCourse.files.l2 = { url, name };
  }
  if (data.files.l3) {
    const url = await uploadFile(data.files.l3, `courses/files`);
    const name = data.files.l3.name;
    newCourse.files.l3 = { url, name };
  }
  await addDoc(collectionReference, newCourse);
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

export async function getDocument(path: string, id: string) {
  const documentReference = doc(firestoreInstance, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}

// Update file
export async function updateDocument(path: string, id: string, data: object) {
  const docReference = doc(firestoreInstance, path, id);
  let updatedCourse = { ...data };

  if (data.files.l1) {
    const url = await uploadFile(data.files.l1, `courses/files`);
    const name = data.files.l1.name;
    updatedCourse.files.l1 = { url, name };
  }
  if (data.files.l2) {
    const url = await uploadFile(data.files.l2, `courses/files`);
    const name = data.files.l2.name;
    updatedCourse.files.l2 = { url, name };
  }
  if (data.files.l3) {
    const url = await uploadFile(data.files.l3, `courses/files`);
    const name = data.files.l3.name;
    updatedCourse.files.l3 = { url, name };
  }
  await updateDoc(docReference, updatedCourse);
}
export async function updateProfile(path: string, id: string, data: object) {
  const docReference = doc(firestoreInstance, path, id);
  let updatedProfile = { ...data };
  if (typeof data.avatarURL === "object") {
    const url = await uploadFile(data.avatarURL, `users/avatar`);
    updatedProfile.avatarURL = url;
  }
  await updateDoc(docReference, updatedProfile);
}

// Delete file
export async function deleteDocument(path: string, id: string) {
  const docReference = doc(firestoreInstance, path, id);
  await deleteDoc(docReference);
}
