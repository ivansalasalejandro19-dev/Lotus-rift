'use client'

export default function LotusTracker() {

  const tracker = [
    {
      emoji: '🐉',
      value: 7,
      label: 'Elder Dragons'
    },
    {
      emoji: '🧿',
      value: 34,
      label: 'Barons'
    },
    {
      emoji: '🔥',
      value: 2,
      label: 'Pentakills'
    },
    {
      emoji: '⚔️',
      value: 487,
      label: 'Kills'
    }
  ]

  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
          Live Tournament Data
        </p>

        <h2 className="text-5xl font-black">
          Lotus Tracker
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {tracker.map((item) => (

          <div
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center"
          >

            <div className="text-5xl mb-4">
              {item.emoji}
            </div>

            <div className="text-5xl font-black text-pink-300">
              {item.value}
            </div>

            <div className="mt-4 text-white/60">
              {item.label}
            </div>

          </div>

        ))}

      </div>

    </section>
  )
}