"use client"


import { motion } from "framer-motion"
import {
  Trophy,
  Play,
  MessageCircle,
  MessagesSquare,
} from "lucide-react"


const quarterFinals = [
  {
    team1: "TBD",
    logo1: "/teams/team1.png",
    team2: "TBD",
    logo2: "/teams/team2.png",
  },
  {
    team1: "TBD",
    logo1: "/teams/team3.png",
    team2: "TBD",
    logo2: "/teams/team4.png",
  },
  {
    team1: "TBD",
    logo1: "/teams/team5.png",
    team2: "TBD",
    logo2: "/teams/team6.png",
  },
  {
    team1: "TBD",
    logo1: "/teams/team7.png",
    team2: "TBD",
    logo2: "/teams/team8.png",
  },
]


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
                href="https://chat.whatsapp.com/TULINK"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Comunidad
              </a>


              {/* DISCORD */}
              <a
                href="https://discord.gg/TUSERVIDOR"
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


      {/* BRACKET */}
<section
  id="bracket"
  className="relative py-24 px-6 overflow-hidden border-y border-white/5"
>


  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.14),transparent_60%)]" />


  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-3xl animate-pulse" />


  {/* PARTICLES */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">


    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-violet-400/30 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 5}s`
        }}
      />
    ))}


  </div>


  <div className="max-w-[1700px] mx-auto relative z-10">


    {/* TITLE */}
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


            {[1,2,3,4,5,6,7,8].map((item) => (
              <div
                key={item}
                className="w-[260px] rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 hover:border-violet-500/40 hover:scale-[1.02] transition duration-300"
              >


                <div className="space-y-3">


                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      TBD
                    </span>


                    <span className="text-violet-400">
                      🪷
                    </span>
                  </div>


                  <div className="h-px bg-white/5" />


                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      TBD
                    </span>


                    <span className="text-violet-400">
                      🪷
                    </span>
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


            {[1,2,3,4].map((item) => (
              <div key={item} className="relative">


                {/* CONNECTOR */}
                <div className="absolute -left-12 top-1/2 flex items-center">


                  <div className="w-6 h-px bg-violet-500/40" />


                  <div className="w-6 h-24 border-l border-b border-violet-500/20 rounded-bl-2xl" />


                </div>


                <div className="w-[280px] rounded-3xl bg-gradient-to-br from-violet-500/10 to-black border border-violet-500/20 p-6 shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:scale-[1.02] transition duration-300">


                  <div className="space-y-4">


                    <div className="flex items-center justify-between">
                      <span className="font-bold">
                        TBD
                      </span>


                      <span className="text-violet-400">
                        ✦
                      </span>
                    </div>


                    <div className="h-px bg-white/10" />


                    <div className="flex items-center justify-between">
                      <span className="font-bold">
                        TBD
                      </span>


                      <span className="text-violet-400">
                        ✦
                      </span>
                    </div>


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


            {[1,2].map((item) => (
              <div key={item} className="relative">


                {/* CONNECTOR */}
                <div className="absolute -left-14 top-1/2 flex items-center">


                  <div className="w-7 h-px bg-pink-400/40" />


                  <div className="w-7 h-40 border-l border-b border-pink-400/20 rounded-bl-2xl" />


                </div>


                <div className="w-[300px] rounded-3xl bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-400/20 p-7 shadow-[0_0_45px_rgba(168,85,247,0.18)] hover:scale-[1.02] transition duration-300">


                  <div className="space-y-4">


                    <div className="flex items-center justify-between">
                      <span className="font-black text-lg">
                        TBD
                      </span>


                      <span className="text-pink-300">
                        ✦
                      </span>
                    </div>


                    <div className="h-px bg-white/10" />


                    <div className="flex items-center justify-between">
                      <span className="font-black text-lg">
                        TBD
                      </span>


                      <span className="text-pink-300">
                        ✦
                      </span>
                    </div>


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


            {/* GLOW */}
            <div className="absolute inset-0 bg-violet-500/30 blur-3xl rounded-full animate-pulse" />


            <div className="relative w-[340px] rounded-[2rem] border border-pink-400/30 bg-gradient-to-br from-pink-500/20 via-violet-500/10 to-black p-10 shadow-[0_0_70px_rgba(168,85,247,0.3)] backdrop-blur-2xl">


              {/* LOTUS CORE */}
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


              {/* TEAMS */}
              <div className="space-y-5">


                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 flex items-center justify-between">
                  <span className="font-bold text-xl">
                    TBD
                  </span>


                  <span className="text-pink-300">
                    🪷
                  </span>
                </div>


                <div className="flex justify-center">


                  <div className="px-5 py-2 rounded-xl bg-black/50 border border-violet-500/20 font-black text-violet-300">
                    BO5
                  </div>


                </div>


                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 flex items-center justify-between">
                  <span className="font-bold text-xl">
                    TBD
                  </span>


                  <span className="text-pink-300">
                    🪷
                  </span>
                </div>


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