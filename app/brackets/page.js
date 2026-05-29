"use client"


import { motion } from "framer-motion"
import {
  Trophy,
  Play,
  MessageCircle,
  MessagesSquare,
} from "lucide-react"


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
const quarterFinals = Array.from({ length: 4 }, (_, i) => {
  const match1 = octavos[i * 2]
  const match2 = octavos[i * 2 + 1]

  return {
    team1:
      match1.team1.score >= match1.team2.score
        ? match1.team1
        : match1.team2,

    team2:
      match2.team1.score >= match2.team2.score
        ? match2.team1
        : match2.team2,
  }
})

const semiFinals = Array.from({ length: 2 }, (_, i) => {
  const match1 = quarterFinals[i * 2]
  const match2 = quarterFinals[i * 2 + 1]

  return {
    team1: match1.team1,
    team2: match2.team1,
  }
})

const finalMatch = {
  team1: semiFinals[0]?.team1,
  team2: semiFinals[1]?.team1,
}
{/* CUARTOS */}
<div className="flex flex-col justify-center">

  <h3 className="mb-8 text-center font-bold text-zinc-400 tracking-[0.2em]">
    CUARTOS
  </h3>

  <div className="space-y-20">

    {quarterFinals.map((match, item) => (
      <div key={item} className="relative">

        {/* CONNECTOR */}
        <div className="absolute -left-12 top-1/2 flex items-center">

          <div className="w-6 h-px bg-violet-500/40" />

          <div className="w-6 h-[130px] border-l border-b border-violet-500/20 rounded-bl-2xl" />

        </div>

        <div className="w-[280px] rounded-3xl bg-gradient-to-br from-violet-500/10 to-black border border-violet-500/20 p-6 shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:scale-[1.02] transition duration-300">

          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">

              <div className="flex items-center gap-3 flex-1">

                <img
                  src={match.team1.logo}
                  alt={match.team1.name}
                  className="w-9 h-9 rounded-lg object-cover"
                />

                <div className="flex-1 text-center">
                  <span className="font-bold text-white">
                    {match.team1.name}
                  </span>
                </div>
              </div>

              <div className="ml-3 min-w-[32px] h-8 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-black text-violet-300">
                {match.team1.score}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">

              <div className="flex items-center gap-3 flex-1">

                <img
                  src={match.team2.logo}
                  alt={match.team2.name}
                  className="w-9 h-9 rounded-lg object-cover"
                />

                <div className="flex-1 text-center">
                  <span className="font-bold text-white">
                    {match.team2.name}
                  </span>
                </div>
              </div>

              <div className="ml-3 min-w-[32px] h-8 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center font-black text-violet-300">
                {match.team2.score}
              </div>
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

    {semiFinals.map((match, item) => (
      <div key={item} className="relative">

        {/* CONNECTOR */}
        <div className="absolute -left-14 top-1/2 flex items-center">

          <div className="w-7 h-px bg-pink-400/40" />

          <div className="w-7 h-[220px] border-l border-b border-pink-400/20 rounded-bl-2xl" />

        </div>

        <div className="w-[300px] rounded-3xl bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-400/20 p-7 shadow-[0_0_45px_rgba(168,85,247,0.18)] hover:scale-[1.02] transition duration-300">

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-3">

              <div className="flex items-center gap-3 flex-1">

                <img
                  src={match.team1.logo}
                  alt={match.team1.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />

                <div className="flex-1 text-center">
                  <span className="font-black text-lg text-white">
                    {match.team1.name}
                  </span>
                </div>
              </div>

              <div className="ml-3 min-w-[38px] h-9 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300">
                {match.team1.score}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-3">

              <div className="flex items-center gap-3 flex-1">

                <img
                  src={match.team2.logo}
                  alt={match.team2.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />

                <div className="flex-1 text-center">
                  <span className="font-black text-lg text-white">
                    {match.team2.name}
                  </span>
                </div>
              </div>

              <div className="ml-3 min-w-[38px] h-9 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300">
                {match.team2.score}
              </div>
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

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 flex items-center justify-between">

          <div className="flex items-center gap-4 flex-1">

            <img
              src={finalMatch.team1?.logo}
              alt={finalMatch.team1?.name}
              className="w-12 h-12 rounded-xl object-cover"
            />

            <div className="flex-1 text-center">
              <span className="font-black text-2xl text-white">
                {finalMatch.team1?.name || "TBD"}
              </span>
            </div>
          </div>

          <div className="ml-4 min-w-[42px] h-10 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300 text-lg">
            {finalMatch.team1?.score || 0}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="px-5 py-2 rounded-xl bg-black/50 border border-violet-500/20 font-black text-violet-300">
            BO5
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 flex items-center justify-between">

          <div className="flex items-center gap-4 flex-1">

            <img
              src={finalMatch.team2?.logo}
              alt={finalMatch.team2?.name}
              className="w-12 h-12 rounded-xl object-cover"
            />

            <div className="flex-1 text-center">
              <span className="font-black text-2xl text-white">
                {finalMatch.team2?.name || "TBD"}
              </span>
            </div>
          </div>

          <div className="ml-4 min-w-[42px] h-10 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center font-black text-pink-300 text-lg">
            {finalMatch.team2?.score || 0}
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-zinc-500 text-sm tracking-[0.2em]">
        Quien se lleva el 🪷?
      </div>

    </div>

  </div>

</div>
      ```jsx
{/* PARTIDOS */}
<section className="max-w-7xl mx-auto px-5 pb-32">
  <div className="flex items-center gap-3 mb-10">
    <Play className="text-pink-400" />

    <h3 className="text-5xl font-black uppercase">
      PRÓXIMOS PARTIDOS
    </h3>
  </div>

  {/* HEADER FECHA/HORA */}
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
      Quarter Finals
    </div>
  </div>

  <div className="space-y-5">
    {quarterFinals.map((match, index) => (
      <div
        key={index}
        className="rounded-[2rem] border border-pink-500/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between"
      >

        {/* TEAM 1 */}
        <div className="flex items-center gap-4 w-[320px]">
          <img
            src={match.logo1}
            className="w-10 h-10 rounded-xl"
          />

          <span className="font-semibold">
            {match.team1}
          </span>
        </div>

        {/* VS */}
        <div className="text-pink-400 font-black text-2xl">
          VS
        </div>

        {/* TEAM 2 */}
        <div className="flex items-center justify-end gap-4 w-[320px]">
          <span className="font-semibold text-right">
            {match.team2}
          </span>

          <img
            src={match.logo2}
            className="w-10 h-10 rounded-xl"
          />
        </div>

        {/* BUTTON */}
        <button className="px-5 py-3 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all">
          VER DETALLES
        </button>
      </div>
    ))}
  </div>
</section>
```

    </main>
  )
}