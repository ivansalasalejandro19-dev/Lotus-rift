"use client"

import { Disc3 } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import {
  loginGoogle,
  loginDiscord,
  logout,
} from "../lib/auth"

export default function LoginButton() {
  const { user } = useAuth()

  if (user) {
    return (
      <div className="flex gap-3 items-center">

        <img
          src={user.photoURL}
          alt="avatar"
          className="w-10 h-10 rounded-full border border-pink-500/30"
        />

        <span className="font-medium text-white">
          {user.displayName}
        </span>

        <button
          onClick={logout}
          className="
            px-4 py-2
            rounded-xl
            bg-red-500/20
            border border-red-500/30
            text-red-300
            hover:bg-red-500/30
            transition-all
          "
        >
          Salir
        </button>

      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">

      {/* DISCORD */}
     <a
  href="/api/auth/discord"
  className="px-6 py-3 rounded-2xl bg-pink-500 font-bold text-white"
>
  🎮 Iniciar sesión con Discord
</a>

      {/* GOOGLE */}
      <button
        onClick={loginGoogle}
        className="
          px-6 py-3
          rounded-2xl
          border border-pink-500/20
          bg-white/5
          hover:bg-white/10
          text-white
          transition-all
        "
      >
        Iniciar sesión con Google
      </button>

    </div>
  )
}