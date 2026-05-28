"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Trophy,
  Play,
  MessageCircle,
  MessagesSquare,
  Crown,
} from "lucide-react"


const quarterFinals = [const initialOctavos = [
  {
    team1: { name: "TEAM 1", logo: "/teams/team1.png" },
    team2: { name: "TEAM 2", logo: "/teams/team2.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 3", logo: "/teams/team3.png" },
    team2: { name: "TEAM 4", logo: "/teams/team4.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 5", logo: "/teams/team5.png" },
    team2: { name: "TEAM 6", logo: "/teams/team6.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 7", logo: "/teams/team7.png" },
    team2: { name: "TEAM 8", logo: "/teams/team8.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 9", logo: "/teams/team9.png" },
    team2: { name: "TEAM 10", logo: "/teams/team10.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 11", logo: "/teams/team11.png" },
    team2: { name: "TEAM 12", logo: "/teams/team12.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 13", logo: "/teams/team13.png" },
    team2: { name: "TEAM 14", logo: "/teams/team14.png" },
    score1: 0,
    score2: 0,
  },
  {
    team1: { name: "TEAM 15", logo: "/teams/team15.png" },
    team2: { name: "TEAM 16", logo: "/teams/team16.png" },
    score1: 0,
    score2: 0,
  },
]
useEffect(() => {
  const winnersOctavos = octavos.map((m) => {
    if (m.score1 >= 1) return m.team1
    if (m.score2 >= 1) return m.team2
    return null
  })

  setCuartos([
    {
      team1: winnersOctavos[0],
      team2: winnersOctavos[1],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[2],
      team2: winnersOctavos[3],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[4],
      team2: winnersOctavos[5],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[6],
      team2: winnersOctavos[7],
      score1: 0,
      score2: 0,
    },
  ])
}, [octavos])

useEffect(() => {
  const winners = cuartos.map((m) => {
    if (m.score1 >= 2) return m.team1
    if (m.score2 >= 2) return m.team2
    return null
  })

  setSemis([
    {
      team1: winners[0],
      team2: winners[1],
      score1: 0,
      score2: 0,
    },
    {
      team1: winners[2],
      team2: winners[3],
      score1: 0,
      score2: 0,
    },
  ])
}, [cuartos])

useEffect(() => {
  const winners = semis.map((m) => {
    if (m.score1 >= 3) return m.team1
    if (m.score2 >= 3) return m.team2
    return null
  })

  setFinal([
    {
      team1: winners[0],
      team2: winners[1],
      score1: 0,
      score2: 0,
    },
  ])
}, [semis])

useEffect(() => {
  if (!final[0]) return

  if (final[0].score1 >= 3) {
    setChampion(final[0].team1)
  }

  if (final[0].score2 >= 3) {
    setChampion(final[0].team2)
  }
}, [final])


export default function LotusRift() {

  const [octavos, setOctavos] = useState(initialOctavos)
const [cuartos, setCuartos] = useState<any[]>([])
const [semis, setSemis] = useState<any[]>([])
const [final, setFinal] = useState<any[]>([])
const [champion, setChampion] = useState<any>(null)
useEffect(() => {
  const winnersOctavos = octavos.map((m) => {
    if (m.score1 >= 1) return m.team1
    if (m.score2 >= 1) return m.team2
    return null
  })

  setCuartos([
    {
      team1: winnersOctavos[0],
      team2: winnersOctavos[1],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[2],
      team2: winnersOctavos[3],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[4],
      team2: winnersOctavos[5],
      score1: 0,
      score2: 0,
    },
    {
      team1: winnersOctavos[6],
      team2: winnersOctavos[7],
      score1: 0,
      score2: 0,
    },
  ])
}, [octavos])

useEffect(() => {
  const winners = cuartos.map((m) => {
    if (m.score1 >= 2) return m.team1
    if (m.score2 >= 2) return m.team2
    return null
  })

  setSemis([
    {
      team1: winners[0],
      team2: winners[1],
      score1: 0,
      score2: 0,
    },
    {
      team1: winners[2],
      team2: winners[3],
      score1: 0,
      score2: 0,
    },
  ])
}, [cuartos])

useEffect(() => {
  const winners = semis.map((m) => {
    if (m.score1 >= 3) return m.team1
    if (m.score2 >= 3) return m.team2
    return null
  })

  setFinal([
    {
      team1: winners[0],
      team2: winners[1],
      score1: 0,
      score2: 0,
    },
  ])
}, [semis])

useEffect(() => {
  if (!final[0]) return

  if (final[0].score1 >= 3) {
    setChampion(final[0].team1)
  }

  if (final[0].score2 >= 3) {
    setChampion(final[0].team2)
  }
}, [final])

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
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.35em] uppercase bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
              LOTUS RIFT
            </h1>


            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mt-1">
              ESPORTS TOURNAMENT
            </p>
          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-200 text-sm tracking-[0.2em] uppercase">
              🌸 INSCRIPCIONES ABIERTAS
            </div>


            <h2 className="mt-8 text-7xl md:text-8xl font-black leading-none">
              <span className="text-white">LOTUS</span>
              <br />


              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
                RIFT
              </span>
            </h2>


            <p className="mt-7 text-zinc-400 text-lg max-w-xl">
              Unite a la comunidad de Discord y disfrutá del
              bracket en vivo de Wild Rift.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">
              {/* WHATSAPP */}
              <a
                href="https://chat.whatsapp.com/Hi8Ymp9PrvrIRCgm7fVxc4"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Comunidad
              </a>


              {/* DISCORD */}
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


          {/* RIGHT LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-500/30 blur-[140px] rounded-full" />


            <img
              src="/lotus-logo.png"
              alt="Lotus Rift"
              className="relative z-10 w-full max-w-[600px] mx-auto opacity-95"
            />
          </motion.div>
        </div>
      </section>


      {/* STREAM */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="rounded-[2rem] border border-pink-500/20 bg-black/70 overflow-
         shadow-[0_0_80px_rgba(255,0,170,0.12)]">
          <div className="px-6 py-5 border-b border-pink-500/10 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />


            <h3 className="text-2xl font-black uppercase">
              EN VIVO
            </h3>
          </div>


          <iframe
            src="https://player.twitch.tv/?channel=riotgames&parent=localhost"
            width="100%"
            height="650"
            allowFullScreen
          />
        </div>
      </section>


      <section className="py-24 overflow-x-auto">

  <div className="min-w-[1700px] flex justify-center gap-20">

    {/* OCTAVOS */}
    <div className="space-y-6">
      <h2 className="text-center font-black text-violet-300">
        OCTAVOS
      </h2>

      {octavos.map((match, i) => (
        <MatchCard
          key={i}
          match={match}
          round="octavos"
          onScore={(team: number) => {
            const updated = [...octavos]

            if (team === 1)
              updated[i].score1 = 1

            if (team === 2)
              updated[i].score2 = 1

            setOctavos(updated)
          }}
        />
      ))}
    </div>

    {/* CUARTOS */}
    <div className="space-y-20 mt-24">
      <h2 className="text-center font-black text-violet-300">
        CUARTOS
      </h2>

      {cuartos.map((match, i) => (
        <MatchCard
          key={i}
          match={match}
          round="cuartos"
          onScore={(team: number) => {
            const updated = [...cuartos]

            if (team === 1)
              updated[i].score1++

            if (team === 2)
              updated[i].score2++

            setCuartos(updated)
          }}
        />
      ))}
    </div>

    {/* SEMIS */}
    <div className="space-y-44 mt-52">
      <h2 className="text-center font-black text-pink-300">
        SEMIFINALES
      </h2>

      {semis.map((match, i) => (
        <MatchCard
          key={i}
          match={match}
          round="semis"
          onScore={(team: number) => {
            const updated = [...semis]

            if (team === 1)
              updated[i].score1++

            if (team === 2)
              updated[i].score2++

            setSemis(updated)
          }}
        />
      ))}
    </div>

    {/* FINAL */}
    <div className="mt-[350px] relative">

      <h2 className="text-center font-black text-pink-300 mb-10">
        FINAL
      </h2>

      {final.map((match, i) => (
        <MatchCard
          key={i}
          match={match}
          round="final"
          onScore={(team: number) => {
            const updated = [...final]

            if (team === 1)
              updated[i].score1++

            if (team === 2)
              updated[i].score2++

            setFinal(updated)
          }}
        />
      ))}

      <AnimatePresence>
        {champion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            className="absolute top-[-220px] left-1/2 -translate-x-1/2 text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="w-44 h-44 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-[0_0_120px_rgba(255,0,180,0.6)]"
            >
              <Crown size={80} />
            </motion.div>

            <h2 className="mt-6 text-5xl font-black bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              {champion.name}
            </h2>

            <p className="mt-2 tracking-[0.3em] text-pink-300">
              CAMPEÓN
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>

  </div>

</section>


      {/* PARTIDOS */}
      <section className="max-w-7xl mx-auto px-5 pb-32">
        <div className="flex items-center gap-3 mb-10">
          <Play className="text-pink-400" />


          <h3 className="text-5xl font-black uppercase">
            PRÓXIMOS PARTIDOS
          </h3>
        </div>


        <div className="space-y-5">
          {quarterFinals.map((match, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between"
            >
              <div>
                <p className="text-pink-300 font-bold">
                  19:00
                </p>


                <p className="text-zinc-500 text-sm">
                  4 DE JULIO
                </p>
              </div>


              <div className="flex items-center gap-4">
                <img
                  src={match.logo1}
                  className="w-10 h-10 rounded-xl"
                />


                <span className="font-semibold">
                  {match.team1}
                </span>
              </div>


              <div className="text-pink-400 font-black text-2xl">
                VS
              </div>


              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {match.team2}
                </span>


                <img
                  src={match.logo2}
                  className="w-10 h-10 rounded-xl"
                />
              </div>


              <button className="px-5 py-3 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all">
                VER DETALLES
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}