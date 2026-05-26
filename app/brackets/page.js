"use client"

export default function LotusRiftSite() {
  const matches = [
    {
      date: '4 JULIO',
      games: [
        ['TBD', 'TBD'],
        ['TBD', 'TBD'],
        ['TBD', 'TBD'],
        ['TBD', 'TBD']
      ]
    },
    {
      date: '5 JULIO',
      games: [
        ['TBD', 'TBD'],
        ['TBD', 'TBD'],
        ['TBD', 'TBD'],
        ['TBD', 'TBD']
      ]
    }
  ]


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_45%)] pointer-events-none" />


      {/* HEADER */}
      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.3em] text-violet-400">
              LOTUS RIFT
            </h1>


            <p className="text-xs text-zinc-400 tracking-[0.4em]">
              ESPORTS TOURNAMENT
            </p>
          </div>


          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#schedule" className="hover:text-violet-400 transition">
              Partidos
            </a>


            <a href="#bracket" className="hover:text-violet-400 transition">
              Bracket
            </a>


            <a href="#teams" className="hover:text-violet-400 transition">
              Equipos
            </a>


            <a href="#rules" className="hover:text-violet-400 transition">
              Reglas
            </a>
          </nav>
        </div>
      </header>


      {/* SCHEDULE */}
      <section id="schedule" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
              CALENDARIO
            </p>


            <h2 className="text-5xl font-black">PARTIDOS</h2>
          </div>
        </div>


        <div className="space-y-10">
          {matches.map((day, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mb-5 text-zinc-100">
                {day.date}
              </h3>


              <div className="space-y-5">
                {day.games.map((game, i) => (
                  <div
                    key={i}
                    className="group rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-950 hover:border-violet-500/50 transition p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* MATCH */}
                      <div className="flex items-center justify-center gap-5 w-full">
                        
                        {/* TEAM 1 */}
                        <div className="flex items-center gap-4 flex-1 justify-end">
                          <div className="text-right">
                            <p className="text-xs text-zinc-500 mb-1">
                              TEAM 1
                            </p>


                            <h3 className="font-bold text-lg md:text-2xl">
                              {game[0]}
                            </h3>
                          </div>


                          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20" />
                        </div>


                        {/* SCORE CENTER */}
                        <div className="relative">
                          <div className="px-6 py-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                              <span className="text-2xl font-black text-white">
                                ?
                              </span>


                              <span className="text-zinc-600 font-bold">
                                :
                              </span>


                              <span className="text-2xl font-black text-white">
                                ?
                              </span>
                            </div>
                          </div>


                          {/* ANTI SPOILER */}
                          <div className="absolute inset-0 rounded-2xl bg-black/95 flex items-center justify-center opacity-100 hover:opacity-0 transition duration-500 cursor-pointer">
                            <span className="text-xs tracking-[0.25em] text-violet-300">
                              MOSTRAR RESULTADO
                            </span>
                          </div>
                        </div>


                        {/* TEAM 2 */}
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20" />


                          <div>
                            <p className="text-xs text-zinc-500 mb-1">
                              TEAM 2
                            </p>


                            <h3 className="font-bold text-lg md:text-2xl">
                              {game[1]}
                            </h3>
                          </div>
                        </div>
                      </div>


                      {/* INFO */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                          19:00
                        </div>


                        <div className="px-4 py-2 rounded-xl bg-violet-500/15 text-violet-300 border border-violet-500/20">
                          PRÓXIMAMENTE
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* BRACKET */}
      <section
        id="bracket"
        className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
              ELIMINATORIAS
            </p>


            <h2 className="text-5xl font-black">BRACKET</h2>
          </div>


          <div className="overflow-x-auto">
            <div className="min-w-[1200px] grid grid-cols-4 gap-10">


              {/* OCTAVOS */}
              <div>
                <h3 className="mb-6 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  OCTAVOS
                </h3>


                <div className="space-y-5">
                  {[1,2,3,4,5,6,7,8].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-zinc-900 border border-white/10 p-5 hover:border-violet-500/40 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">TBD</span>


                        <div className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-sm font-bold">
                          ? : ?
                        </div>


                        <span className="font-semibold">TBD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* CUARTOS */}
              <div>
                <h3 className="mb-6 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  CUARTOS
                </h3>


                <div className="space-y-20 mt-12">
                  {[1,2,3,4].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-zinc-900 border border-violet-500/20 p-6 shadow-[0_0_20px_rgba(168,85,247,0.12)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">TBD</span>


                        <div className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-sm font-bold">
                          ? : ?
                        </div>


                        <span className="font-semibold">TBD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* SEMIS */}
              <div>
                <h3 className="mb-6 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  SEMIFINALES
                </h3>


                <div className="space-y-40 mt-32">
                  {[1,2].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-zinc-900 border border-violet-500/30 p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">TBD</span>


                        <div className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-sm font-bold">
                          ? : ?
                        </div>


                        <span className="font-semibold">TBD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* FINAL */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-6 text-center font-bold text-zinc-400 tracking-[0.2em]">
                  FINAL
                </h3>


                <div className="rounded-3xl border border-violet-500/40 bg-gradient-to-br from-violet-500/10 to-black p-10 text-center shadow-[0_0_50px_rgba(168,85,247,0.35)]">
                  <p className="text-sm tracking-[0.3em] text-violet-300 mb-4">
                    GRAN FINAL
                  </p>


                  <div className="flex items-center justify-center gap-6 mb-5">
                    <span className="text-2xl font-black">TBD</span>


                    <div className="px-4 py-2 rounded-xl bg-black/50 border border-white/10 font-black">
                      ? : ?
                    </div>


                    <span className="text-2xl font-black">TBD</span>
                  </div>


                  <p className="text-zinc-500">
                    BO5 • LOTUS RIFT CHAMPIONSHIP
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


      {/* TEAMS */}
      <section id="teams" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
            COMPETIDORES
          </p>


          <h2 className="text-5xl font-black">16 EQUIPOS</h2>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-zinc-950 hover:border-violet-500/50 transition p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-5 group-hover:scale-110 transition" />


              <p className="font-semibold">TBD</p>
            </div>
          ))}
        </div>
      </section>


      {/* RULES */}
      <section
        id="rules"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="mb-12">
          <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
            REGLAMENTO
          </p>


          <h2 className="text-5xl font-black">REGLAS</h2>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Prohibido uso de hacks o exploits.',
            'Respeto obligatorio entre jugadores.',
            'Los horarios deben cumplirse.',
            'Las decisiones del staff son finales.'
          ].map((rule, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-7"
            >
              <p className="text-zinc-300">{rule}</p>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        <h3 className="text-2xl font-black tracking-[0.3em] text-violet-400 mb-3">
          LOTUS RIFT
        </h3>


        <p>Gracias por leer • Staff Lotus Rift</p>
      </footer>
    </div>
  )
}