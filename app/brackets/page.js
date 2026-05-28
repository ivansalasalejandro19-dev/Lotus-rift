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


      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_45%)] pointer-events-none" />


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


      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">


        <div className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />


        <div className="max-w-3xl relative z-10">


          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-sm tracking-[0.25em] text-violet-300 mb-8">
            🪷 INSCRIPCIONES ABIERTAS
          </div>


          <h1 className="text-7xl md:text-8xl font-black leading-none mb-6">
            <span className="text-white">
              Lotus
            </span>


            <br />


            <span className="bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              Rift
            </span>
          </h1>


          <p className="text-zinc-400 text-lg max-w-xl mb-10">
            Unite a la comunidad de Discord y disfruta del bracket en vivo.
          </p>


          <div className="flex items-center gap-4">


            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-400 font-bold shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:scale-[1.02] transition">
              Entrar al bracket oficial
            </button>


            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 transition">
              Discord
            </button>


          </div>


        </div>


      </section>


      {/* INFO CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


          {[
            ["Equipos", "16"],
            ["Formato", "5v5"],
            ["Inicio", "19:00"],
            ["Modalidad", "Fearless"]
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_35px_rgba(168,85,247,0.08)]"
            >
              <p className="text-zinc-500 tracking-[0.25em] uppercase text-sm mb-3">
                {item[0]}
              </p>


              <h3 className="text-4xl font-black">
                {item[1]}
              </h3>
            </div>
          ))}


        </div>


      </section>


      {/* SCHEDULE */}
      <section id="schedule" className="max-w-7xl mx-auto px-6 py-24">


        <div className="mb-12">
          <p className="text-violet-400 tracking-[0.3em] text-sm mb-3">
            CALENDARIO
          </p>


          <h2 className="text-5xl font-black">
            PARTIDOS
          </h2>
        </div>


        <div className="space-y-14">


          {matches.map((day, idx) => (
            <div key={idx}>


              {/* FECHA */}
              <h3 className="text-3xl font-bold mb-3 text-white">
                {day.date}
              </h3>


              {/* HORA */}
              <div className="inline-block mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                🕒 {day.time}
              </div>


              {/* GAMES */}
              <div className="space-y-4">


                {day.games.map((game, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-white/10 bg-zinc-950 hover:border-violet-500/40 transition p-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
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


                      {/* CENTER */}
                      <div className="flex flex-col items-center">
                        <span className="text-violet-400 font-black">
                          VS
                        </span>
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
        className="relative py-28 px-6 overflow-hidden border-y border-violet-500/10"
      >


        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]" />


        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-3xl" />


        <div className="max-w-[1700px] mx-auto relative z-10">


          {/* TITLE */}
          <div className="mb-20 text-center">


            <p className="text-violet-400 tracking-[0.4em] text-sm mb-4">
              LOTUS ARENA
            </p>


            <h2 className="text-6xl font-black bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              BRACKET
            </h2>


            <div className="mt-6 w-40 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />


          </div>


          <div className="overflow-x-auto pb-10">


            <div className="min-w-[1450px] flex items-center justify-center gap-16">


              {/* OCTAVOS */}
              <div className="flex flex-col justify-center">


                <h3 className="mb-8 text-center text-zinc-400 tracking-[0.3em] font-bold">
                  OCTAVOS
                </h3>


                <div className="space-y-6">


                  {[1,2,3,4,5,6,7,8].map((item) => (
                    <div
                      key={item}
                      className="w-[260px] rounded-2xl border border-violet-500/10 bg-black/40 backdrop-blur-xl p-5 hover:border-violet-400/40 transition shadow-[0_0_25px_rgba(168,85,247,0.08)]"
                    >


                      <div className="space-y-3">


                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-zinc-200">
                            TBD
                          </span>


                          <span className="text-violet-400 text-xs">
                            🪷
                          </span>
                        </div>


                        <div className="h-px bg-white/5" />


                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-zinc-200">
                            TBD
                          </span>


                          <span className="text-violet-400 text-xs">
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


                <h3 className="mb-8 text-center text-zinc-400 tracking-[0.3em] font-bold">
                  CUARTOS
                </h3>


                <div className="space-y-20">


                  {[1,2,3,4].map((item) => (
                    <div className="relative" key={item}>


                      <div className="absolute -left-10 top-1/2 w-10 h-px bg-violet-500/30" />


                      <div className="w-[280px] rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-black/60 backdrop-blur-xl p-6 shadow-[0_0_35px_rgba(168,85,247,0.12)]">


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


                <h3 className="mb-8 text-center text-zinc-400 tracking-[0.3em] font-bold">
                  SEMIFINALES
                </h3>


                <div className="space-y-44">


                  {[1,2].map((item) => (
                    <div className="relative" key={item}>


                      <div className="absolute -left-12 top-1/2 w-12 h-px bg-violet-500/40" />


                      <div className="w-[300px] rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-violet-500/10 backdrop-blur-xl p-7 shadow-[0_0_45px_rgba(168,85,247,0.18)]">


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
              <div className="flex flex-col justify-center items-center">


                <h3 className="mb-8 text-center text-pink-300 tracking-[0.3em] font-bold">
                  GRAND FINAL
                </h3>


                <div className="relative">


                  {/* GLOW */}
                  <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl scale-125" />


                  <div className="relative w-[340px] rounded-[2rem] border border-pink-400/40 bg-gradient-to-br from-pink-500/20 via-violet-500/10 to-black backdrop-blur-2xl p-10 shadow-[0_0_80px_rgba(168,85,247,0.35)]">


                    <div className="text-center mb-8">


                      <p className="text-pink-300 tracking-[0.3em] text-sm mb-3">
                        LOTUS RIFT
                      </p>


                      <h4 className="text-4xl font-black">
                        FINAL
                      </h4>


                    </div>


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


                    <div className="mt-8 text-center text-zinc-400 text-sm tracking-[0.2em]">
                      THE LOTUS BLOOMS HERE
                    </div>


                  </div>


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


        <p>
          Gracias por ver • Staff Lotus Rift
        </p>


      </footer>


    </div>
  )
}