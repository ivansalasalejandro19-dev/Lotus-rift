"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const getCookieUser = () => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("lotus_user="))

    if (!cookie) return null

    try {
      return JSON.parse(decodeURIComponent(cookie.split("=")[1]))
    } catch {
      return null
    }
  }

  useEffect(() => {
    const u = getCookieUser()
    setUser(u)
    setLoading(false)
  }, [])

  const logout = async () => {
    document.cookie = "lotus_user=; path=/; max-age=0"
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)