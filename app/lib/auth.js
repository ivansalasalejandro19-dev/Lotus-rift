import {
  getAuth,
  GoogleAuthProvider,
  DiscordAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

import { app } from "./firebase"

const auth = getAuth(app)

export const loginGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider())

export const loginDiscord = () =>
  signInWithPopup(auth, new DiscordAuthProvider())

export const logout = () =>
  signOut(auth)