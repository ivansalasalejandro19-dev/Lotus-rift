'use client'

import Hero from './components/Hero'
import CrystalBall from './components/CrystalBall'
import CrystalBallNumbers from './components/CrystalBallNumbers'
import BracketPredictions from './components/BracketPredictions'
import CommunityStats from './components/CommunityStats'
import LotusTracker from './components/LotusTracker'
import Achievements from './components/Achievements'
import Leaderboard from './components/Leaderboard'

export default function PickEmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108] text-white">

      <Hero />

      <CrystalBall />

      <CrystalBallNumbers />

      <BracketPredictions />

      <CommunityStats />

      <LotusTracker />

      <Achievements />

      <Leaderboard />

    </div>
  )
}