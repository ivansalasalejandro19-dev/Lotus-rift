"use client"


import { useState, useEffect } from "react"
import Image from "next/image"
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
  onScore,
}) => {
  const needed =
  round === "octavos"
    ? 1
    : round === "cuartos"
    ? 2
    : 3

const cardStyles =
  round === "octavos"
    ? "border-violet-500/20 shadow-[0_0_30px_rgba(168,85,247,0.10)]"
    : round === "cuartos"
    ? "border-pink-500/25 shadow-[0_0_50px_rgba(255,0,180,0.16)] scale-[1.02]"
    : round === "semis"
    ? "border-fuchsia-400/30 shadow-[0_0_70px_rgba(255,0,200,0.22)] scale-[1.04]"
    : "border-pink-300/40 shadow-[0_0_100px_rgba(255,0,220,0.35)] scale-[1.06]"

const roundGlow =
  round === "octavos"
    ? "from-violet-500/10 to-transparent"
    : round === "cuartos"
    ? "from-pink-500/15 to-violet-500/10"
    : round === "semis"
    ? "from-fuchsia-500/20 to-pink-500/10"
    : "from-pink-400/30 via-fuchsia-500/20 to-violet-500/20"


  const winner1 = match.score1 >= needed
  const winner2 = match.score2 >= needed


  return (
    <div className="relative group flex justify-center">

      <div
  className="
    absolute
    inset-[-12px]
    rounded-[2.5rem]
    bg-gradient-to-r
    from-pink-500/10
    via-fuchsia-500/20
    to-violet-500/20
    blur-2xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    -z-10
    pointer-events-none
  "
/>

 <div
  className={`
    relative
    w-[185px]
    rounded-[2rem]
    border
    ${cardStyles}
    bg-[#120914]/90
    backdrop-blur-2xl
    p-5
    overflow-visible
    isolate
  `}
>

    <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${roundGlow} opacity-70`} />

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
                py-3
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
                <div
                  className={`
                  relative
                  rounded-2xl
                  p-[2px]


                  ${
                    isWinner
                      ? "bg-gradient-to-br from-pink-400 to-violet-400"
                      : "bg-white/10"
                  }
                `}
                >
                  <Image
  src={team?.logo || "/teams/placeholder.png"}
  alt={team?.name || "Team"}
  width={42}
  height={42}
  className="rounded-2xl object-cover bg-black"
/>
                </div>


                <div>
                  <p className="font-black text-[13px] tracking-wide uppercase">
                    {team?.name || "TBD"}
                  </p>


                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                    TEAM
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-2">
                <button
                  onClick={() => onScore(teamNum, -1)}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  -
                </button>


                <div
                  className={`
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
              `}
                >
                  {score}
                </div>


                <button
                  onClick={() => onScore(teamNum, 1)}
                  className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/20 hover:bg-pink-500/40"
                >
                  +
                </button>
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


  const updateScore = (
    setter,
    matches,
    index,
    team,
    change,
    needed
  ) => {
    const updated = [...matches]


    if (team === 1) {
      updated[index].score1 = Math.max(
        0,
        Math.min(
          needed,
          updated[index].score1 + change
        )
      )
    }


    if (team === 2) {
      updated[index].score2 = Math.max(
        0,
        Math.min(
          needed,
          updated[index].score2 + change
        )
      )
    }


    if (updated[index].score1 >= needed) {
      updated[index].score2 = Math.min(
        updated[index].score2,
        needed - 1
      )
    }


    if (updated[index].score2 >= needed) {
      updated[index].score1 = Math.min(
        updated[index].score1,
        needed - 1
      )
    }


    setter(updated)
  }


  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-visible">

  {/* BACKGROUND */}
  <div className="fixed inset-0 -z-10 overflow-hidden">

    <motion.div
      animate={{
        x: [0, 70, 0],
        y: [0, -50, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 14,
        ease: "easeInOut",
      }}
      className="absolute top-[-20%] left-[-10%] w-[750px] h-[750px] bg-pink-500/20 blur-[180px] rounded-full"
    />

    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 60, 0],
        scale: [1, 1.12, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 16,
        ease: "easeInOut",
      }}
      className="absolute bottom-[-20%] right-[-10%] w-[750px] h-[750px] bg-fuchsia-600/20 blur-[180px] rounded-full"
    />

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] bg-violet-500/10 blur-[180px] rounded-full"
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,120,0.12),transparent_55%)]" />

  {[...Array(35)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -25, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 3 + i % 5,
      }}
      className="absolute w-1 h-1 bg-pink-400/40 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}

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
              },
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-500/30 blur-[140px] rounded-full" />


            <Image
  src="/lotus-logo.png"
  alt="Lotus Rift"
  width={600}
  height={600}
  className="relative z-10 w-full h-auto max-w-[600px] mx-auto opacity-95"
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
<section className="relative py-24 overflow-x-auto border-y border-white/5">
  <div className="max-w-[1800px] mx-auto px-10 relative z-10">

    <div className="text-center mb-20">
      <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
        LOTUS ARENA
      </p>

      <h2 className="text-6xl font-black bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
        BRACKET
      </h2>
    </div>

    <div className="min-w-[1200px] grid grid-cols-4 gap-16">

      {/* OCTAVOS */}
      <div>
        <h2 className="text-center font-black text-violet-300 tracking-[0.3em] mb-12">
          OCTAVOS
        </h2>

        <div className="flex flex-col gap-6">
          {octavos.map((match, i) => (
            <MatchCard
              key={i}
              match={match}
              round="octavos"
              onScore={(team, change) =>
                updateScore(setOctavos, octavos, i, team, change, 1)
              }
            />
          ))}
        </div>
      </div>

      {/* CUARTOS */}
      <div>
        <h2 className="text-center font-black text-violet-300 tracking-[0.3em] mb-12">
          CUARTOS
        </h2>

        <div className="flex flex-col gap-[5.5rem] pt-[4rem]>
          {cuartos.map((match, i) => (
            <MatchCard
              key={i}
              match={match}
              round="cuartos"
              onScore={(team, change) =>
                updateScore(setCuartos, cuartos, i, team, change, 2)
              }
            />
          ))}
        </div>
      </div>

      {/* SEMIS */}
      <div>
        <h2 className="text-center font-black text-pink-300 tracking-[0.3em] mb-12">
          SEMIFINALES
        </h2>

        <div className="flex flex-col gap-[11rem] pt-[9rem]">
          {semis.map((match, i) => (
            <MatchCard
              key={i}
              match={match}
              round="semis"
              onScore={(team, change) =>
                updateScore(setSemis, semis, i, team, change, 3)
              }
            />
          ))}
        </div>
      </div>

      {/* FINAL */}
      <div>
        <h2 className="text-center font-black text-pink-300 tracking-[0.3em] mb-12">
          FINAL
        </h2>

        <div className="pt-[14rem] flex justify-center">
          {final.map((match, i) => (
            <MatchCard
              key={i}
              match={match}
              round="final"
              onScore={(team, change) =>
                updateScore(setFinal, final, i, team, change, 3)
              }
            />
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* PROXIMOS PARTIDOS */}
      <section className="max-w-7xl mx-auto px-5 py-28">
        <div className="flex items-center gap-3 mb-10">
          <Play className="text-pink-400" />


          <h3 className="text-5xl font-black uppercase">
            PRÓXIMOS PARTIDOS
          </h3>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {octavos
            .filter(
              (m) =>
                m.score1 === 0 &&
                m.score2 === 0
            )
            .slice(0, 4)
            .map((match, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between hover:border-pink-500/30 transition-all duration-300"
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
                  <Image
  src={match.team1.logo}
  alt={match.team1.name}
  width={40}
  height={40}
  className="rounded-xl object-cover"
/>

                  <span className="font-semibold">
                    {match.team1.name}
                  </span>
                </div>

                <div className="text-pink-400 font-black text-2xl">
                  VS
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-semibold">
                    {match.team2.name}
                  </span>

                  <Image
  src={match.team2.logo}
  alt={match.team2.name}
  width={40}
  height={40}
  className="rounded-xl object-cover"
/>
                </div>

                <button className="px-5 py-3 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all">
                  VER DETALLES
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pink-500/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black tracking-[0.3em] bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-200 bg-clip-text text-transparent">
              LOTUS RIFT
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Torneo competitivo de Wild Rift
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/nVyrHkeCn5"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-pink-500/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              Discord
            </a>

            <a
              href="https://chat.whatsapp.com/Hi8Ymp9PrvrIRCgm7fVxc4"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all"
            >
              Comunidad
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}