//@ts-nocheck
// NPM packages
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authInstance } from "./firebase";

export async function createAccount(email: string, password: string) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error) {
    console.error("auth,js error", error);
    account.payload = error.code;
  }
  return account;
}
