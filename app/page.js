'use client'

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { db } from "./lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export default function LotusRiftTournamentPage() {

  const [openTeam, setOpenTeam] = useState(null)
  const [discordUser, setDiscordUser] = useState(null)
  const [teams, setTeams] = useState([])
const [roster, setRoster] = useState({})
const [loading, setLoading] = useState(true)
const [teamLogos, setTeamLogos] = useState({})


  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lotus_user="))

    if (!cookie) return

    try {
      const user = JSON.parse(
        decodeURIComponent(cookie.split("=")[1])
      )

      setDiscordUser(user)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
  async function loadTeams() {
    try {
      const snap = await getDoc(
        doc(db, "config", "teams")
      )

      if (snap.exists()) {
  const data = snap.data()

  setTeams(data.teams || [])
  setRoster(data.roster || {})
  setTeamLogos(data.teamLogos || {})
}
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  loadTeams()
}, [])

  const tournamentInfo = {
    name: '🪷 LOTUS RIFT 🪷',
    subtitle: 'Torneo LAN',
    description: '',
    season: 'Sem',
    pricepool: '180 USDT',
    players: '16 Equipos',
    status: 'INSCRIPCIONES CERRADAS',
    startTime: '19:00 PM MX'
  }


  // =============================
  // EDITÁ TODO DESDE ACÁ
  // =============================


  const bracketLink = 'https://tus-brackets.com'
  const discordLink = 'https://discord.gg/nVyrHkeCn5'


  
  const schedule = [
    {
      date: '4 Julio',
      matches: 'Octavos 1, 2, 3 y 4',
      format: 'Bo1'
    },
    {
      date: '5 Julio',
      matches: 'Octavos 5, 6, 7 y 8',
      format: 'Bo1'
    },
    {
      date: '11 Julio',
      matches: 'Cuartos 1 y 2',
      format: 'Bo3'
    },
    {
      date: '12 Julio',
      matches: 'Cuartos 3 y 4',
      format: 'Bo3'
    },
    {
      date: '18 Julio',
      matches: 'Semifinal 1',
      format: 'Bo5'
    },
    {
      date: '19 Julio',
      matches: 'Semifinal 2',
      format: 'Bo5'
    },
    {
      date: '25 Julio',
      matches: 'Final',
      format: 'Bo5'
    }
  ]

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Cargando equipos...
    </div>
  )
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-cyan-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>



      {/* HERO */}
      <section
        className="relative z-10 px-4 sm:px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center py-16 sm:py-24 pb-16"
      >
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-pink-500/20 bg-pink-500/10 mb-8 backdrop-blur-xl">
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />


            <span className="uppercase tracking-[0.3em] text-sm text-pink-100">
              {tournamentInfo.status}
            </span>
          </div>


          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none">
  <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.35)]">
    𝐿𝑂𝑇𝑈𝑆 
  </span>

  <span className="block bg-gradient-to-r from-pink-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
    𝑅𝐼𝐹𝑇
  </span>
</h2>


          <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
            Unete a la comunidad de discord
          </p>


          <div className="flex flex-wrap gap-5 mt-12">


            <a
              href="https://chat.whatsapp.com/Hi8Ymp9PrvrIRCgm7fVxc4"
              target="_blank"
              className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 font-semibold shadow-[0_0_40px_rgba(255,0,150,0.35)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Comunidad de Whatsapp
            </a>

            <a
              href={discordLink}
              target="_blank"
              className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              Discord
            </a>
          </div>
        </div>


        <div className="relative flex justify-center items-center">
          <div
            className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-pink-300/10 animate-pulse"
/>

          <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[370px] lg:h-[370px] rounded-full border border-white/10 bg-gradient-to-br from-pink-400/10 to-violet-500/20 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_100px_rgba(236,72,153,0.3)]">
            <div className="text-center px-6">
              <div className="text-8xl animate-pulse">🪷</div>

              <div className="absolute inset-0 rounded-full border border-pink-400/20 animate-ping" />

              <h3 className="text-4xl font-black mt-5 text-pink-200">
                Lotus arena
              </h3>


              <p className="mt-4 text-white/60 leading-relaxed">
                Donde el loto florece en combate.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-8 hover:bg-white/10 transition">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Equipos
          </p>


          <h3 className="text-3xl sm:text-5xl font-black mt-3 text-pink-200">
            16
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Formato
          </p>


          <h3 className="text-xl sm:text-3xl font-black mt-3 text-violet-200">
            5vs5
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Inicio
          </p>


          <h3 className="text-xl sm:text-3xl font-black mt-3 text-cyan-200">
            19:00
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Modalidad
          </p>


          <h3 className="text-2xl font-black mt-3 text-pink-200">
            Fearless
          </h3>
        </div>
      </section>


      {/* SCHEDULE */}
      <section
        id="cronograma"
        className="relative z-10 px-4 sm:px-6 lg:px-20 pb-16"
      >
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
            Calendario Oficial
          </p>


          <h3 className="text-3xl sm:text-5xl font-black mt-3">
            Cronograma
          </h3>
        </div>


        <div className="grid lg:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-8 hover:bg-white/10 transition">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xl sm:text-3xl font-black text-pink-200">
                  {item.date}
                </h4>


                <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm">
                  {item.format}
                </div>
              </div>


              <p className="text-base sm:text-xl text-white/80 leading-relaxed">
                {item.matches}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* EQUIPOS */}
      <section
        id="equipos"
        className="relative z-10 px-4 sm:px-6 lg:px-20 pb-16"
      >

        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
            Participantes
          </p>

          <h3 className="text-3xl sm:text-5xl font-black mt-3">
            Equipos
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {teams.map((team, index) => (
            <div
              key={index}
              onClick={() => setOpenTeam(openTeam === team ? null : team)}
              className="relative cursor-pointer rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition text-center">

              {/* LOTO */}
              <div className="absolute top-3 left-3 text-3xl opacity-70">
                🪷
              </div>

              {/* BOTÓN */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenTeam(openTeam === team ? null : team)
                }}
                className="absolute top-3 right-3 text-xs bg-white/10 px-2 py-1 rounded-lg">
                {openTeam === team ? 'Volver' : 'Abrir'}
              </button>

              {/* LOGO */}
              <div className="mb-4 flex justify-center">
                <div
                  className="p-[3px] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40">
                  <div className="bg-[#14081f] rounded-2xl p-2">
                    <Image
                      src={teamLogos[team]}
                      alt={team}
                      width={120}
                      height={120}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
              {/* NOMBRE */}
              <h3 className="text-lg sm:text-2xl font-black text-white break-words">
                {team}
              </h3>

              {/* ROSTER */}
              {openTeam === team && roster[team] && (

                <div className="mt-4">

                  {/* TITULARES */}
                  <div className="space-y-2">

                    {roster[team]
                      .filter(
                        (p) =>
                          p.role &&
                          !p.role.includes('SUPLENTE')
                      )
                      .map((p, idx) => (

                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/10 p-2 rounded-xl gap-2"
                        >

                          {/* PLAYER */}
                          <div className="flex flex-col items-start">

                            {p.captain && (
                              <span className="text-yellow-300 text-xs font-bold">
                                👑 CAPITÁN
                              </span>
                            )}

                            <span className="break-all text-sm">
                              {p.id}
                            </span>

                          </div>

                          {/* ROLE */}
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            {p.role}
                          </span>

                        </div>

                      ))}

                  </div>


                  {/* SEPARACIÓN */}
                  <div className="my-4 border-t border-white/10" />


                  {/* SUPLENTES */}
                  <div className="space-y-2">

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                      Suplentes
                    </div>

                    {roster[team]
                      .filter(
                        (p) =>
                          p.role &&
                          p.role.includes('SUPLENTE')
                      )
                      .map((p, idx) => (

                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/5 border border-white/10 p-2 rounded-xl mt-3 gap-2">

                          {/* PLAYER */}
                          <div className="flex flex-col items-start">

                            {p.captain && (
                              <span className="text-yellow-300 text-xs font-bold">
                                👑 CAPITÁN
                              </span>
                            )}

                            <span className="break-all text-sm">
                              {p.id}
                            </span>

                          </div>

                          {/* ROLE */}
                          <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                            {p.role}
                          </span>

                        </div>

                      ))}

                  </div>

                </div>

              )}

            </div>
          ))}

        </div>

      </section>

      <style jsx global>{`
  html,
  body {
    overflow-x: hidden;
  }
`}</style>

    </div>
  )
}