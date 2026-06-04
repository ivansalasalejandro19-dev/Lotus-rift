'use client'

import Hero from './components/Hero'
import CrystalBall from './components/CrystalBall'
import LotusTracker from './components/LotusTracker'
import Leaderboard from './components/Leaderboard'
import PlayerLeaderboards from './components/PlayerLeaderboards'

export default function PickEmPage() {
  return (
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