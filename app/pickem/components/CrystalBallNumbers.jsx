'use client'

export default function CrystalBallNumbers() {
  const stats = [
    '🐉 Elder Dragons',
    '🧿 Barons',
    '🔥 Pentakills',
    '⚔️ Kills Totales',
    '🏰 Torres Destruidas',
    '🎮 Partidas Jugadas'
  ]

  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-violet-300 text-sm">
          Crystal Ball Stats
        </p>

        <h2 className="text-5xl font-black">
          Predicciones Numéricas
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {stats.map((stat) => (

          <div
            key={stat}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="font-bold text-xl mb-6">
              {stat}
            </h3>

            <div className="text-center">

              <div className="text-5xl font-black text-pink-300">
                0
              </div>

              <div className="flex justify-center gap-4 mt-6">

                <button className="w-12 h-12 rounded-full bg-white/10">
                  -
                </button>

                <button className="w-12 h-12 rounded-full bg-white/10">
                  +
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}