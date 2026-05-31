import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "./firebase"

export const auth = getAuth(app)

export const loginGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)

  const user = {
    name: result.user.displayName,
    photo: result.user.photoURL,
    provider: "google",
    id: result.user.uid,
  }

  document.cookie = `lotus_user=${encodeURIComponent(
    JSON.stringify(user)
  )}; path=/; max-age=${60 * 60 * 24 * 7}`
}