"use client"


import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  MessageCircle,
  MessagesSquare,
  Crown,
} from "lucide-react"


const initialOctavos = [
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


const MatchCard = ({
  match,
  round,
}) => {


  const needed =
    round === "octavos"
      ? 1
      : round === "cuartos"
      ? 2
      : 3


  const winner1 = match.score1 >= needed
  const winner2 = match.score2 >= needed


  return (
    <div className="relative group">


      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-violet-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />


      <div className="relative w-[320px] rounded-[2rem] border border-pink-500/15 bg-black/60 backdrop-blur-xl p-5 shadow-[0_0_40px_rgba(255,0,170,0.08)]">


        {[1, 2].map((teamNum) => {


          const isWinner =
            teamNum === 1
              ? winner1
              : winner2


          const isLoser =
            teamNum === 1
              ? winner2
              : winner1


          const team =
            teamNum === 1
              ? match.team1
              : match.team2


          const score =
            teamNum === 1
              ? match.score1
              : match.score2


          return (
            <div
              key={teamNum}
              className={`
                relative
                overflow-hidden
                flex
                items-center
                justify-between
                rounded-2xl
                px-4
                py-4
                mb-3
                border
                transition-all
                duration-500


                ${
                  isWinner
                    ? "border-pink-400 bg-gradient-to-r from-pink-500/30 to-fuchsia-500/20 shadow-[0_0_40px_rgba(255,0,180,0.35)] scale-[1.02]"
                    : "border-white/10 bg-white/[0.03]"
                }


                ${
                  isLoser
                    ? "opacity-25 grayscale saturate-0"
                    : ""
                }
              `}
            >


              {isWinner && (
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] animate-[shine_3s_linear_infinite]" />
              )}


              <div className="relative flex items-center gap-4">


                <div className={`
                  relative
                  rounded-2xl
                  p-[2px]


                  ${
                    isWinner
                      ? "bg-gradient-to-br from-pink-400 to-violet-400"
                      : "bg-white/10"
                  }
                `}>


                  <img
                    src={team?.logo || "/teams/placeholder.png"}
                    className="w-14 h-14 rounded-2xl object-cover bg-black"
                  />


                </div>


                <div>
                  <p className="font-black text-[15px] tracking-wide uppercase">
                    {team?.name || "TBD"}
                  </p>


                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                    TEAM
                  </p>
                </div>


              </div>


              <div className={`
                min-w-[52px]
                h-[52px]
                rounded-2xl
                flex
                items-center
                justify-center
                text-2xl
                font-black
                border


                ${
                  isWinner
                    ? "bg-pink-500/20 border-pink-400 text-pink-200"
                    : "bg-white/[0.03] border-white/10 text-white"
                }
              `}>
                {score}
              </div>


            </div>
          )
        })}


      </div>
    </div>
  )
}


export default function LotusRift() {


  const [octavos, setOctavos] = useState(initialOctavos)
  const [cuartos, setCuartos] = useState([])
  const [semis, setSemis] = useState([])
  const [final, setFinal] = useState([])
  const [champion, setChampion] = useState(null)


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
      <div className="fixed inset-0 -z-10 overflow-hidden">


        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-pink-500/20 blur-[180px] rounded-full"
        />


        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-fuchsia-600/20 blur-[180px] rounded-full"
        />


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
              Unite a la comunidad y seguí el bracket en vivo.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">


              <a
                href="https://chat.whatsapp.com/Hi8Ymp9PrvrIRCgm7fVxc4"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Comunidad
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
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.8,
              y: {
                repeat: Infinity,
                duration: 4,
              }
            }}
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


        <div className="rounded-[2rem] border border-pink-500/20 bg-black/70 shadow-[0_0_80px_rgba(255,0,170,0.12)] overflow-hidden">


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


      {/* BRACKET */}
      <section className="py-24 overflow-x-auto">


        <div className="min-w-[1800px] px-20 flex items-center justify-center gap-28 relative">


          {/* LINEAS */}
          <div className="absolute inset-0 pointer-events-none opacity-30">


            <div className="absolute left-[24%] top-0 h-full w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent" />


            <div className="absolute left-[49%] top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent" />


            <div className="absolute left-[74%] top-0 h-full w-px bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent" />


          </div>


          {/* OCTAVOS */}
          <div className="flex flex-col gap-8">


            <h2 className="text-center text-xl font-black tracking-[0.3em] text-violet-300 mb-4">
              OCTAVOS
            </h2>


            {octavos.map((match, i) => (
              <div key={i} className="relative">


                <div className="absolute -right-14 top-1/2 w-14 h-px bg-gradient-to-r from-pink-500 to-transparent" />


                <MatchCard
                  match={match}
                  round="octavos"
                />


              </div>
            ))}


          </div>


          {/* CUARTOS */}
          <div className="flex flex-col gap-28 mt-28">


            <h2 className="text-center text-xl font-black tracking-[0.3em] text-violet-300 mb-4">
              CUARTOS
            </h2>


            {cuartos.map((match, i) => (
              <div key={i} className="relative">


                <div className="absolute -left-14 top-1/2 w-14 h-px bg-gradient-to-l from-violet-500 to-transparent" />


                <div className="absolute -right-14 top-1/2 w-14 h-px bg-gradient-to-r from-violet-500 to-transparent" />


                <MatchCard
                  match={match}
                  round="cuartos"
                />


              </div>
            ))}


          </div>


          {/* SEMIS */}
          <div className="flex flex-col gap-[230px] mt-[180px]">


            <h2 className="text-center text-xl font-black tracking-[0.3em] text-pink-300 mb-4">
              SEMIFINALES
            </h2>


            {semis.map((match, i) => (
              <div key={i} className="relative">


                <div className="absolute -left-14 top-1/2 w-14 h-px bg-gradient-to-l from-pink-500 to-transparent" />


                <div className="absolute -right-14 top-1/2 w-14 h-px bg-gradient-to-r from-pink-500 to-transparent" />


                <MatchCard
                  match={match}
                  round="semis"
                />


              </div>
            ))}


          </div>


          {/* FINAL */}
          <div className="mt-[420px] relative">


            <h2 className="text-center text-xl font-black tracking-[0.3em] text-pink-300 mb-10">
              FINAL
            </h2>


            {final.map((match, i) => (
              <div key={i} className="relative">


                <div className="absolute -left-14 top-1/2 w-14 h-px bg-gradient-to-l from-fuchsia-500 to-transparent" />


                <MatchCard
                  match={match}
                  round="final"
                />


              </div>
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
                  className="absolute top-[-260px] left-1/2 -translate-x-1/2 text-center"
                >


                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-500 flex items-center justify-center shadow-[0_0_140px_rgba(255,0,180,0.55)]"
                  >
                    <Crown size={90} />
                  </motion.div>


                  <h2 className="mt-6 text-5xl font-black bg-gradient-to-r from-pink-300 via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
                    {champion.name}
                  </h2>


                  <p className="mt-2 tracking-[0.4em] text-pink-300 text-sm">
                    CAMPEÓN
                  </p>


                </motion.div>
              )}


            </AnimatePresence>


          </div>


        </div>


        {/* PROXIMOS PARTIDOS */}
        <div className="max-w-7xl mx-auto px-5 mt-28">


          <div className="rounded-[2rem] border border-pink-500/20 bg-black/60 backdrop-blur-xl p-8 shadow-[0_0_70px_rgba(255,0,180,0.08)]">


            <div className="flex items-center gap-3 mb-8">
              <Play className="text-pink-400" />


              <h3 className="text-3xl font-black uppercase">
                Próximos Partidos
              </h3>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


              {octavos
                .filter((m) => m.score1 === 0 && m.score2 === 0)
                .slice(0, 6)
                .map((match, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-pink-500/30 transition-all"
                  >


                    <div className="flex items-center justify-between">


                      <div className="flex items-center gap-3">
                        <img
                          src={match.team1.logo}
                          className="w-10 h-10 rounded-lg object-cover"
                        />


                        <span className="font-bold">
                          {match.team1.name}
                        </span>
                      </div>


                      <span className="text-zinc-500 font-black">
                        VS
                      </span>


                      <div className="flex items-center gap-3">


                        <span className="font-bold">
                          {match.team2.name}
                        </span>


                        <img
                          src={match.team2.logo}
                          className="w-10 h-10 rounded-lg object-cover"
                        />


                      </div>


                    </div>


                  </div>
                ))}


            </div>


          </div>


        </div>


      </section>


    </main>
  )
}