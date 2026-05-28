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


          <div className="flex gap-3">
            {/* DISCORD */}
            <a
              href="https://discord.gg/TUSERVIDOR"
              target="_blank"
              className="px-5 py-3 rounded-2xl border border-pink-500/20 bg-white/[0.03] hover:bg-pink-500/10 transition-all flex items-center gap-2"
            >
              <MessagesSquare size={18} />
              Discord
            </a>


            {/* WHATSAPP */}
            <a
              href="https://chat.whatsapp.com/TULINK"
              target="_blank"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,0,140,0.35)] flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Comunidad
            </a>
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
        <div className="rounded-[2rem] border border-pink-500/20 bg-black/70 overflow-hidden shadow-[0_0_80px_rgba(255,0,170,0.12)]">
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
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="mb-10">
          <p className="text-pink-300 uppercase tracking-[0.3em] text-sm">
            Eliminación directa
          </p>


          <h3 className="text-5xl font-black mt-3">
            BRACKET
          </h3>
        </div>


        <div className="overflow-x-auto">
          <div className="min-w-[1400px] flex gap-16 items-center">
            {/* OCTAVOS */}
            <div className="space-y-8">
              <h4 className="text-pink-300 uppercase tracking-[0.3em] text-sm">
                OCTAVOS
              </h4>


              {quarterFinals.map((match, index) => (
                <div
                  key={index}
                  className="w-[280px] rounded-3xl border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-5"
                >
                  {/* TEAM 1 */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={match.logo1}
                        alt={match.team1}
                        className="w-10 h-10 rounded-xl object-cover border border-pink-500/20"
                      />


                      <input
                        defaultValue={match.team1}
                        className="bg-transparent outline-none font-medium w-[120px]"
                      />
                    </div>


                    <span className="text-pink-400 font-bold">
                      0
                    </span>
                  </div>


                  <div className="h-px bg-pink-500/10 my-2" />


                  {/* TEAM 2 */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={match.logo2}
                        alt={match.team2}
                        className="w-10 h-10 rounded-xl object-cover border border-pink-500/20"
                      />


                      <input
                        defaultValue={match.team2}
                        className="bg-transparent outline-none font-medium w-[120px]"
                      />
                    </div>


                    <span className="text-pink-400 font-bold">
                      0
                    </span>
                  </div>
                </div>
              ))}
            </div>


            {/* CUARTOS */}
            <div className="space-y-28">
              <div>
                <h4 className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-8">
                  CUARTOS
                </h4>


                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-[280px] rounded-3xl border border-pink-500/10 bg-pink-500/[0.05] backdrop-blur-xl p-5 mb-24"
                  >
                    <div className="py-3">TBD</div>


                    <div className="h-px bg-pink-500/10 my-2" />


                    <div className="py-3">TBD</div>
                  </div>
                ))}
              </div>
            </div>


            {/* SEMIS */}
            <div className="space-y-52">
              <div>
                <h4 className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-8">
                  SEMIFINALES
                </h4>


                <div className="w-[280px] rounded-3xl border border-pink-500/10 bg-pink-500/[0.05] backdrop-blur-xl p-5">
                  <div className="py-3">TBD</div>


                  <div className="h-px bg-pink-500/10 my-2" />


                  <div className="py-3">TBD</div>
                </div>
              </div>
            </div>


            {/* FINAL */}
            <div>
              <h4 className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-8">
                FINAL
              </h4>


              <div className="w-[320px] rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(255,0,170,0.18)]">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <Trophy
                      size={42}
                      className="text-pink-400"
                    />
                  </div>
                </div>


                <div className="text-center">
                  <p className="text-pink-300 tracking-[0.3em] uppercase text-sm">
                    GRAND FINAL
                  </p>


                  <div className="mt-10 space-y-6">
                    <div className="text-2xl font-bold">
                      TBD
                    </div>


                    <div className="text-pink-400 font-black text-xl">
                      VS
                    </div>


                    <div className="text-2xl font-bold">
                      TBD
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
                  4 JULIO
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