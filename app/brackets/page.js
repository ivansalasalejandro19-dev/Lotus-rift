"use client"

import { motion } from "framer-motion"
import {
  Play,
  MessageCircle,
  MessagesSquare,
} from "lucide-react"

const defaultLogo = "/logos/default.png"

/* ===================== DATA ===================== */

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
]

const quarterFinals = [
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
]

const semis = [
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
  { team1: "TBD", logo1: defaultLogo, team2: "TBD", logo2: defaultLogo },
]

const finalMatch = {
  team1: "TBD",
  logo1: defaultLogo,
  team2: "TBD",
  logo2: defaultLogo,
}

/* ===================== PAGE ===================== */

export default function LotusRift() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,120,0.15),transparent_50%)]" />
      </div>

      {/* HEADER */}
      <header className="border-b border-pink-500/10 backdrop-blur-xl sticky top-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto px-5 py-5">
          <h1 className="text-2xl font-black tracking-[0.35em] uppercase bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
            LOTUS RIFT
          </h1>
          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mt-1">
            ESPORTS TOURNAMENT
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-200 text-sm uppercase">
              🌸 INSCRIPCIONES ABIERTAS
            </div>

            <h2 className="mt-8 text-7xl font-black leading-none">
              LOTUS <span className="text-pink-400">RIFT</span>
            </h2>

            <p className="mt-6 text-zinc-400">
              Comunidad de torneo Wild Rift.
            </p>

            <div className="mt-8 flex gap-4">
              <a className="px-6 py-3 rounded-xl bg-pink-500">WhatsApp</a>
              <a className="px-6 py-3 rounded-xl border border-white/20">Discord</a>
            </div>
          </motion.div>

          <motion.div>
            <img src="/logos/lotus-logo.png" className="w-full max-w-[500px]" />
          </motion.div>

        </div>
      </section>

      {/* STREAM */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="rounded-2xl border border-pink-500/20 overflow-hidden">
          <iframe
            src="https://player.twitch.tv/?channel=riotgames&parent=localhost"
            width="100%"
            height="600"
          />
        </div>
      </section>

      {/* BRACKET */}
      <section className="py-24 px-6">

        <div className="max-w-[1700px] mx-auto flex gap-16 overflow-x-auto">

          {/* OCTAVOS */}
          <div className="space-y-6">
            <h3 className="text-center text-zinc-400">OCTAVOS</h3>

            {octavos.map((m, i) => (
              <div key={i} className="w-[260px] bg-zinc-900 p-4 rounded-xl">

                <div className="flex justify-between items-center">
                  <img src={m.team1.logo} onError={(e)=>e.currentTarget.src=defaultLogo} className="w-8 h-8" />
                  <span>{m.team1.name}</span>
                  <span>{m.team1.score}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <img src={m.team2.logo} onError={(e)=>e.currentTarget.src=defaultLogo} className="w-8 h-8" />
                  <span>{m.team2.name}</span>
                  <span>{m.team2.score}</span>
                </div>

              </div>
            ))}
          </div>

          {/* CUARTOS */}
          <div className="space-y-16">
            <h3 className="text-center text-zinc-400">CUARTOS</h3>

            {quarterFinals.map((m, i) => (
              <div key={i} className="w-[260px] p-4 bg-black/40 border border-violet-500/20 rounded-xl">

                <div className="flex justify-between">
                  <img src={m.logo1} className="w-8 h-8" />
                  <span>{m.team1}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <img src={m.logo2} className="w-8 h-8" />
                  <span>{m.team2}</span>
                </div>

              </div>
            ))}
          </div>

          {/* SEMIS */}
          <div className="space-y-32">
            <h3 className="text-center text-zinc-400">SEMIS</h3>

            {semis.map((m, i) => (
              <div key={i} className="w-[280px] p-4 bg-black/50 border border-pink-500/20 rounded-xl">

                <div className="flex justify-between">
                  <img src={m.logo1} className="w-8 h-8" />
                  <span>{m.team1}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <img src={m.logo2} className="w-8 h-8" />
                  <span>{m.team2}</span>
                </div>

              </div>
            ))}
          </div>

          {/* FINAL */}
          <div className="w-[320px] p-6 border border-pink-500/30 rounded-2xl">

            <h3 className="text-center text-pink-300 mb-6">FINAL</h3>

            <div className="text-center mb-6 text-4xl">🪷</div>

            <div className="flex justify-between">
              <img src={finalMatch.logo1} className="w-8 h-8" />
              <span>{finalMatch.team1}</span>
            </div>

            <div className="text-center my-4">BO5</div>

            <div className="flex justify-between">
              <img src={finalMatch.logo2} className="w-8 h-8" />
              <span>{finalMatch.team2}</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}