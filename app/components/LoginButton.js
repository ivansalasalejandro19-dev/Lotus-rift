"use client"

import { Disc3 } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { loginGoogle, logout } from "../lib/auth"
import { loginDiscord } from "../lib/auth"

export default function LoginButton({ discordUser }) {
  const { user } = useAuth()

  // 🔥 USER LOGEADO
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

  // 🔥 USER NO LOGEADO
  return (
    <div className="flex flex-col gap-3">

      {/* DISCORD LOGIN */}
      <a
        href="/api/auth/discord"
        className="
          group
          relative
          overflow-hidden
          px-8 py-4
          rounded-2xl
          font-black
          tracking-wide
          text-white
          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-pink-400
          shadow-[0_0_35px_rgba(255,0,170,0.35)]
          hover:scale-105
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all" />

        <Disc3 size={22} />

        <span className="relative">
          Iniciar sesión con Discord
        </span>
      </a>

      {/* GOOGLE LOGIN */}
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