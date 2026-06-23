import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "./firebase"

// GOOGLE
export const loginGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider())

// LOGOUT GENERAL
export const logout = async (setDiscordUser) => {
  await signOut(auth)
  await fetch("/api/auth/logout")

  if (setDiscordUser) {
    setDiscordUser(null)
  }
}