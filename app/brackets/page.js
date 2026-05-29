"use client"

import { motion } from "framer-motion"
import {
  Play,
  MessageCircle,
  MessagesSquare,
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

export default function LotusRift() {
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

                          {[match.team1, match.team2].map((team, i) => (
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
                                  {team?.score || 0}
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

                          {[match.team1, match.team2].map((team, i) => (
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
                                  {team?.score || 0}
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

                      {[finalMatch.team1, finalMatch.team2].map((team, i) => (
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
                              {team?.score || 0}
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