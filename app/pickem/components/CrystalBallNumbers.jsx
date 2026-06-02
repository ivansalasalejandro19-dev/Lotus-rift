'use client'

import { useState } from 'react'

export default function CrystalBallNumbers() {

  const [values, setValues] = useState({})

  const stats = [
    {
      id: 'elder',
      icon: '🐉',
      name: 'Elder Dragons'
    },
    {
      id: 'barons',
      icon: '🧿',
      name: 'Barons'
    },
    {
      id: 'pentakills',
      icon: '🔥',
      name: 'Pentakills'
    },
    {
      id: 'kills',
      icon: '⚔️',
      name: 'Kills Totales'
    },
    {
      id: 'towers',
      icon: '🏰',
      name: 'Torres Destruidas'
    },
    {
      id: 'games',
      icon: '🎮',
      name: 'Partidas Jugadas'
    },
    {
      id: 'reverse',
      icon: '🔄',
      name: 'Reverse Sweeps'
    },
    {
      id: 'bans',
      icon: '🚫',
      name: 'Baneos Totales'
    },
    {
      id: 'unique',
      icon: '🌸',
      name: 'Picks Únicos'
    },
    {
      id: 'mvps',
      icon: '👑',
      name: 'MVPs Entregados'
    }
  ]

  return (

    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-violet-300 text-sm">
          Crystal Ball Stats
        </p>

        <h2 className="text-5xl font-black mt-3">
          Predicciones Numéricas
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          Adivina las estadísticas globales que tendrá Lotus Rift
          durante todo el torneo.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

        {stats.map((stat) => (

          <div
            key={stat.id}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5
              hover:bg-white/10
              transition
            "
          >

            <div className="text-center">

              <div className="text-3xl mb-3">
                {stat.icon}
              </div>

              <h3 className="font-bold text-sm min-h-[40px]">
                {stat.name}
              </h3>

              <input
  type="number"
  min="0"
  placeholder="0"
  value={values[stat.id] || ''}
  onChange={(e) =>
    setValues({
      ...values,
      [stat.id]: Number(e.target.value)
    })
  }
  className="
    mt-5
    w-full
    rounded-xl
    bg-white/10
    border
    border-white/10
    p-4
    text-center
    text-3xl
    font-black
    text-pink-300
    outline-none
  "
/>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}