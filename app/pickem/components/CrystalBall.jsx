'use client'

import { useState } from 'react'
import { champions } from '../data'
import SearchDropdown from './SearchDropdown'

const sections = [

  {
    title: '🏆 𝙏𝙤𝙧𝙣𝙚𝙤 ',
    color: 'text-pink-300',

    questions: [
      {
        id: 'champion',
        title: '🏆 𝘾𝙖𝙢𝙥𝙚𝙤𝙣 𝙙𝙚𝙡 𝙩𝙤𝙧𝙣𝙚𝙤',
        type: 'team'
      },
      {
        id: 'runnerup',
        title: '🥈 𝙁𝙞𝙣𝙖𝙡𝙞𝙨𝙩𝙖',
        type: 'team'
      },
      {
        id: 'tournamentMvp',
        title: '⭐ 𝙈𝙑𝙋 𝙙𝙚𝙡 𝙩𝙤𝙧𝙣𝙚𝙤',
        type: 'player'
      },
      {
        id: 'finalMvp',
        title: '👑 𝙈𝙑𝙋 𝙙𝙚 𝙡𝙖 𝙛𝙞𝙣𝙖𝙡',
        type: 'player'
      }
    ]
  },

  {
    title: '⚔️ 𝙀𝙦𝙪𝙞𝙥𝙤𝙨  ',
    color: 'text-cyan-300',

    questions: [
      {
        id: 'teamMostKills',
        title: '🔥 𝙈á𝙨 𝙠𝙞𝙡𝙡𝙨 𝙚𝙣 𝙘𝙤𝙣𝙟𝙪𝙣𝙩𝙤 ',
        type: 'team'
      },
      {
        id: 'teamLeastDeaths',
        title: '🛡️ 𝙈𝙚𝙣𝙤𝙨 𝙢𝙪𝙚𝙧𝙩𝙚𝙨 ',
        type: 'team'
      },
      {
        id: 'teamMostDragons',
        title: '🐉 𝙈á𝙨 𝙙𝙧𝙖𝙜𝙤𝙣𝙚𝙨',
        type: 'team'
      },
      {
        id: 'teamMostBarons',
        title: '🧿 𝙈á𝙨 𝘽𝙖𝙧𝙤𝙣𝙚𝙨 ',
        type: 'team'
      },
      {
        id: 'teamMostHeralds',
        title: '👁️ 𝙈á𝙨 𝙃𝙚𝙧𝙖𝙡𝙙𝙤𝙨 ',
        type: 'team'
      },
      {
        id: 'teamMostTowers',
        title: '🏰 𝙈á𝙨 𝙩𝙤𝙧𝙧𝙚𝙨 𝙙𝙚𝙨𝙩𝙧𝙪𝙞𝙙𝙖𝙨',
        type: 'team'
      },
      {
        id: 'teamMostFirstBloods',
        title: '🩸 𝙈á𝙨 𝙥𝙧𝙞𝙢𝙚𝙧𝙖𝙨 𝙨𝙖𝙣𝙜𝙧𝙚𝙨 𝙚𝙣 𝙘𝙤𝙣𝙟𝙪𝙣𝙩𝙤',
        type: 'team'
      },
      {
        id: 'fastestWin',
        title: '⚡ 𝙋𝙖𝙧𝙩𝙞𝙙𝙖 𝙢á𝙨 𝙧𝙖𝙥𝙞𝙙𝙖 𝙜𝙖𝙣𝙖𝙙𝙖',
        type: 'team'
      },
      {
        id: 'longestWin',
        title: '⏱️ 𝙋𝙖𝙧𝙩𝙞𝙙𝙖 𝙢á𝙨 𝙡𝙖𝙧𝙜𝙖 𝙜𝙖𝙣𝙖𝙙𝙖',
        type: 'team'
      }
    ]
  },

  {
    title: '👤 𝙅𝙪𝙜𝙖𝙙𝙤𝙧𝙚𝙨  ',
    color: 'text-violet-300',

    questions: [
      {
        id: 'playerMostKills',
        title: '🔥 𝙈á𝙨 𝙠𝙞𝙡𝙡𝙨',
        type: 'player'
      },
      {
        id: 'playerMostAssists',
        title: '🧿 𝙈á𝙨 𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖𝙨 ',
        type: 'player'
      },
      {
        id: 'playerMostDeaths',
        title: '💀 𝙈á𝙨 𝙢𝙪𝙚𝙧𝙩𝙚𝙨 ',
        type: 'player'
      },
      {
        id: 'bestKDA',
        title: '⚔️ 𝙈𝙚𝙟𝙤𝙧 𝙆𝘿𝘼 ',
        type: 'player'
      },
      {
        id: 'mostPentas',
        title: '🌸 𝙈á𝙨 𝙥𝙚𝙣𝙩𝙖𝙠𝙞𝙡𝙡𝙨 ',
        type: 'player'
      },
      {
        id: 'mostDamage',
        title: '🏹 𝙈á𝙨 𝙙𝙖ñ𝙤 𝙩𝙤𝙩𝙖𝙡 ',
        type: 'player'
      },
      {
        id: 'mostCs',
        title: '🌾 𝙈á𝙨 𝙨𝙪𝙗𝙙𝙞𝙩𝙤𝙨 (𝘾𝙎) ',
        type: 'player'
      },
      {
        id: 'mostGoldPerMinute',
        title: '💰 𝙈á𝙨 𝙤𝙧𝙤 𝙥𝙤𝙧 𝙢𝙞𝙣𝙪𝙩𝙤',
        type: 'player'
      },
      {
        id: 'mostFirstBloods',
        title: '🩸 𝙈á𝙨 𝙛𝙞𝙧𝙨𝙩 𝙗𝙡𝙤𝙤𝙙',
        type: 'player'
      },
      {
        id: 'mostBaronSteals',
        title: '🧿 𝙈á𝙨 𝙧𝙤𝙗𝙤𝙨 𝙙𝙚 𝘽𝙖𝙧𝙤𝙣',
        type: 'player'
      },
      {
        id: 'mostDragonSteals',
        title: '🐉 𝙈á𝙨 𝙧𝙤𝙗𝙤𝙨 𝙙𝙚 𝙙𝙧𝙖𝙜𝙤𝙣',
        type: 'player'
      }
    ]
  },

  {
    title: '🎮 𝘾𝙖𝙢𝙥𝙚𝙤𝙣𝙚𝙨',
    color: 'text-yellow-300',

    questions: [
      {
        id: 'mostBanned',
        title: '🚫 𝙈á𝙨 𝙗𝙖𝙣𝙚𝙖𝙙𝙤',
        type: 'champion'
      },
      {
        id: 'mostPlayed',
        title: '🎮 𝙈á𝙨 𝙟𝙪𝙜𝙖𝙙𝙤',
        type: 'champion'
      },
      {
        id: 'bestWinrate',
        title: '🏆 𝙈𝙚𝙟𝙤𝙧 𝙬𝙞𝙣 𝙧𝙖𝙩𝙚',
        type: 'champion'
      },
      {
        id: 'worstWinrate',
        title: '💀 𝙋𝙚𝙤𝙧 𝙬𝙞𝙣 𝙧𝙖𝙩𝙚',
        type: 'champion'
      },
      {
        id: 'champMostKills',
        title: '🔥 𝙈á𝙨 𝙠𝙞𝙡𝙡𝙨',
        type: 'champion'
      },
      {
        id: 'champMostDeaths',
        title: '☠️ 𝙈á𝙨 𝙢𝙪𝙚𝙧𝙩𝙚𝙨 ',
        type: 'champion'
      },
      {
        id: 'champMostAssists',
        title: '🤝 𝙈á𝙨 𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖𝙨',
        type: 'champion'
      },
      {
        id: 'firstPentaChampion',
        title: '🌸 𝙋𝙧𝙞𝙢𝙚𝙧 𝙘𝙖𝙢𝙥𝙚𝙤𝙣 𝙘𝙤𝙣 𝙥𝙚𝙣𝙩𝙖𝙠𝙞𝙡𝙡',
        type: 'champion'
      },
      {
        id: 'mostFlexChampion',
        title: '🎭 𝘾𝙖𝙢𝙥𝙚𝙤𝙣 𝙢𝙖𝙨 𝙛𝙡𝙚𝙭',
        type: 'champion'
      }
    ]
  },

  {
    title: '📊 𝙀𝙨𝙩𝙖𝙙𝙞𝙨𝙩𝙞𝙘𝙖𝙨',
    color: 'text-emerald-300',

    questions: [
      {
        id: 'totalBarons',
        title: '🧿 𝘽𝙖𝙧𝙤𝙣𝙚𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨',
        type: 'baronsRange'
      },
      {
        id: 'totalElders',
        title: '🐉 𝙀𝙡𝙙𝙚𝙧𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨',
        type: 'eldersRange'
      },
      {
        id: 'totalTowers',
        title: '🏰 𝙏𝙤𝙧𝙧𝙚𝙨 𝙙𝙚𝙨𝙩𝙧𝙪𝙞𝙙𝙖𝙨',
        type: 'towersRange'
      },
      {
        id: 'totalPentas',
        title: '🌸 𝙋𝙚𝙣𝙩𝙖𝙠𝙞𝙡𝙡𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨',
        type: 'pentasRange'
      },
      {
        id: 'longestGame',
        title: '⏱️ 𝙋𝙖𝙧𝙩𝙞𝙙𝙖 𝙢𝙖𝙨 𝙡𝙖𝙧𝙜𝙖',
        type: 'longestGameRange'
      },
      {
        id: 'totalKills',
        title: '🔥 𝙆𝙞𝙡𝙡𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨',
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
          𝘾𝙧𝙮𝙨𝙩𝙖𝙡 𝘽𝙖𝙡𝙡
        </p>

        <h2 className="text-5xl font-black mt-3">
           𝙋𝙧𝙚𝙙𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙇𝙤𝙩𝙪𝙨 𝙍𝙞𝙛𝙩
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          𝙋𝙧𝙚𝙙𝙞𝙘𝙚 𝙚𝙡 𝙛𝙪𝙩𝙪𝙧𝙤 𝙙𝙚𝙡 𝙩𝙤𝙧𝙣𝙚𝙤 𝙮 𝙙𝙚𝙢𝙪𝙚𝙨𝙩𝙧𝙖 𝙦𝙪𝙚 𝙘𝙤𝙣𝙤𝙘𝙚𝙨 𝙡𝙖 𝙂𝙧𝙞𝙚𝙩𝙖 𝙢𝙚𝙟𝙤𝙧 𝙦𝙪𝙚 𝙣𝙖𝙙𝙞𝙚.
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