"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Play,
  MessageCircle,
  MessagesSquare,
} from "lucide-react"

const defaultLogo = "/logos/default.png"

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

const quarterFinals = [
  {
    team1: "Nᴀʜᴜᴀʟᴇs",
    logo1: "/logos/nahuales.png",
    team2: "Fʟᴀᴡʟᴇss",
    logo2: "/logos/flawless.png",
  },
  {
    team1: "ÆSIIR Gᴏ Lᴇɢᴇɴᴅs",
    logo1: "/logos/ae_siir_go_legends.png",
    team2: "Jᴏʏɪᴛᴀ Gᴀᴍɪɴɢ",
    logo2: "/logos/joyita_gaming.png",
  },
  {
    team1: "Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ",
    logo1: "/logos/overextended.png",
    team2: "Gᴏʟᴅᴇɴ Dʀᴀɢᴏɴs",
    logo2: "/logos/golden_dragons.png",
  },
  {
    team1: "T502",
    logo1: "/logos/T502.png",
    team2: "Sᴍᴀᴄᴋᴅᴏᴡɴ",
    logo2: "/logos/smackdown.png",
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
              src="logos/lotus-logo.png"
              alt="Lotus Rift"
              className="relative z-10 w-full max-w-[600px] mx-auto opacity-95"
            />
          </motion.div>
        </div>
      </section>


       {/* STREAM FIX */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="rounded-[2rem] border border-pink-500/20 bg-black/70 overflow-hidden shadow-[0_0_80px_rgba(255,0,170,0.12)]">
          
          <iframe
            src="https://player.twitch.tv/?channel=riotgames&parent=localhost"
            width="100%"
            height="650"
            allowFullScreen
          />
        </div>
      </section>


      {/* BRACKET */}
      <section className="relative py-24 px-6 overflow-hidden border-y border-white/5">

        <div className="max-w-[1700px] mx-auto relative z-10">

          {/* OCTAVOS */}
          <div className="space-y-6">
            {octavos.map((match, index) => (
              <div key={index} className="w-[260px] rounded-2xl bg-zinc-900/80 border border-white/10 p-5">

                <div className="flex items-center justify-between">
                  <img
                    src={match.team1.logo}
                    onError={(e) => (e.currentTarget.src = defaultLogo)}
                    className="w-8 h-8 rounded-lg"
                  />
                  <span>{match.team1.name}</span>
                  <span>{match.team1.score}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <img
                    src={match.team2.logo}
                    onError={(e) => (e.currentTarget.src = defaultLogo)}
                    className="w-8 h-8 rounded-lg"
                  />
                  <span>{match.team2.name}</span>
                  <span>{match.team2.score}</span>
                </div>

              </div>
            ))}
          </div>

          {/* CUARTOS FIX (ANTES ERROR match) */}
          <div className="space-y-20 mt-20">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-[280px]">

                <div className="flex items-center justify-between">
                  <img
                    src={quarterFinals[item - 1]?.logo1 || defaultLogo}
                    onError={(e) => (e.currentTarget.src = defaultLogo)}
                    className="w-8 h-8"
                  />
                  <span>{quarterFinals[item - 1]?.team1}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <img
                    src={quarterFinals[item - 1]?.logo2 || defaultLogo}
                    onError={(e) => (e.currentTarget.src = defaultLogo)}
                    className="w-8 h-8"
                  />
                  <span>{quarterFinals[item - 1]?.team2}</span>
                </div>

              </div>
            ))}
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
  src={match.team1.logo}
  onError={(e) => {
    e.currentTarget.src = "/logos/default.png"
  }}
  className="w-8 h-8 rounded-lg object-cover"
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
  src={match.team2.logo}
  onError={(e) => {
    e.currentTarget.src = "/logos/default.png"
  }}
  className="w-8 h-8 rounded-lg object-cover"
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