'use client'

export default function Achievements() {

  const achievements = [
    '🏆 Lotus Prophet',
    '⭐ MVP Oracle',
    '🐉 Dragon Master',
    '⚔️ Rift Analyst',
    '👑 Perfect Bracket',
    '🌸 Crystal Vision'
  ]

  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">

        <p className="uppercase tracking-[0.3em] text-yellow-300 text-sm">
          Achievements
        </p>

        <h2 className="text-5xl font-black">
          Logros
        </h2>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {achievements.map((achievement) => (

          <div
            key={achievement}
            className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/5 p-8"
          >
            <h3 className="font-black text-xl">
              {achievement}
            </h3>
          </div>

        ))}

      </div>

    </section>
  )
}