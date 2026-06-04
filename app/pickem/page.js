'use client'

import Hero from './components/Hero'
import CrystalBall from './components/CrystalBall'
import LotusTracker from './components/LotusTracker'
import Leaderboard from './components/Leaderboard'
import PlayerLeaderboards from './components/PlayerLeaderboards'
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PickEmPage() {
  const { user } = useAuth()
const router = useRouter()

useEffect(() => {
  if (user === null) return

  if (!user) {
    router.push("/")
  }
}, [user, router])

if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-black mb-4">
          🔒 Pick'Em Bloqueado
        </h1>

        <p className="text-zinc-400">
          Debes iniciar sesión para acceder.
        </p>

      </div>
    </div>
  )
}
    <div className="min-h-screen relative overflow-hidden text-white bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108]">

      {/* 🌌 Glow background (AQUÍ VA EL EFECTO NUEVO) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* 🧠 Contenido encima del fondo */}
      <div className="relative z-10">
        <Hero />
        <CrystalBall />
        <LotusTracker />
        <Leaderboard />
        <PlayerLeaderboards />
      </div>

    </div>
  )
}