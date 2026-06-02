'use client'

import { useState } from 'react'
import { teamNames, playerNames } from '../data'
import SearchDropdown from './SearchDropdown'

const sections = [

  {
    title: '🏆 Torneo',
    color: 'text-pink-300',

    questions: [
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
  },

  {
    title: '⚔️ Equipos',
    color: 'text-cyan-300',

    questions: [
      {
        id: 'dragonTeam',
        title: '🐉 Más dragones',
        type: 'team'
      },
      {
        id: 'baronTeam',
        title: '🧿 Más barones',
        type: 'team'
      },
      {
        id: 'towerTeam',
        title: '🏰 Más torres',
        type: 'team'
      },
      {
        id: 'killsTeam',
        title: '🔥 Más kills',
        type: 'team'
      },
      {
        id: 'leastDeaths',
        title: '🛡️ Menos muertes',
        type: 'team'
      },
      {
        id: 'bestRecord',
        title: '🎯 Más victorias',
        type: 'team'
      }
    ]
  },

  {
    title: '👤 Jugadores',
    color: 'text-violet-300',

    questions: [
      {
        id: 'mostKills',
        title: '🔥 Más kills',
        type: 'player'
      },
      {
        id: 'mostAssists',
        title: '🧿 Más asistencias',
        type: 'player'
      },
      {
        id: 'bestKDA',
        title: '⚔️ Mejor KDA',
        type: 'player'
      },
      {
        id: 'mostDeaths',
        title: '💀 Más muertes',
        type: 'player'
      },
      {
        id: 'mostMVPs',
        title: '👑 Más MVPs',
        type: 'player'
      },
      {
        id: 'firstPenta',
        title: '🌸 Primer Pentakill',
        type: 'player'
      },
      {
        id: 'mostDamage',
        title: '🏹 Más daño',
        type: 'player'
      },
      {
        id: 'mostVision',
        title: '👁️ Más visión',
        type: 'player'
      }
    ]
  },

  {
    title: '🎮 Campeones',
    color: 'text-yellow-300',

    questions: [
      {
        id: 'mostBanned',
        title: '🚫 Más baneado',
        type: 'text'
      },
      {
        id: 'mostPlayed',
        title: '🎮 Más jugado',
        type: 'text'
      },
      {
        id: 'bestWinrate',
        title: '🏆 Mejor Win Rate',
        type: 'text'
      },
      {
        id: 'champKills',
        title: '🔥 Más kills',
        type: 'text'
      },
      {
        id: 'champDeaths',
        title: '💀 Más muertes',
        type: 'text'
      },
      {
        id: 'surpriseChampion',
        title: '🌸 Campeón sorpresa',
        type: 'text'
      }
    ]
  }

]

export default function CrystalBall() {

  const [openDropdown, setOpenDropdown] = useState(null)

  const [answers, setAnswers] = useState({})

  const getOptions = (type) => {
    if (type === 'team') {
      return teamNames
    }

    if (type === 'player') {
      return playerNames
    }

    return []
  }

  return (

    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
          Crystal Ball
        </p>

        <h2 className="text-5xl font-black mt-3">
          Predicciones Lotus Rift
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          Predice el futuro del torneo y demuestra que conoces
          el Rift mejor que nadie.
        </p>

      </div>

      {sections.map((section) => (

        <div
          key={section.title}
          className="mb-20"
        >

          <div className="mb-8">

            <h3 className={`text-3xl font-black ${section.color}`}>
              {section.title}
            </h3>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 overflow-visible">

            {section.questions.map((question) => (

              
              <div
  key={question.id}
  className="
    relative
    overflow-visible
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

                <h4 className="font-bold text-base min-h-[48px]">
                  {question.title}
                </h4>

                {question.type === 'text' ? (

                  <input
                    type="text"
                    placeholder="Escribir..."
                    value={answers[question.id] || ''}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        [question.id]: e.target.value
                      })
                    }
                    className="
  mt-4
  w-full
  rounded-xl
  bg-white/10
  p-3
  outline-none
  border
  border-white/10
"
                  />

                ) : (

                 <SearchDropdown
  id={question.id}
  openDropdown={openDropdown}
  setOpenDropdown={setOpenDropdown}
  options={getOptions(question.type)}
  value={answers[question.id]}
  placeholder="Seleccionar"
  onChange={(value) =>
    setAnswers({
      ...answers,
      [question.id]: value
    })
  }
/>
                )}

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>

  )
}