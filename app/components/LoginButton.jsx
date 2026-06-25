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
          className="
w-11
h-11
rounded-full
border-2
border-pink-500/50
shadow-[0_0_20px_rgba(236,72,153,0.5)]
"
        />

        <div>
  <p className="text-white font-bold">
    {name}
  </p>

  <p className="text-xs text-pink-300">
    ● Online
  </p>
</div>

        <button
  onClick={() => logout(setDiscordUser)}
  className="
px-4
py-2
rounded-xl
bg-red-500/10
border
border-red-500/30
text-red-300
font-bold
hover:bg-red-500/20
hover:border-red-500/50
hover:scale-105
transition-all
duration-300
"
>
  LOGOUT
</button>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={loginGoogle}
        className="
        font-contrail
px-5
py-3
rounded-xl
bg-white
text-black
font-bold
hover:scale-105
hover:shadow-lg
transition-all
duration-300
"
      >
        GOOGLE
      </button>

      <a
        href="/api/auth/discord"
        className="
        font-contrail
px-5
py-3
rounded-xl
bg-gradient-to-r
from-pink-500
to-fuchsia-600
text-white
font-bold
flex
items-center
gap-2
shadow-lg
shadow-pink-500/30
hover:scale-105
hover:shadow-pink-500/50
transition-all
duration-300
"
      >
        <Disc3 size={18} />
        DISCORD
      </a>
    </div>
  )
}