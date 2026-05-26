"use client"

export default function LotusRiftSite() {
const matches = [
  {
    date: "4 JULIO",
    time: "19:00",
    games: [
      ["TBD", "TBD"],
      ["TBD", "TBD"],
      ["TBD", "TBD"],
      ["TBD", "TBD"]
    ]
  },
  {
    date: "5 JULIO",
    time: "19:00",
    games: [
      ["TBD", "TBD"],
      ["TBD", "TBD"],
      ["TBD", "TBD"],
      ["TBD", "TBD"]
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

  <div className="mb-12">
    <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
      CALENDARIO
    </p>
    <h2 className="text-5xl font-black">PARTIDOS</h2>
  </div>

  <div className="space-y-14">

    {matches.map((day, idx) => (
      <div key={idx}>

        {/* FECHA */}
        <h3 className="text-3xl font-bold mb-3 text-white">
          {day.date}
        </h3>

        {/* UNA SOLA HORA POR DÍA */}
        <div className="inline-block mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
          🕒 {day.time}
        </div>

        {/* PARTIDOS */}
        <div className="space-y-4">

          {day.games.map((game, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-zinc-950 hover:border-violet-500/40 transition p-6"
            >

              <div className="flex items-center justify-between gap-6">

                {/* LEFT TEAM */}
                <div className="flex items-center gap-3 w-1/3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    🪷
                  </div>
                  <span className="font-semibold text-white/70">
                    {game[0]}
                  </span>
                </div>

                {/* CENTER VS */}
                <div className="flex flex-col items-center">
                  <span className="text-violet-400 font-black">VS</span>
                </div>

                {/* RIGHT TEAM */}
                <div className="flex items-center justify-end gap-3 w-1/3">
                  <span className="font-semibold text-white/70">
                    {game[1]}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    🪷
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        <h3 className="text-2xl font-black tracking-[0.3em] text-violet-400 mb-3">
          LOTUS RIFT
        </h3>


        <p>Gracias por ver • Staff Lotus Rift</p>
      </footer>
    </div>
  )
}