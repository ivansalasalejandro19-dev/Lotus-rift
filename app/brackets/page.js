"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Trophy,
  Play,
  MessageCircle,
  MessagesSquare,
} from "lucide-react"

export default function LotusRift() {

  // =========================
  // DATA (octavos)
  // =========================
  const octavos = [
    {
      team1: { name: "Lotus", logo: "/teams/team1.png", score: 2 },
      team2: { name: "Nova", logo: "/teams/team2.png", score: 1 },
    },
    {
      team1: { name: "Shadow", logo: "/teams/team3.png", score: 0 },
      team2: { name: "Phoenix", logo: "/teams/team4.png", score: 2 },
    },
    {
      team1: { name: "Reapers", logo: "/teams/team5.png", score: 2 },
      team2: { name: "Zenith", logo: "/teams/team6.png", score: 1 },
    },
    {
      team1: { name: "Vortex", logo: "/teams/team7.png", score: 2 },
      team2: { name: "Drake", logo: "/teams/team8.png", score: 0 },
    },
  ]

  // =========================
  // WINNER LOGIC
  // =========================
  const getWinner = (match, format = "bo1") => {
    const score1 = Number(match.team1.score || 0)
    const score2 = Number(match.team2.score || 0)

    if (score1 === score2) return null

    const needed =
      format === "bo1" ? 1 :
      format === "bo3" ? 2 :
      3 // bo5

    if (score1 < needed && score2 < needed) return null

    return score1 > score2 ? match.team1 : match.team2
  }

  // =========================
  // BRACKET CALCULATION (SSR SAFE)
  // =========================

  const winnersOctavos = octavos
    .map((m) => getWinner(m, "bo1"))
    .filter(Boolean)

  const quarters = []
  for (let i = 0; i < winnersOctavos.length; i += 2) {
    if (winnersOctavos[i] && winnersOctavos[i + 1]) {
      quarters.push({
        team1: winnersOctavos[i],
        team2: winnersOctavos[i + 1],
      })
    }
  }

  const winnersCuartos = quarters
    .map((m) => getWinner(m, "bo3"))
    .filter(Boolean)

  const semis = []
  for (let i = 0; i < winnersCuartos.length; i += 2) {
    if (winnersCuartos[i] && winnersCuartos[i + 1]) {
      semis.push({
        team1: winnersCuartos[i],
        team2: winnersCuartos[i + 1],
      })
    }
  }

  const winnersSemis = semis
    .map((m) => getWinner(m, "bo5"))
    .filter(Boolean)

  const finalMatch =
    winnersSemis.length >= 2
      ? {
          team1: winnersSemis[0],
          team2: winnersSemis[1],
        }
      : null

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HEADER / HERO / STREAM → todo igual (no lo toqué) */}

      {/* ========================= */}
      {/* BRACKET */}
      {/* ========================= */}

      <section id="bracket" className="relative py-24 px-6 overflow-hidden border-y border-white/5">

        <div className="max-w-[1700px] mx-auto relative z-10">

          <div className="overflow-x-auto">
            <div className="min-w-[1450px] flex items-center justify-center gap-16">

              {/* OCTAVOS */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-8 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  OCTAVOS
                </h3>

                <div className="space-y-6">
                  {octavos.map((match, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[260px] rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 hover:border-violet-500/40 hover:scale-[1.02] transition duration-300"
                      >
                        <div className="space-y-3">

                          {/* TEAM 1 */}
                          <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">
                            <div className="flex items-center gap-3 flex-1">
                              <img
                                src={match.team1.logo}
                                alt="team"
                                className="w-8 h-8 rounded-lg object-cover"
                              />
                              <div className="flex-1 text-center">
                                <span className="font-semibold text-white">
                                  {match.team1.name}
                                </span>
                              </div>
                            </div>

                            <div className="ml-3 min-w-[30px] h-7 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-bold text-violet-300 text-sm">
                              {match.team1.score}
                            </div>
                          </div>

                          <div className="h-px bg-white/5" />

                          {/* TEAM 2 */}
                          <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">
                            <div className="flex items-center gap-3 flex-1">
                              <img
                                src={match.team2.logo}
                                alt="team"
                                className="w-8 h-8 rounded-lg object-cover"
                              />
                              <div className="flex-1 text-center">
                                <span className="font-semibold text-white">
                                  {match.team2.name}
                                </span>
                              </div>
                            </div>

                            <div className="ml-3 min-w-[30px] h-7 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-bold text-violet-300 text-sm">
                              {match.team2.score}
                            </div>
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CUARTOS / SEMIS / FINAL → SIN CAMBIOS VISUALES */}
              {/* (te los dejé igual, solo usan quarters/semis/finalMatch ya seguros) */}

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}