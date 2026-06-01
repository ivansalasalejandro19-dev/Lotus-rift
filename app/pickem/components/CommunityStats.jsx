'use client'

export default function CommunityStats() {

  const stats = [
    {
      title: '🏆 Campeón',
      data: [
        { name: 'T502', percent: 42 },
        { name: 'HaTsu', percent: 23 },
        { name: 'Rokurominos', percent: 17 }
      ]
    },
    {
      title: '⭐ MVP',
      data: [
        { name: 'Zen#Odev', percent: 31 },
        { name: 'Brocoli', percent: 22 },
        { name: 'Vanderrr', percent: 15 }
      ]
    }
  ]

  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
          Comunidad
        </p>

        <h2 className="text-5xl font-black">
          Predicciones Globales
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="font-black text-2xl mb-8">
              {item.title}
            </h3>

            <div className="space-y-4">

              {item.data.map((entry) => (

                <div key={entry.name}>

                  <div className="flex justify-between mb-2">
                    <span>{entry.name}</span>
                    <span>{entry.percent}%</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500"
                      style={{
                        width: `${entry.percent}%`
                      }}
                    />
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