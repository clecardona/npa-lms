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
  console.log(data);

  if (data.files !== [] && data.files[0].size) {
    console.log("upload shoot");
    const field = await getUrlNameArray(data.files);
    newCourse.files = field;
  }
  await addDoc(collectionReference, newCourse);
}

function getUrlNameArray(files) {
  let promises = files.map(async (item) => {
    const url = await uploadFile(item);
    return { name: item.name, url: url };
  });
  return Promise.all(promises);
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
  if (data.files !== [] && data.files[0].size) {
    const field = await getUrlNameArray(data.files);
    updatedCourse.files = field;
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
