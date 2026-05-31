import {
  getAuth,
  GoogleAuthProvider,
  DiscordAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

import { app } from "./firebase"

export const auth = getAuth(app)

export const loginGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider())

export const loginDiscord = () => {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
  const redirectUri = process.env.NEXT_PUBLIC_DISCORD_REDIRECT

  window.location.href =
    `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify`
}

export const logout = () =>
  signOut(auth)