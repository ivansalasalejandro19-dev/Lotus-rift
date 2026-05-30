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
  try {
    console.log("Intentando login...")

    const result = await signInWithPopup(auth, googleProvider)

    console.log("LOGIN OK", result.user)

    return result
  } catch (error) {
    console.error("LOGIN ERROR", error)
    alert(error.code + "\n" + error.message)
  }
}

export const logout = async () => {
  return signOut(auth)
}