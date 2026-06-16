'use client'

import { useState } from 'react'
import { champions } from '../data'
import SearchDropdown from './SearchDropdown'

const sections = [

  {
    title: '🏆 TORNEO ',
    color: 'text-pink-300',

    questions: [
      {
        id: 'champion',
        title: '🏆 CAMPEÓN DEL TORNEO',
        type: 'team'
      },
      {
        id: 'runnerup',
        title: '🥈 FINALISTA',
        type: 'team'
      },
      {
        id: 'tournamentMvp',
        title: '⭐  MVP DEL TORNEO',
        type: 'player'
      },
      {
        id: 'finalMvp',
        title: '👑 MVP DE LA FINAL',
        type: 'player'
      }
    ]
  },

  {
    title: '⚔️ EQUIPOS ',
    color: 'text-cyan-300',

    questions: [
      {
        id: 'teamMostKills',
        title: '🔥 MÁS KILLS EN CONJUNTO',
        type: 'team'
      },
      {
        id: 'teamLeastDeaths',
        title: '🛡️ MENOS MUERTES',
        type: 'team'
      },
      {
        id: 'teamMostDragons',
        title: '🐉 MÁS DRAGONES',
        type: 'team'
      },
      {
        id: 'teamMostBarons',
        title: '🧿  MÁS BARONES',
        type: 'team'
      },
      {
        id: 'teamMostHeralds',
        title: '👁️  MÁS HERALDOS',
        type: 'team'
      },
      {
        id: 'teamMostTowers',
        title: '🏰  MÁS TORRES DESTRUIDAS',
        type: 'team'
      },
      {
        id: 'teamMostFirstBloods',
        title: '🩸 MÁS PRIMERAS SANGRES EN CONJUNTO',
        type: 'team'
      },
      {
        id: 'fastestWin',
        title: '⚡ PARTIDA MÁS RÁPIDA GANADA',
        type: 'team'
      },
      {
        id: 'longestWin',
        title: '⏱️ PARTIDA MÁS LARGA GANADA',
        type: 'team'
      }
    ]
  },

  {
    title: '👤 JUGADORES ',
    color: 'text-violet-300',

    questions: [
      {
        id: 'playerMostKills',
        title: '🔥  MÁS KILLS',
        type: 'player'
      },
      {
        id: 'playerMostAssists',
        title: '🧿 MÁS ASISTENCIAS',
        type: 'player'
      },
      {
        id: 'playerMostDeaths',
        title: '💀 MÁS MUERTES',
        type: 'player'
      },
      {
        id: 'bestKDA',
        title: '⚔️ MEJOR KDA',
        type: 'player'
      },
      {
        id: 'mostPentas',
        title: '🌸 MÁS PENTAKILLS',
        type: 'player'
      },
      {
        id: 'mostDamage',
        title: '🏹 MÁS DAÑO TOTAL',
        type: 'player'
      },
      {
        id: 'mostCs',
        title: '🌾  MÁS SÚBDITOS (CS)',
        type: 'player'
      },
      {
        id: 'mostGoldPerMinute',
        title: '💰  MÁS POR MINUTO',
        type: 'player'
      },
      {
        id: 'mostFirstBloods',
        title: '🩸  MÁS FIRST BLOOD',
        type: 'player'
      },
      {
        id: 'mostBaronSteals',
        title: '🧿 MÁS ROBOS DE BARÓN',
        type: 'player'
      },
      {
        id: 'mostDragonSteals',
        title: '🐉 MÁS ROBOS DE DRAGÓN',
        type: 'player'
      }
    ]
  },

  {
    title: '🎮 CAMPEONES',
    color: 'text-yellow-300',

    questions: [
      {
        id: 'mostBanned',
        title: '🚫 MÁS BANEADO',
        type: 'champion'
      },
      {
        id: 'mostPlayed',
        title: '🎮  MÁS JUGADO',
        type: 'champion'
      },
      {
        id: 'bestWinrate',
        title: '🏆 MEJOR WIN RATE',
        type: 'champion'
      },
      {
        id: 'worstWinrate',
        title: '💀  PEOR WIN RATE',
        type: 'champion'
      },
      {
        id: 'champMostKills',
        title: '🔥 MÁS KILLS',
        type: 'champion'
      },
      {
        id: 'champMostDeaths',
        title: '☠️  MÁS MUERTES',
        type: 'champion'
      },
      {
        id: 'champMostAssists',
        title: '🤝  MÁS ASISTENCIAS',
        type: 'champion'
      },
      {
        id: 'firstPentaChampion',
        title: '🌸 PRIMER CAMPEÓN CON PENTAKILL',
        type: 'champion'
      },
      {
        id: 'mostFlexChampion',
        title: '🎭 CAMPEÓN MÁS FLEX',
        type: 'champion'
      }
    ]
  },

  {
    title: '📊 ESTADÍSTICAS',
    color: 'text-emerald-300',

    questions: [
      {
        id: 'totalBarons',
        title: '🧿 BARONES TOTALES',
        type: 'baronsRange'
      },
      {
        id: 'totalElders',
        title: '🐉 ELDERS TOTALES',
        type: 'eldersRange'
      },
      {
        id: 'totalTowers',
        title: '🏰 TORRES DESTRUIDAS',
        type: 'towersRange'
      },
      {
        id: 'totalPentas',
        title: '🌸 PENTAKILLS TOTALES',
        type: 'pentasRange'
      },
      {
        id: 'longestGame',
        title: '⏱️ PARTIDA MÁS LARGA',
        type: 'longestGameRange'
      },
      {
        id: 'totalKills',
        title: '🔥 KILLS TOTALES',
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