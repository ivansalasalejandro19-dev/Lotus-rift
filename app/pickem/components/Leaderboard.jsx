'use client'

export default function Leaderboard() {

  const players = [
    {
      name: 'liz',
      points: 420
    },
    {
      name: 'ryn',
      points: 390
    },
    {
      name: 'pedrito',
      points: 370
    }
  ]

  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">

        <p className="uppercase tracking-[0.3em] text-yellow-300 text-sm">
          Ranking
        </p>

        <h2 className="text-5xl font-black">
          Lotus Leaderboard
        </h2>

      </div>

      <div className="space-y-4">

        {players.map((player, index) => (

          <div
            key={player.name}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 flex justify-between items-center"
          >

            <div className="flex gap-4 items-center">

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center font-black">
                #{index + 1}
              </div>

              <div>
                <div className="font-black">
                  {player.name}
                </div>
              </div>

            </div>

            <div className="text-3xl font-black text-yellow-300">
              {player.points}
            </div>

          </div>

        ))}

      </div>

    </section>
  )
}