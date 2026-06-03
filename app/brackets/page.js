"use client"

import { useState, useEffect } from "react"
import {
  doc,
  onSnapshot,
  updateDoc,
  increment
} from "firebase/firestore"
import { db } from "../lib/firebase"
import { motion } from "framer-motion"
import {
  Play,
  MessageCircle,
  MessagesSquare
} from "lucide-react"

/* =========================================================
   HELPERS
========================================================= */

function getWinner(match, winsNeeded) {
  if (match.team1.score >= winsNeeded) return match.team1
  if (match.team2.score >= winsNeeded) return match.team2
  return null
}

function getLoser(match, winsNeeded) {
  if (match.team1.score >= winsNeeded) return match.team2
  if (match.team2.score >= winsNeeded) return match.team1
  return null
}

function TeamSlot({ team, loser = false, large = false }) {
  if (!team) {
    return (
      <div className="flex items-center gap-3 flex-1 opacity-40">
        <div className={`${large ? "w-10 h-10" : "w-9 h-9"} rounded-xl bg-white/5 border border-white/10`} />
        <div className="flex-1 text-center">
          <span className={`font-bold text-zinc-500 ${large ? "text-lg" : ""}`}>
            TBD
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 flex-1 transition-all ${loser ? "opacity-30 grayscale" : ""}`}>
      <img
        src={team.logo}
        alt={team.name}
        className={`${large ? "w-10 h-10" : "w-9 h-9"} rounded-xl object-cover`}
      />

      <div className="flex-1 text-center">
        <span className={`font-bold text-white ${large ? "text-lg font-black" : ""}`}>
          {team.name}
        </span>
      </div>
    </div>
  )
}

/* =========================================================
   OCTAVOS
========================================================= */

const octavos = [
  {
    team1: { name: "Nᴀʜᴜᴀʟᴇs", logo: "/logos/nahuales.png", score: 0 },
    team2: { name: "Fʟᴀᴡʟᴇss", logo: "/logos/flawless.png", score: 0 },
  },
  {
    team1: { name: "ÆSIIR Gᴏ Lᴇɢᴇɴᴅs", logo: "/logos/ae_siir_go_legends.png", score: 0 },
    team2: { name: "Jᴏʏɪᴛᴀ Gᴀᴍɪɴɢ", logo: "/logos/joyita_gaming.png", score: 0 },
  },
  {
    team1: { name: "Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ", logo: "/logos/overextended.png", score: 0 },
    team2: { name: "Gᴏʟᴅᴇɴ Dʀᴀɢᴏɴs", logo: "/logos/golden_dragons.png", score: 0 },
  },
  {
    team1: { name: "T502", logo: "/logos/T502.png", score: 0 },
    team2: { name: "Sᴍᴀᴄᴋᴅᴏᴡɴ", logo: "/logos/smackdown.png", score: 0 },
  },
  {
    team1: { name: "Cᴏsᴀ Nᴏsᴛʀᴀ", logo: "/logos/cosa_nostra.png", score: 0 },
    team2: { name: "Hᴜᴇsɪᴛᴏs Pʀᴏᴊᴇᴄᴛ", logo: "/logos/huesitos.png", score: 0 },
  },
  {
    team1: { name: "Iᴄᴇ ɢᴏʟᴅ", logo: "/logos/ice_gold.png", score: 0 },
    team2: { name: "Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs", logo: "/logos/shadow_reapers.png", score: 0 },
  },
  {
    team1: { name: "Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ", logo: "/logos/secret_society.png", score: 0 },
    team2: { name: "Rᴏᴋᴜʀᴏᴍɪɴᴏs", logo: "/logos/rku.png", score: 0 },
  },
  {
    team1: { name: "HᴀTsᴜ", logo: "/logos/hatsu.png", score: 0 },
    team2: { name: "Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ", logo: "/logos/new_alliance.png", score: 0 },
  },
]

/* =========================================================
   CUARTOS (BO3)
========================================================= */

const quarterFinals = [
  {
    team1: getWinner(octavos[0], 1),
    team2: getWinner(octavos[1], 1),
    score1: 0,
    score2: 0,
  },
  {
    team1: getWinner(octavos[2], 1),
    team2: getWinner(octavos[3], 1),
    score1: 0,
    score2: 0,
  },
  {
    team1: getWinner(octavos[4], 1),
    team2: getWinner(octavos[5], 1),
    score1: 0,
    score2: 0,
  },
  {
    team1: getWinner(octavos[6], 1),
    team2: getWinner(octavos[7], 1),
    score1: 0,
    score2: 0,
  },
]

/* =========================================================
   SEMIS (BO5)
========================================================= */

const semiFinals = [
  {
    team1:
      quarterFinals[0].score1 >= 2
        ? quarterFinals[0].team1
        : quarterFinals[0].score2 >= 2
        ? quarterFinals[0].team2
        : null,

    team2:
      quarterFinals[1].score1 >= 2
        ? quarterFinals[1].team1
        : quarterFinals[1].score2 >= 2
        ? quarterFinals[1].team2
        : null,

    score1: 0,
    score2: 0,
  },

  {
    team1:
      quarterFinals[2].score1 >= 2
        ? quarterFinals[2].team1
        : quarterFinals[2].score2 >= 2
        ? quarterFinals[2].team2
        : null,

    team2:
      quarterFinals[3].score1 >= 2
        ? quarterFinals[3].team1
        : quarterFinals[3].score2 >= 2
        ? quarterFinals[3].team2
        : null,

    score1: 0,
    score2: 0,
  },
]

/* =========================================================
   FINAL
========================================================= */

const finalMatch = {
  team1:
    semiFinals[0].score1 >= 3
      ? semiFinals[0].team1
      : semiFinals[0].score2 >= 3
      ? semiFinals[0].team2
      : null,

  team2:
    semiFinals[1].score1 >= 3
      ? semiFinals[1].team1
      : semiFinals[1].score2 >= 3
      ? semiFinals[1].team2
      : null,

  score1: 0,
  score2: 0,
}

const matchDetails = [
  {
    id: 1,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "Nᴀʜᴜᴀʟᴇs",
    logo1: "/logos/nahuales.png",

    team2: "Fʟᴀᴡʟᴇss",
    logo2: "/logos/flawless.png",

    players1: [
      { name: "Ragnarok", flag: "🇨🇴" },
      { name: "Zen", flag: "🇻🇪" },
      { name: "Moset", flag: "🇻🇪" },
      { name: "Ryn", flag: "🇦🇷" },
      { name: "Dai", flag: "🇲🇽" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇦🇷" },
      { name: "Jugador 2", flag: "🇨🇱" },
      { name: "Jugador 3", flag: "🇨🇴" },
      { name: "Jugador 4", flag: "🇻🇪" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    votes1: 65,
    votes2: 35,
    totalVotes: 100,
  },

  {
    id: 2,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "ÆSIIR Gᴏ Lᴇɢᴇɴᴅs",
    logo1: "/logos/ae_siir_go_legends.png",

    team2: "Jᴏʏɪᴛᴀ Gᴀᴍɪɴɢ",
    logo2: "/logos/joyita_gaming.png",

    players1: [
      { name: "Jugador 1", flag: "🇦🇷" },
      { name: "Jugador 2", flag: "🇨🇱" },
      { name: "Jugador 3", flag: "🇲🇽" },
      { name: "Jugador 4", flag: "🇨🇴" },
      { name: "Jugador 5", flag: "🇵🇪" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇻🇪" },
      { name: "Jugador 2", flag: "🇦🇷" },
      { name: "Jugador 3", flag: "🇨🇱" },
      { name: "Jugador 4", flag: "🇨🇴" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 3,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ",
    logo1: "/logos/overextended.png",

    team2: "Gᴏʟᴅᴇɴ Dʀᴀɢᴏɴs",
    logo2: "/logos/golden_dragons.png",

    players1: [
      { name: "Jugador 1", flag: "🇵🇪" },
      { name: "Jugador 2", flag: "🇨🇴" },
      { name: "Jugador 3", flag: "🇻🇪" },
      { name: "Jugador 4", flag: "🇦🇷" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇨🇱" },
      { name: "Jugador 2", flag: "🇵🇪" },
      { name: "Jugador 3", flag: "🇨🇴" },
      { name: "Jugador 4", flag: "🇻🇪" },
      { name: "Jugador 5", flag: "🇦🇷" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 4,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "T502",
    logo1: "/logos/T502.png",

    team2: "Sᴍᴀᴄᴋᴅᴏᴡɴ",
    logo2: "/logos/smackdown.png",

    players1: [
      { name: "Jugador 1", flag: "🇲🇽" },
      { name: "Jugador 2", flag: "🇦🇷" },
      { name: "Jugador 3", flag: "🇵🇪" },
      { name: "Jugador 4", flag: "🇨🇱" },
      { name: "Jugador 5", flag: "🇨🇴" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇻🇪" },
      { name: "Jugador 2", flag: "🇲🇽" },
      { name: "Jugador 3", flag: "🇦🇷" },
      { name: "Jugador 4", flag: "🇵🇪" },
      { name: "Jugador 5", flag: "🇨🇱" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 5,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "Cᴏsᴀ Nᴏsᴛʀᴀ",
    logo1: "/logos/cosa_nostra.png",

    team2: "Hᴜᴇsɪᴛᴏs Pʀᴏᴊᴇᴄᴛ",
    logo2: "/logos/huesitos.png",

    players1: [
      { name: "Jugador 1", flag: "🇦🇷" },
      { name: "Jugador 2", flag: "🇨🇱" },
      { name: "Jugador 3", flag: "🇲🇽" },
      { name: "Jugador 4", flag: "🇨🇴" },
      { name: "Jugador 5", flag: "🇵🇪" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇻🇪" },
      { name: "Jugador 2", flag: "🇦🇷" },
      { name: "Jugador 3", flag: "🇨🇱" },
      { name: "Jugador 4", flag: "🇨🇴" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 6,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "Iᴄᴇ ɢᴏʟᴅ",
    logo1: "/logos/ice_gold.png",

    team2: "Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs",
    logo2: "/logos/shadow_reapers.png",

    players1: [
      { name: "Jugador 1", flag: "🇵🇪" },
      { name: "Jugador 2", flag: "🇨🇴" },
      { name: "Jugador 3", flag: "🇻🇪" },
      { name: "Jugador 4", flag: "🇦🇷" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇨🇱" },
      { name: "Jugador 2", flag: "🇵🇪" },
      { name: "Jugador 3", flag: "🇨🇴" },
      { name: "Jugador 4", flag: "🇻🇪" },
      { name: "Jugador 5", flag: "🇦🇷" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 7,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ",
    logo1: "/logos/secret_society.png",

    team2: "Rᴏᴋᴜʀᴏᴍɪɴᴏs",
    logo2: "/logos/rku.png",

    players1: [
      { name: "Jugador 1", flag: "🇲🇽" },
      { name: "Jugador 2", flag: "🇦🇷" },
      { name: "Jugador 3", flag: "🇵🇪" },
      { name: "Jugador 4", flag: "🇨🇱" },
      { name: "Jugador 5", flag: "🇨🇴" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇻🇪" },
      { name: "Jugador 2", flag: "🇲🇽" },
      { name: "Jugador 3", flag: "🇦🇷" },
      { name: "Jugador 4", flag: "🇵🇪" },
      { name: "Jugador 5", flag: "🇨🇱" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },

  {
    id: 8,
    stage: "OCTAVOS DE FINAL",
    format: "BO1",

    team1: "HᴀTsᴜ",
    logo1: "/logos/hatsu.png",

    team2: "Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ",
    logo2: "/logos/new_alliance.png",

    players1: [
      { name: "Jugador 1", flag: "🇨🇴" },
      { name: "Jugador 2", flag: "🇻🇪" },
      { name: "Jugador 3", flag: "🇦🇷" },
      { name: "Jugador 4", flag: "🇲🇽" },
      { name: "Jugador 5", flag: "🇵🇪" },
    ],

    players2: [
      { name: "Jugador 1", flag: "🇨🇱" },
      { name: "Jugador 2", flag: "🇨🇴" },
      { name: "Jugador 3", flag: "🇻🇪" },
      { name: "Jugador 4", flag: "🇦🇷" },
      { name: "Jugador 5", flag: "🇲🇽" },
    ],

    votes1: 50,
    votes2: 50,
    totalVotes: 0,
  },
]

const VOTE_STORAGE_KEY = "lotusVotedMatches_v2"

export default function LotusRift() {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [votes, setVotes] = useState({})
  const [votedMatches, setVotedMatches] = useState({})
  const [fireVotes, setFireVotes] = useState({})

  useEffect(() => {
  const savedVotedMatches = localStorage.getItem(VOTE_STORAGE_KEY)

  if (savedVotedMatches) {
    setVotedMatches(JSON.parse(savedVotedMatches))
  }
}, [])
  
  useEffect(() => {
  if (!selectedMatch) return

  const unsubscribe = onSnapshot(
    doc(db, "votes", `match_${selectedMatch.id}`),
    (snap) => {
      if (snap.exists()) {
        setFireVotes(snap.data())
      }
    }
  )

  return unsubscribe
}, [selectedMatch])

  const handleVote = async (matchId, teamKey) => {
  if (votedMatches[matchId]) return

  const voteRef = doc(db, "votes", `match_${matchId}`)

  await updateDoc(voteRef, {
    [teamKey]: increment(1),
  })

  const updated = {
    ...votedMatches,
    [matchId]: true,
  }

  setVotedMatches(updated)
  localStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(updated))
}

  const getVotePercentage = (team1, team2) => {
    const votes1 = votes[team1] || 0
    const votes2 = votes[team2] || 0

    const total = votes1 + votes2

    if (total === 0) {
      return {
        team1Percent: 50,
        team2Percent: 50,
        total: 0,
      }
    }

    return {
      team1Percent: Math.round((votes1 / total) * 100),
      team2Percent: Math.round((votes2 / total) * 100),
      total,
    }
  }

  const voteData = selectedMatch
    ? getVotePercentage(
        selectedMatch.team1,
        selectedMatch.team2
      )
    : null

const firebaseVotes1 = fireVotes?.team1 ?? 0
const firebaseVotes2 = fireVotes?.team2 ?? 0

const totalVotes = firebaseVotes1 + firebaseVotes2

const percent1 = totalVotes
  ? Math.round((firebaseVotes1 / totalVotes) * 100)
  : 50

const percent2 = totalVotes
  ? Math.round((firebaseVotes2 / totalVotes) * 100)
  : 50

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[180px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="border-b border-pink-500/10 backdrop-blur-xl sticky top-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.35em] uppercase bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
              LOTUS RIFT
            </h1>

            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mt-1">
              TORNEO LAN
            </p>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-200 text-sm tracking-[0.2em] uppercase">
              🌸 INSCRIPCIONES CERRADAS
            </div>

            <h2 className="mt-8 text-7xl md:text-8xl font-black leading-none">
              <span className="text-white">LOTUS</span>
              <br />

              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
                RIFT
              </span>
            </h2>

            <p className="mt-7 text-zinc-400 text-lg max-w-xl">
              Unite a la comunidad de Discord y WhatsApp para estar al tanto de las últimas noticias, actualizaciones y sorpresas exclusivas del torneo.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://chat.whatsapp.com/Hi8Ymp9PrvrIRCgm7fVxc4"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Comunidad de Whatsapp
              </a>

              <a
                href="https://discord.gg/nVyrHkeCn5"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-pink-500/20 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <MessagesSquare size={20} />
                Discord
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-pink-500/30 blur-[140px] rounded-full" />

          </motion.div>

        </div>
      </section>

      {/* STREAM */}
<section className="max-w-7xl mx-auto px-5 pb-24">
  <div className="rounded-[2rem] border border-pink-500/20 bg-black/70 overflow-hidden shadow-[0_0_80px_rgba(255,0,170,0.12)]">

    <div className="px-6 py-5 border-b border-pink-500/10 flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />

      <h3 className="text-2xl font-black uppercase">
        EN VIVO
      </h3>
    </div>

    <a
      href="https://www.twitch.tv/riotgames"
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >

      <img
        src="/banner-live.jpg"
        alt="Live Stream"
        className="w-full h-[650px] object-cover transition duration-300 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="w-24 h-24 rounded-full bg-pink-500/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,0,170,0.45)]">

          <Play className="w-10 h-10 fill-white text-white ml-1" />

        </div>

      </div>

    </a>

  </div>
</section>

      {/* BRACKET */}
      <section
        id="bracket"
        className="relative py-24 px-6 overflow-hidden border-y border-white/5"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.14),transparent_60%)]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-3xl animate-pulse" />

        <div className="max-w-[1700px] mx-auto relative z-10">

          <div className="mb-16 text-center">

            <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
              LOTUS ARENA
            </p>

            <h2 className="text-6xl font-black bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              BRACKET
            </h2>

            <div className="mt-5 w-40 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          </div>

          <div className="overflow-x-auto">

            <div className="min-w-[1450px] flex items-center justify-center gap-16">

              {/* OCTAVOS */}
              <div className="flex flex-col justify-center">

                <h3 className="mb-8 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  OCTAVOS
                </h3>

                <div className="space-y-6">

                  {octavos.map((match, index) => (
                    <div
                      key={index}
                      className="w-[260px] rounded-2xl bg-zinc-900/80 border border-white/10 p-5"
                    >

                      <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">

                        <div className="flex items-center gap-3 flex-1">

                          <img
                            src={match.team1?.logo}
                            className="w-8 h-8 rounded-lg object-cover"
                          />

                          <div className="flex-1 text-center">
                            <span className="font-semibold text-white">
                              {match.team1?.name || "TBD"}
                            </span>
                          </div>
                        </div>

                        <div className="ml-3 min-w-[30px] h-7 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-bold text-violet-300 text-sm">
                          {match.team1.score}
                        </div>
                      </div>

                      <div className="h-px bg-white/5" />

                      <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">

                        <div className="flex items-center gap-3 flex-1">

                          <img
                            src={match.team2?.logo}
                            className="w-8 h-8 rounded-lg object-cover"
                          />

                          <div className="flex-1 text-center">
                            <span className="font-semibold text-white">
                              {match.team2?.name || "TBD"}
                            </span>
                          </div>
                        </div>

                        <div className="ml-3 min-w-[30px] h-7 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-bold text-violet-300 text-sm">
                          {match.team2.score}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* CUARTOS */}
              <div className="flex flex-col justify-center">

                <h3 className="mb-8 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  CUARTOS
                </h3>

                <div className="space-y-20">

                  {quarterFinals.map((match, item) => (
                    <div key={item} className="relative">

                      <div className="absolute -left-12 top-1/2 flex items-center">
                        <div className="w-6 h-px bg-violet-500/40" />
                        <div className="w-6 h-[130px] border-l border-b border-violet-500/20 rounded-bl-2xl" />
                      </div>

                      <div className="w-[280px] rounded-3xl bg-gradient-to-br from-violet-500/10 to-black border border-violet-500/20 p-6 shadow-[0_0_35px_rgba(168,85,247,0.12)]">

                        <div className="space-y-4">

                          {[
  { team: match.team1, score: match.score1 },
  { team: match.team2, score: match.score2 },
].map(({ team, score }, i) => (
                            <div key={i}>
                              <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">

                                <div className="flex items-center gap-3 flex-1">

                                  {team ? (
  <img
    src={team.logo}
    className="w-9 h-9 rounded-lg object-cover"
  />
) : (
  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10" />
)}

                                  <div className="flex-1 text-center">
                                    <span className="font-bold text-white">
                                      {team?.name || "TBD"}
                                    </span>
                                  </div>
                                </div>

                                <div className="ml-3 min-w-[32px] h-8 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-black text-violet-300">
                                  {score}
                                </div>
                              </div>

                              {i === 0 && (
                                <div className="h-px bg-white/10" />
                              )}
                            </div>
                          ))}

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* SEMIS */}
              <div className="flex flex-col justify-center">

                <h3 className="mb-8 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  SEMIFINALES
                </h3>

                <div className="space-y-44">

                  {semiFinals.map((match, item) => (
                    <div key={item} className="relative">

                      <div className="absolute -left-14 top-1/2 flex items-center">
                        <div className="w-7 h-px bg-pink-400/40" />
                        <div className="w-7 h-[220px] border-l border-b border-pink-400/20 rounded-bl-2xl" />
                      </div>

                      <div className="w-[300px] rounded-3xl bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-400/20 p-7 shadow-[0_0_45px_rgba(168,85,247,0.18)]">

                        <div className="space-y-3">

                          {[
  { team: match.team1, score: match.score1 },
  { team: match.team2, score: match.score2 },
].map(({ team, score }, i) => (
                            <div key={i}>
                              <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-3">

                                <div className="flex items-center gap-3 flex-1">

                                 {team ? (
  <img
    src={team.logo}
    className="w-10 h-10 rounded-xl object-cover"
  />
) : (
  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10" />
)}

                                  <div className="flex-1 text-center">
                                    <span className="font-black text-lg text-white">
                                      {team?.name || "TBD"}
                                    </span>
                                  </div>
                                </div>

                                <div className="ml-3 min-w-[38px] h-9 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300">
                                  {score}
                                </div>
                              </div>

                              {i === 0 && (
                                <div className="h-px bg-white/10" />
                              )}
                            </div>
                          ))}

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* FINAL */}
              <div className="flex flex-col justify-center">

                <h3 className="mb-8 text-center font-bold text-pink-300 tracking-[0.2em]">
                  FINAL
                </h3>

                <div className="relative">

                  <div className="absolute inset-0 bg-violet-500/30 blur-3xl rounded-full animate-pulse" />

                  <div className="relative w-[340px] rounded-[2rem] border border-pink-400/30 bg-gradient-to-br from-pink-500/20 via-violet-500/10 to-black p-10 shadow-[0_0_70px_rgba(168,85,247,0.3)] backdrop-blur-2xl">

                    <div className="text-center mb-10">

                      <div className="relative w-28 h-28 mx-auto mb-6">

                        <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-2xl animate-pulse" />

                        <div className="relative w-full h-full rounded-full border border-violet-400/40 bg-gradient-to-br from-pink-500/20 to-violet-500/20 flex items-center justify-center text-5xl shadow-[0_0_60px_rgba(168,85,247,0.45)]">
                          🪷
                        </div>
                      </div>

                      <p className="text-pink-300 tracking-[0.3em] text-sm mb-3">
                        LOTUS RIFT 2026
                      </p>

                      <h4 className="text-5xl font-black bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
                        FINAL
                      </h4>
                    </div>

                    <div className="space-y-5">

                      {[
  { team: finalMatch.team1, score: finalMatch.score1 },
  { team: finalMatch.team2, score: finalMatch.score2 },
].map(({ team, score }, i) => (
                        <div key={i}>

                          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 flex items-center justify-between">

                            <div className="flex items-center gap-4 flex-1">

                              {team ? (
  <img
    src={team.logo}
    className="w-12 h-12 rounded-xl object-cover"
  />
) : (
  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10" />
)}

                              <div className="flex-1 text-center">
                                <span className="font-black text-2xl text-white">
                                  {team?.name || "TBD"}
                                </span>
                              </div>
                            </div>

                            <div className="ml-4 min-w-[42px] h-10 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300 text-lg">
                              {score}
                            </div>
                          </div>

                          {i === 0 && (
                            <div className="flex justify-center py-4">
                              <div className="px-5 py-2 rounded-xl bg-black/50 border border-violet-500/20 font-black text-violet-300">
                                BO5
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                    </div>

                    <div className="mt-8 text-center text-zinc-500 text-sm tracking-[0.2em]">
                      Quien se lleva el 🪷?
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

<div className="p-5">
  Team1: {fireVotes.team1 || 0}
  <br />
  Team2: {fireVotes.team2 || 0}
</div>
      {/* PARTIDOS */}
      <section className="max-w-7xl mx-auto px-5 pb-32">

        <div className="flex items-center gap-3 mb-10">
          <Play className="text-pink-400" />

          <h3 className="text-5xl font-black uppercase">
            PRÓXIMOS PARTIDOS
          </h3>
        </div>

        <div className="mb-8 flex items-center justify-between rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl px-8 py-5">

          <div>
            <p className="text-pink-300 font-black text-2xl">
              19:00
            </p>

            <p className="text-zinc-500 tracking-[0.2em] text-sm mt-1">
              4 DE JULIO
            </p>
          </div>

          <div className="text-zinc-500 text-sm tracking-[0.25em] uppercase">
            Octavos - Jornada 1
          </div>
        </div>

        <div className="space-y-5">

          {octavos.slice(0, 4).map((match, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between"
            >

              <div className="flex items-center gap-4 w-[320px]">

                <img
                  src={match.team1?.logo}
                  className="w-10 h-10 rounded-xl"
                />

                <span className="font-semibold">
                  {match.team1?.name || "TBD"}
                </span>
              </div>

              <div className="text-pink-400 font-black text-2xl">
                VS
              </div>

              <div className="flex items-center justify-end gap-4 w-[320px]">

                <span className="font-semibold text-right">
                  {match.team2?.name || "TBD"}
                </span>

                <img
                  src={match.team2?.logo}
                  className="w-10 h-10 rounded-xl"
                />
              </div>

              <button
  onClick={() => setSelectedMatch(matchDetails[index])}
  className="px-5 py-3 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all"
>
  VER DETALLES
</button>

            </div>
          ))}

        </div>

        <div className="mt-16 mb-8 flex items-center justify-between rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl px-8 py-5">

  <div>
    <p className="text-pink-300 font-black text-2xl">
      19:00
    </p>

    <p className="text-zinc-500 tracking-[0.2em] text-sm mt-1">
      5 DE JULIO
    </p>
  </div>

  <div className="text-zinc-500 text-sm tracking-[0.25em] uppercase">
    Octavos - Jornada 2
  </div>

</div>

<div className="space-y-5">

  {octavos.slice(4, 8).map((match, index) => (

    <div
      key={index + 4}
      className="rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between"
    >

      <div className="flex items-center gap-4 w-[320px]">
        <img
          src={match.team1?.logo}
          className="w-10 h-10 rounded-xl"
        />

        <span className="font-semibold">
          {match.team1?.name || "TBD"}
        </span>
      </div>

      <div className="text-pink-400 font-black text-2xl">
        VS
      </div>

      <div className="flex items-center justify-end gap-4 w-[320px]">
        <span className="font-semibold text-right">
          {match.team2?.name || "TBD"}
        </span>

        <img
          src={match.team2?.logo}
          className="w-10 h-10 rounded-xl"
        />
      </div>

      <button
        onClick={() => setSelectedMatch(matchDetails[index + 4])}
        className="px-5 py-3 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all"
      >
        VER DETALLES
      </button>

    </div>

  ))}

</div>
      </section>
{selectedMatch && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-5">

    <div className="w-full max-w-5xl rounded-[2rem] border border-pink-500/20 bg-zinc-950 p-8 relative">

      <button
        onClick={() => setSelectedMatch(null)}
        className="absolute top-5 right-5 text-zinc-400 hover:text-white"
      >
        ✕
      </button>

      <div className="text-center mb-8">

        <p className="text-pink-300 tracking-[0.3em] text-sm">
          {selectedMatch.stage}
        </p>

      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-10">

        <div className="text-center">

          <img
            src={selectedMatch.logo1}
            className="w-24 h-24 mx-auto rounded-2xl object-cover mb-4"
          />

          <h3 className="text-2xl font-black">
            {selectedMatch.team1}
          </h3>

        </div>

        <div className="text-center">

          <div className="text-3xl font-black text-pink-400 mb-3">
            VS
          </div>

          <div className="px-5 py-2 rounded-xl border border-pink-500/20 bg-pink-500/10 font-black">
            {selectedMatch.format}
          </div>

        </div>

        <div className="text-center">

          <img
            src={selectedMatch.logo2}
            className="w-24 h-24 mx-auto rounded-2xl object-cover mb-4"
          />

          <h3 className="text-2xl font-black">
            {selectedMatch.team2}
          </h3>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="space-y-3">

          {selectedMatch.players1.map((player, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 p-3 text-center"
            >
              {player.name} {player.flag}
            </div>
          ))}

        </div>

        <div className="space-y-3">

          {selectedMatch.players2.map((player, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 p-3 text-center"
            >
              {player.name} {player.flag}
            </div>
          ))}

        </div>

      </div>
      {/* VOTACIONES */}

<div className="mt-10">

  <div className="flex items-center justify-between mb-3">

    <span className="font-bold text-pink-300">
      Predicción de la comunidad
    </span>

    {totalVotes} votos

  </div>

  <div className="w-full h-5 rounded-full bg-white/5 overflow-hidden flex">

    <div
  className="bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all"
  style={{ width: `${percent1}%` }}
/>

<div
  className="bg-zinc-700 transition-all"
  style={{ width: `${percent2}%` }}
/>

  </div>

  <div className="flex justify-between mt-3 text-sm">

   {selectedMatch.team1.name} ({percent1}%)
{selectedMatch.team2.name} ({percent2}%)

  </div>
  <div className="grid grid-cols-2 gap-4 mt-6">

  <button
  onClick={() => handleVote(selectedMatch.id, "team1")}
  disabled={votedMatches[selectedMatch.id]}
  className={`py-3 rounded-xl border font-bold transition-all
${
  votedMatches[selectedMatch.id]
    ? "opacity-50 cursor-not-allowed bg-pink-500/10 border-pink-500/20"
    : "bg-pink-500/20 border-pink-500/30 hover:bg-pink-500/30"
}`}
>
  Votar por {selectedMatch.team1}
</button>

  <button
  onClick={() => handleVote(selectedMatch.id, "team2")}
  disabled={votedMatches[selectedMatch.id]}
  className={`py-3 rounded-xl border font-bold transition-all
${
  votedMatches[selectedMatch.id]
    ? "opacity-50 cursor-not-allowed bg-white/5 border-white/10"
    : "bg-white/5 border-white/10 hover:bg-white/10"
}`}
>
  Votar por {selectedMatch.team2}
</button>

</div>

{votedMatches[selectedMatch.id] && (
  <div className="mt-4 text-center">
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-semibold">
      ✓ Ya votaste en este partido
    </span>
  </div>
)}

<div className="mt-4 text-center text-zinc-400 text-sm">

<div className="mt-4 text-center text-zinc-400 text-sm">
  {totalVotes} votos registrados
</div>

</div>

</div>

    </div>

  </div>
)}
    </main>
  )
}