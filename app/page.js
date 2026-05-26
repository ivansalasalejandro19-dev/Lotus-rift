'use client'

import { useState } from "react"
export default function LotusRiftTournamentPage() {

  const [openTeam, setOpenTeam] = useState(null)
const [teamLogos, setTeamLogos] = useState({})

const roster = {
  Liz: [
    { id: 'Ryn#没惩戒', role: 'ADC', captain: true },
    { id: 'RAGNAROKt#6555', role: 'TOP' },
    { id: 'K Λ Mønspeet#8887', role: 'MID' },
    { id: '愛 Dαı#没蓝了', role: 'SUP' },
    { id: 'Zen#Odev', role: 'JUNGLA' }
  ]
}

  const tournamentInfo = {
    name: '🪷 LOTUS RIFT 🪷',
    subtitle: 'Torneo LAN',
    description: '',
    season: 'Season 1',
    viewers: '0',
    players: '16 Equipos',
    status: 'INSCRIPCIONES ABIERTAS',
    startTime: '19:00 PM MX'
  }


  // =============================
  // EDITÁ TODO DESDE ACÁ
  // =============================


  const bracketLink = 'https://tus-brackets.com'
  const discordLink = 'https://discord.gg/tu-server'


  const teams = [
    'ryn pro',
    'Equipo 2',
    'Equipo 3',
    'Equipo 4',
    'Equipo 5',
    'Equipo 6',
    'Equipo 7',
    'Equipo 8',
    'Equipo 9',
    'Equipo 10',
    'Equipo 11',
    'Equipo 12',
    'Equipo 13',
    'Equipo 14',
    'Equipo 15',
    'Equipo 16'
  ]


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


  const matches = [
    {
      teamA: 'Equipo 1',
      teamB: 'Equipo 2',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'Equipo 3',
      teamB: 'Equipo 4',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'Equipo 5',
      teamB: 'Equipo 6',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'Equipo 7',
      teamB: 'Equipo 8',
      score: '0 - 0',
      status: 'Pendiente'
    }
  ]


  const leaderboard = [
    { name: 'Equipo 1', points: 0 },
    { name: 'Equipo 2', points: 0 },
    { name: 'Equipo 3', points: 0 },
    { name: 'Equipo 4', points: 0 }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-cyan-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>


      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.4em] text-pink-300">
            {tournamentInfo.name}
          </h1>


          <p className="text-pink-100/60 mt-2 text-sm tracking-[0.25em] uppercase">
            {tournamentInfo.subtitle}
          </p>
        </div>


        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#cronograma"
            className="px-5 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Fechas
          </a>


          <a
            href="#equipos"
            className="px-5 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Equipos
          </a>


          <a
            href={bracketLink}
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 font-bold hover:scale-105 transition shadow-xl shadow-pink-500/20"
          >
            Resurrección
          </a>
        </div>
      </header>


      {/* HERO */}
      <section className="relative z-10 px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-pink-500/20 bg-pink-500/10 mb-8 backdrop-blur-xl">
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />


            <span className="uppercase tracking-[0.3em] text-sm text-pink-100">
              {tournamentInfo.status}
            </span>
          </div>


          <h2 className="text-7xl md:text-8xl font-black leading-none">
            Lotus
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300">
              Rift
            </span>
          </h2>


          <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
            Un torneo competitivo inspirado en la energía espiritual,
            flores de loto y dimensiones astrales.
          </p>


          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href={bracketLink}
              target="_blank"
              className="px-8 py-4 rounded-3xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 font-black text-lg hover:scale-105 transition shadow-2xl shadow-pink-500/30"
            >
              Entrar al Portal
            </a>


            <a
              href={discordLink}
              target="_blank"
              className="px-8 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              Discord
            </a>
          </div>
        </div>


        <div className="relative flex justify-center items-center">
          <div className="absolute w-[450px] h-[450px] rounded-full border border-pink-300/10 animate-pulse" />


          <div className="relative w-[370px] h-[370px] rounded-full border border-white/10 bg-gradient-to-br from-pink-400/10 to-violet-500/20 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_100px_rgba(236,72,153,0.3)]">
            <div className="text-center px-6">
              <div className="text-8xl animate-pulse">🪷</div>


              <h3 className="text-4xl font-black mt-5 text-pink-200">
                Spirit Realm
              </h3>


              <p className="mt-4 text-white/60 leading-relaxed">
                16 equipos lucharán por despertar el poder del loto.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="relative z-10 px-8 lg:px-20 grid md:grid-cols-4 gap-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Equipos
          </p>


          <h3 className="text-5xl font-black mt-3 text-pink-200">
            16
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Formato
          </p>


          <h3 className="text-3xl font-black mt-3 text-violet-200">
            5v5
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Inicio
          </p>


          <h3 className="text-3xl font-black mt-3 text-cyan-200">
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
      <section id="cronograma" className="relative z-10 px-8 lg:px-20 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
            Calendario Oficial
          </p>


          <h3 className="text-5xl font-black mt-3">
            Cronograma
          </h3>
        </div>


        <div className="grid lg:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-3xl font-black text-pink-200">
                  {item.date}
                </h4>


                <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm">
                  {item.format}
                </div>
              </div>


              <p className="text-xl text-white/80 leading-relaxed">
                {item.matches}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* EQUIPOS */}
      <section id="equipos" className="relative z-10 px-8 lg:px-20 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
            Participantes
          </p>


          <h3 className="text-5xl font-black mt-3">
            Equipos
          </h3>

          {openTeam === team && roster[team] && (
  <div className="mt-4 space-y-2">
    {roster[team].map((p, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between bg-white/10 p-2 rounded-xl"
      >
        <span>
          {p.captain && '👑 '}
          {p.id}
        </span>

        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
          {p.role}
        </span>
      </div>
    ))}
  </div>
)}

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              onClick={() => setOpenTeam(openTeam === team ? null : team)}
className="cursor-pointer"
            className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition text-center"
            >
             <div className="absolute top-3 left-3">
  {teamLogos[team] && (
    <img
      src={teamLogos[team]}
      className="w-10 h-10 rounded-xl object-cover"
    />
  )}
</div>

<button
  onClick={(e) => {
    e.stopPropagation()
    setOpenTeam(openTeam === team ? null : team)
  }}
  className="absolute top-3 right-3 text-xs bg-white/10 px-2 py-1 rounded-lg"
>
  {openTeam === team ? 'Volver' : 'Abrir'}
</button>

              <div className="text-5xl mb-4">🪷</div>


              <h4 className="text-2xl font-black text-white">
                {team}
              </h4>


              <p className="text-white/40 uppercase tracking-widest text-xs mt-3">
                Lotus Team
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* MATCHES */}
      <section className="relative z-10 px-8 lg:px-20 pb-24">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
              Editable
            </p>


            <h3 className="text-5xl font-black mt-3">
              Partidos
            </h3>
          </div>


          <div className="px-5 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm backdrop-blur-xl">
            Editá equipos y resultados manualmente
          </div>
        </div>


        <div className="grid gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-400/20 to-violet-500/20 flex items-center justify-center text-3xl shadow-lg shadow-pink-500/10">
                  🌸
                </div>


                <div>
                  <h4 className="text-3xl font-black text-white">
                    {match.teamA}
                    <span className="mx-3 text-white/30">vs</span>
                    {match.teamB}
                  </h4>


                  <p className="text-white/50 mt-2 uppercase tracking-widest text-sm">
                    {match.status}
                  </p>
                </div>
              </div>


              <div className="text-5xl font-black text-pink-200">
                {match.score}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* RESURRECTION PORTAL */}
      <section className="relative z-10 px-8 lg:px-20 pb-32">
        <div className="rounded-[2.8rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-violet-500/10 backdrop-blur-3xl p-14 text-center shadow-[0_0_100px_rgba(236,72,153,0.2)] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]" />


          <div className="relative z-10">
            <div className="text-8xl mb-8 animate-pulse">🪷</div>


            <p className="uppercase tracking-[0.4em] text-pink-300 text-sm">
              Portal de Resurrección
            </p>


            <h3 className="text-6xl font-black mt-5">
              Brackets en Vivo
            </h3>


            <p className="mt-8 text-white/65 max-w-3xl mx-auto text-xl leading-relaxed">
              Conectá este portal a Challonge, Battlefy, Toornament,
              Start.gg o cualquier sistema de brackets online.
            </p>


            <a
              href={bracketLink}
              target="_blank"
              className="inline-flex mt-12 px-12 py-6 rounded-3xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-2xl font-black hover:scale-105 transition shadow-2xl shadow-pink-500/30"
            >
              Entrar al Portal Astral
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}