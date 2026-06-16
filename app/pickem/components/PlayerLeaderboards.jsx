'use client'

export default function PlayerLeaderboards() {

  const leaderboards = [
    {
      title: 'MÁS DAÑO',
      icon: '💥',
      players: [
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' }
      ]
    },
    {
      title: 'MEJOR KDA',
      icon: '⚔️',
      players: [
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' }
      ]
    },
    {
      title: 'MÁS KILLS',
      icon: '💀',
      players: [
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' }
      ]
    },
    {
      title: 'MÁS ASISTENCIAS',
      icon: '🎯',
      players: [
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' }
      ]
    },
    {
      title: 'MENOS MUERTES',
      icon: '🛡️',
      players: [
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' },
        { name: 'TBD', value: '0' }
      ]
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-5 pb-32">

      <div className="mb-12">

        <p className="uppercase tracking-[0.35em] text-pink-300 text-xs font-bold">
            Leaderboards
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          ESTADÍSTICAS DE JUGADORES
        </h2>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {leaderboards.map((board) => (

          <div
            key={board.title}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-pink-500/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:border-pink-500/30
              hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
            "
          >

            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500" />

            <div className="flex items-center gap-3 mb-6">

              <div className="text-3xl">
                {board.icon}
              </div>

              <div>

                <h3 className="font-black text-xl">
                  {board.title}
                </h3>

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                   TOP 3
                </p>

              </div>

            </div>

            <div className="space-y-3">

              {board.players.map((player, index) => (

                <div
                  key={player.name}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white/[0.04]
                    border
                    border-white/5
                    p-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="text-xl">

                      {index === 0 && '🥇'}
                      {index === 1 && '🥈'}
                      {index === 2 && '🥉'}

                    </div>

                    <div>

                      <p className="font-semibold">
                        {player.name}
                      </p>

                      <p className="text-xs text-zinc-500">
                        RANK #{index + 1}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="font-black text-pink-300 text-lg">
                      {player.value}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}