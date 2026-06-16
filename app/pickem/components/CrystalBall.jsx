'use client'

import { useState } from 'react'
import { champions } from '../data'
import SearchDropdown from './SearchDropdown'

const sections = [

  {
    title: '🏆 Torneo ',
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
        id: 'tournamentMvp',
        title: '⭐ MVP del torneo',
        type: 'player'
      },
      {
        id: 'finalMvp',
        title: '👑 MVP de la final',
        type: 'player'
      }
    ]
  },

  {
    title: '⚔️ Equipos ',
    color: 'text-cyan-300',

    questions: [
      {
        id: 'teamMostKills',
        title: '🔥 Más kills en conjunto ',
        type: 'team'
      },
      {
        id: 'teamLeastDeaths',
        title: '🛡️ Menos muertes ',
        type: 'team'
      },
      {
        id: 'teamMostDragons',
        title: '🐉 Más dragones',
        type: 'team'
      },
      {
        id: 'teamMostBarons',
        title: '🧿 Más Barones',
        type: 'team'
      },
      {
        id: 'teamMostHeralds',
        title: '👁️ Más Heraldos',
        type: 'team'
      },
      {
        id: 'teamMostTowers',
        title: '🏰  Más torres destruidas',
        type: 'team'
      },
      {
        id: 'teamMostFirstBloods',
        title: '🩸 Más primeras sangres en conjunto',
        type: 'team'
      },
      {
        id: 'fastestWin',
        title: '⚡ Partida más rápida ganada',
        type: 'team'
      },
      {
        id: 'longestWin',
        title: '⏱️ Partida más larga ganada',
        type: 'team'
      }
    ]
  },

  {
    title: '👤 Jugadores ',
    color: 'text-violet-300',

    questions: [
      {
        id: 'playerMostKills',
        title: '🔥  Más kills',
        type: 'player'
      },
      {
        id: 'playerMostAssists',
        title: '🧿 Más asistencias ',
        type: 'player'
      },
      {
        id: 'playerMostDeaths',
        title: '💀 Más muertes ',
        type: 'player'
      },
      {
        id: 'bestKDA',
        title: '⚔️ Mejor KDA',
        type: 'player'
      },
      {
        id: 'mostPentas',
        title: '🌸 Más pentakills',
        type: 'player'
      },
      {
        id: 'mostDamage',
        title: '🏹 Más daño total',
        type: 'player'
      },
      {
        id: 'mostCs',
        title: '🌾  Más súbditos (CS)',
        type: 'player'
      },
      {
        id: 'mostGoldPerMinute',
        title: '💰  Más oro por minuto',
        type: 'player'
      },
      {
        id: 'mostFirstBloods',
        title: '🩸 Más first blood',
        type: 'player'
      },
      {
        id: 'mostBaronSteals',
        title: '🧿 Más robos de Barón',
        type: 'player'
      },
      {
        id: 'mostDragonSteals',
        title: '🐉 Más robos de dragón',
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
        type: 'champion'
      },
      {
        id: 'mostPlayed',
        title: '🎮  Más jugado',
        type: 'champion'
      },
      {
        id: 'bestWinrate',
        title: '🏆 Mejor win rate',
        type: 'champion'
      },
      {
        id: 'worstWinrate',
        title: '💀 Peor win rate',
        type: 'champion'
      },
      {
        id: 'champMostKills',
        title: '🔥 Más kills',
        type: 'champion'
      },
      {
        id: 'champMostDeaths',
        title: '☠️ Más muertes',
        type: 'champion'
      },
      {
        id: 'champMostAssists',
        title: '🤝 Más asistencias',
        type: 'champion'
      },
      {
        id: 'firstPentaChampion',
        title: '🌸 Primer campeón con pentakill',
        type: 'champion'
      },
      {
        id: 'mostFlexChampion',
        title: '🎭 Campeón más flex',
        type: 'champion'
      }
    ]
  },

  {
    title: '📊 Estadísticas',
    color: 'text-emerald-300',

    questions: [
      {
        id: 'totalBarons',
        title: '🧿 Barones totales',
        type: 'baronsRange'
      },
      {
        id: 'totalElders',
        title: '🐉 Elders totales',
        type: 'eldersRange'
      },
      {
        id: 'totalTowers',
        title: '🏰 Torres destruidas',
        type: 'towersRange'
      },
      {
        id: 'totalPentas',
        title: '🌸 Pentakills totales',
        type: 'pentasRange'
      },
      {
        id: 'longestGame',
        title: '⏱️ Partida más larga',
        type: 'longestGameRange'
      },
      {
        id: 'totalKills',
        title: '🔥 Kills totales',
        type: 'killsRange'
      }
    ]
  }

]

export default function CrystalBall({
  answers,
  setAnswers,
  locked,
  teams,
  players
}) {

  console.log("PLAYERS PROP:", players)

  const [openDropdown, setOpenDropdown] = useState(null)

  const getOptions = (type) => {

  if (type === 'team') {
    return teams
  }

  if (type === 'player') {
    return players
  }

  if (type === 'champion') {
    return champions
  }

  if (type === 'baronsRange') {
    return [
      '15 - 24',
      '25 - 34',
      '35 - 44',
      '45+'
    ]
  }

  if (type === 'eldersRange') {
    return [
      '0 - 4',
      '5 - 9',
      '10 - 14',
      '15+'
    ]
  }

  if (type === 'towersRange') {
    return [
      '180 - 219',
      '220 - 259',
      '260 - 299',
      '300+'
    ]
  }

  if (type === 'pentasRange') {
    return [
      '0',
      '1',
      '2',
      '3+'
    ]
  }

  if (type === 'longestGameRange') {
    return [
      'Menos de 20:00',
      '20:00 - 22:59',
      '23:00 - 25:59',
      '26:00+'
    ]
  }

  if (type === 'killsRange') {
    return [
      '700 - 899',
      '900 - 1099',
      '1100 - 1299',
      '1300+'
    ]
  }

  return []
}

 return (
  <section className="relative px-8 lg:px-20 pb-24 overflow-visible">

    {/* 🌌 FONDO ORÁCULO (AQUÍ VA LO BONITO) */}
    <div className="absolute inset-0 pointer-events-none">

      {/* glow principal */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[160px] animate-pulse" />

      {/* glow secundario */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />

      {/* partículas mágicas */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-bounce" />
      <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-cyan-200/40 rounded-full animate-ping" />
      <div className="absolute top-1/4 right-20 w-1 h-1 bg-pink-300/30 rounded-full animate-bounce" />

    </div>

    {/* 🧠 CONTENIDO ENCIMA */}
    <div className="relative z-10">

      {/* HEADER */}
      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
          Crystal Ball
        </p>

        <h2 className="text-5xl font-black mt-3">
           PREDICCIONES LOTUS RIFT
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          Predice el futuro del torneo y demuestra que conoces la Grieta mejor que nadie.
        </p>
      </div>

      {/* GRID */}
      {sections.map((section) => (
        <div key={section.title} className="mb-20">

          <div className="mb-8">
            <h3 className={`text-3xl font-black ${section.color}`}>
              {section.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 overflow-visible">

            {section.questions.map((question) => (
              <div
                key={question.id}
                className={`
                  relative
                  overflow-visible
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-5
                  hover:bg-white/10
                  transition
                  ${openDropdown === question.id ? 'z-[9999]' : 'z-0'}
                `}
              >

                <h4 className="font-bold text-base min-h-[48px]">
                  {question.title}
                </h4>

                {question.type === 'text' ? (
                  <input
  disabled={locked}
  type="text"
                    placeholder="Escribir..."
                    value={answers[question.id] || ''}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        [question.id]: e.target.value
                      })
                    }
                    className="mt-4 w-full rounded-xl bg-white/10 p-3 outline-none border border-white/10"
                  />
                ) : (
                  <SearchDropdown
                  disabled={locked}
                    id={question.id}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                    options={getOptions(question.type)}
                    value={answers[question.id]}
                    placeholder="Seleccionar"
                    onChange={(value) => {

  if (locked) return

  setAnswers({
    ...answers,
    [question.id]: value
  })

}}
                  />
                )}

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  </section>
)
}