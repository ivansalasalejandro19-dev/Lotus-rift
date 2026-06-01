'use client'

import { useState } from 'react'

const crystalQuestions = [
  {
    id: 'champion',
    title: '🏆 Campeón del torneo',
    type: 'team'
  },
  {
    id: 'runnerup',
    title: '🥈 Finalista',
    type: 'team'
  },
  {
    id: 'mvp',
    title: '⭐ MVP del torneo',
    type: 'player'
  },
  {
    id: 'mostKills',
    title: '🔥 Jugador con más kills',
    type: 'player'
  },
  {
    id: 'mostAssists',
    title: '🧿 Jugador con más asistencias',
    type: 'player'
  },
  {
    id: 'dragonTeam',
    title: '🐉 Equipo con más dragones',
    type: 'team'
  },
  {
    id: 'surprise',
    title: '⚔️ Equipo sorpresa',
    type: 'team'
  },
  {
    id: 'disappointment',
    title: '💀 Equipo decepción',
    type: 'team'
  }
]

export default function CrystalBall() {
    const [answers, setAnswers] = useState({})
  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
          Crystal Ball
        </p>

        <h2 className="text-5xl font-black">
          Predicciones Globales
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {questions.map((question) => (

          <div
            key={question}
            className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:bg-white/10 transition"
          >
            <h3 className="font-bold text-xl">
              {question}
            </h3>

            <button
  onClick={() =>
    setAnswers({
      ...answers,
      [question.id]: true
    })
  }
  className={`
    mt-6
    w-full
    rounded-xl
    py-4
    font-bold
    transition
    ${
      answers[question.id]
        ? 'bg-gradient-to-r from-pink-500 to-cyan-500'
        : 'bg-white/10 hover:bg-white/20'
    }
  `}
>
  Seleccionar
</button>
          </div>

        ))}

      </div>

    </section>
  )
}