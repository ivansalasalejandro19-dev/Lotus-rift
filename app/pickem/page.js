'use client'

import Hero from './components/Hero'
import CrystalBall from './components/CrystalBall'
import LotusTracker from './components/LotusTracker'
import PlayerLeaderboards from './components/PlayerLeaderboards'
import PickemBracket from "./components/PickemBracket"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {
  collection,
  onSnapshot,
  doc,
  getDoc
} from "firebase/firestore"
import { db } from "../lib/firebase"

export default function PickEmPage() {
  const { user } = useAuth()

  const [crystalBallAnswers, setCrystalBallAnswers] = useState({})

  const [pickemLocked, setPickemLocked] = useState(false)
  const [teams, setTeams] = useState({})
const [players, setPlayers] = useState([])
const [riotId, setRiotId] = useState("")

const router = useRouter()

useEffect(() => {

  if (!user) return

  loadPickem()

}, [user])

const loadPickem = async () => {

  const snap = await getDoc(
    doc(db, "pickems", user.uid)
  )

  if (!snap.exists()) return

  const data = snap.data()

  if (data.crystalBall) {
    setCrystalBallAnswers(data.crystalBall)
  }

  if (data.riotId) {
  setRiotId(data.riotId)
}

  if (data.locked) {
    setPickemLocked(true)
  }

}

useEffect(() => {
  const unsub = onSnapshot(
    collection(db, "teams"),
    (snapshot) => {

      const teamsData = {}

      snapshot.forEach((docSnap) => {
        teamsData[docSnap.id] = {
          id: docSnap.id,
          ...docSnap.data()
        }
      })

      setTeams(teamsData)

      const allPlayers = Object.values(teamsData).flatMap(team =>
        (team.players || []).map(player => ({
          id: player.id,
          role: player.role,
          team: team.name,
          logo: team.logo,
          captain: player.captain || false
        }))
      )

      setPlayers(allPlayers)

      console.log("PLAYERS:", allPlayers)
    }
  )

  return () => unsub()
}, [])

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
          🔒 𝙋𝙞𝙘𝙠❜𝙀𝙢 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤
        </h1>

        <p className="text-zinc-400">
          𝘿𝙚𝙗𝙚𝙨 𝙞𝙣𝙞𝙘𝙞𝙖𝙧 𝙨𝙚𝙨𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙖𝙘𝙘𝙚𝙙𝙚𝙧.
        </p>

      </div>
    </div>
  )
}
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
        <CrystalBall
  answers={crystalBallAnswers}
  setAnswers={setCrystalBallAnswers}
  locked={pickemLocked}
  teams={Object.values(teams)}
  players={players}
/>


<div className="max-w-3xl mx-auto px-4 mb-12">
  <div className="rounded-3xl border border-pink-500/20 bg-zinc-900/60 backdrop-blur-xl p-8">
    
    <h2 className="text-3xl font-black mb-3 bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
      𝙍𝙞𝙤𝙩 𝙄𝘿
    </h2>

    <p className="text-zinc-400 mb-6">
      𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙩𝙪 𝙍𝙞𝙤𝙩 𝙄𝘿 𝙥𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙧𝙩𝙚 𝙨𝙞 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙨 𝙜𝙖𝙣𝙖𝙙𝙤𝙧.
    </p>

    <input
      type="text"
      value={riotId}
      disabled={pickemLocked}
      onChange={(e) => setRiotId(e.target.value)}
      placeholder="Ej: 𝙍𝙖𝙜𝙣𝙖𝙧𝙤𝙠#𝙏𝙧𝙤𝙡𝙡"
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-black/40
        border
        border-white/10
        focus:border-pink-500
        outline-none
      "
    />
  </div>
</div>

        <PickemBracket
  user={user}
  crystalBallAnswers={crystalBallAnswers}
  setPickemLocked={setPickemLocked}
  riotId={riotId}
/>

        <LotusTracker />
        <PlayerLeaderboards />
      </div>

    </div>
  )
}