'use client'

export default function LotusTracker() {

  const tracker = [
    {
      emoji: '🗼',
      value: 0,
      label: ' Torres destruidas'
    },
    {
      emoji: '🔥',
      value: 0,
      label: 'Pentakills'
    },
    {
      emoji: '🐉',
      value: 0,
      label: 'Elder Dragons'
    },
    {
      emoji: '🧿',
      value: 0,
      label: 'Barones Nashor'
    },
    {
      emoji: '⏱️',
      value: '00:00',
      label: 'Partida más larga'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-5 pb-32">

      <div className="flex items-center gap-3 mb-12">

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/30 to-fuchsia-500/10 border border-pink-500/20 flex items-center justify-center text-2xl">
          📊
        </div>

        <div>

          <p className="uppercase tracking-[0.35em] text-pink-300 text-xs font-bold">
            ESTADÍSTICAS
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            LOTUS TRACKER
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

        {tracker.map((item) => (

          <div
            key={item.label}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-pink-500/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              text-center
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-pink-500/30
              hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
            "
          >

            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500" />

            <div className="text-4xl md:text-5xl mb-4">
              {item.emoji}
            </div>

            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-200 via-pink-300 to-fuchsia-400 bg-clip-text text-transparent">
              {item.value}
            </div>

            <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-zinc-400">
              {item.label}
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/[0.03] to-transparent pointer-events-none" />

          </div>

        ))}

      </div>

    </section>
  )
}
