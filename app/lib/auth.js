import { app } from "./firebase"

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const loginGoogle = async () => {
  return signInWithPopup(auth, googleProvider)
}

export const logout = async () => {
  return signOut(auth)
}