"use client"

import { useAuth } from "../context/AuthContext"
import { loginGoogle } from "./lib/auth/firebaseAuth.js"

export default function LoginButton() {
  const { user, logout } = useAuth()

  if (user) {
    return (
      <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-xl">

        <img
          src={user.photo}
          className="w-10 h-10 rounded-full border border-pink-500"
        />

        <div className="flex flex-col">
          <span className="text-white font-bold">
            {user.name}
          </span>
          <span className="text-xs text-white/50">
            {user.provider}
          </span>
        </div>

        <button
          onClick={logout}
          className="ml-4 px-3 py-1 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/30"
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
        className="px-6 py-3 rounded-2xl bg-white text-black font-bold"
      >
        Google
      </button>

      <a
        href="/api/auth/discord/login"
        className="px-6 py-3 rounded-2xl bg-indigo-500 text-white font-bold"
      >
        Discord
      </a>
    </div>
  )
}