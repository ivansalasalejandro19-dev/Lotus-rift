"use client"

import { loginGoogle, logout } from "../lib/auth"
import { useAuth } from "../context/AuthContext"
import { Disc3 } from "lucide-react"

export default function LoginButton() {
  const { user } = useAuth()

  if (user) {
    return (
      <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/10">
        <img
          src={user.photoURL || `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          className="w-10 h-10 rounded-full"
        />

        <span className="text-white font-bold">
          {user.displayName || user.username}
        </span>

        <button
          onClick={logout}
          className="px-3 py-1 bg-red-500/20 rounded-lg text-red-300"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={loginGoogle}
        className="px-4 py-2 rounded-xl bg-white/10 border border-white/10"
      >
        Google
      </button>

      <a
        href="/api/auth/discord"
        className="px-4 py-2 rounded-xl bg-pink-500 text-white flex items-center gap-2"
      >
        <Disc3 size={18} />
        Discord
      </a>
    </div>
  )
}