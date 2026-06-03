'use client'

import Hero from './components/Hero'
import CrystalBall from './components/CrystalBall'
import LotusTracker from './components/LotusTracker'
import Leaderboard from './components/Leaderboard'

export default function PickEmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108] text-white">

      <Hero />

      <CrystalBall />

      <LotusTracker />

      <Leaderboard />

    </div>
  )
}