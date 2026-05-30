"use client"

import { useAuth } from "../context/AuthContext"
import { loginGoogle, logout } from "../lib/auth"

export default function LoginButton() {
  const { user } = useAuth()

  if (user) {
    return (
      <div className="flex gap-2 items-center">
        <img
          src={user.photoURL}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />

        <span>{user.displayName}</span>

        <button
          onClick={logout}
          className="px-3 py-1 bg-red-500 rounded"
        >
          Salir
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={loginGoogle}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      Iniciar sesión con Google
    </button>
  )
}