"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../lib/firebase"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null)
  const [discordUser, setDiscordUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user)
    })

    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("lotus_user="))

    if (cookie) {
      try {
        setDiscordUser(
          JSON.parse(decodeURIComponent(cookie.split("=")[1]))
        )
      } catch {}
    }

    setLoading(false)

    return () => unsub()
  }, [])

  const user = firebaseUser || discordUser

  return (
    <AuthContext.Provider value={{ user, setDiscordUser }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)