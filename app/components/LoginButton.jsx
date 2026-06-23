"use client"

import { loginGoogle, logout } from "../lib/auth"
import { useAuth } from "../context/AuthContext"
import { Disc3 } from "lucide-react"

export default function LoginButton() {
  const { user, setDiscordUser } = useAuth()

  if (user) {
    const isDiscord = !!user.username // detectamos Discord

    const avatar = isDiscord
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
      : user.photoURL

    const name = isDiscord ? user.username : user.displayName

    return (
      <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-xl">
        
        <img
          src={avatar}
          className="w-10 h-10 rounded-full border border-pink-400/30"
        />

        <span className="text-white font-bold">
          {name}
        </span>

        <button
          onClick={() => logout(setDiscordUser)}
          className="px-3 py-1 bg-red-500/20 rounded-lg text-red-300 hover:bg-red-500/30 transition"
        >
          𝐿𝑂𝐺𝑂𝑈𝑇
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={loginGoogle}
        className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
      >
        𝐺𝑂𝑂𝐺𝐿𝐸
      </button>

      <a
        href="/api/auth/discord"
        className="px-4 py-2 rounded-xl bg-pink-500 text-white flex items-center gap-2 hover:scale-105 transition"
      >
        <Disc3 size={18} />
        𝐷𝐼𝑆𝐶𝑂𝑅𝐷
      </a>
    </div>
  )
}