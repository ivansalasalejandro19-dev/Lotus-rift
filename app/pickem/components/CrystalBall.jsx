'use client'

import { useState } from 'react'
import { teams } from '../data'
import { teams, players } from '../data'

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

        {crystalQuestions.map((question) => (

          <div
            key={question.id}
            className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:bg-white/10 transition"
          >
            <h3 className="font-bold text-xl">
  {question.title}
</h3>

           <select
  className="mt-6 w-full bg-white/10 rounded-xl p-4"
  value={answers[question.id] || ''}
  onChange={(e) =>
    setAnswers({
      ...answers,
      [question.id]: e.target.value
    })
  }
>
  <option value="">
    Seleccionar
  </option>

  {(question.type === 'team' ? teams : players).map((option) => (
    <option
      key={option}
      value={option}
    >
      {option}
    </option>
  ))}
</select>
          </div>

        ))}

      </div>

    </section>
  )
}