'use client'

import { useState } from 'react'
import { champions } from '../data'
import SearchDropdown from './SearchDropdown'

const sections = [

  {
    title: '🏆 Tᴏʀɴᴇᴏ',
    color: 'text-pink-300',

    questions: [
      {
        id: 'champion',
        title: '🏆 Cᴀᴍᴘᴇᴏ́ɴ ᴅᴇʟ ᴛᴏʀɴᴇᴏ',
        type: 'team'
      },
      {
        id: 'runnerup',
        title: '🥈 Fɪɴᴀʟɪsᴛᴀ',
        type: 'team'
      },
      {
        id: 'tournamentMvp',
        title: '⭐ Mᴠᴘ ᴅᴇʟ Tᴏʀɴᴇᴏ',
        type: 'player'
      },
      {
        id: 'finalMvp',
        title: '👑 Mᴠᴘ ᴅᴇ ʟᴀ ғɪɴᴀʟ',
        type: 'player'
      }
    ]
  },

  {
    title: '⚔️ Eϙᴜɪᴘᴏs',
    color: 'text-cyan-300',

    questions: [
      {
        id: 'teamMostKills',
        title: '🔥 Mᴀ́s ᴋɪʟʟs ᴇɴ ᴄᴏɴᴊᴜɴᴛᴏ',
        type: 'team'
      },
      {
        id: 'teamLeastDeaths',
        title: '🛡️ Mᴇɴᴏs ᴍᴜᴇʀᴛᴇs',
        type: 'team'
      },
      {
        id: 'teamMostDragons',
        title: '🐉 Mᴀ́s ᴅʀᴀɢᴏɴᴇs',
        type: 'team'
      },
      {
        id: 'teamMostBarons',
        title: '🧿 Mᴀ́s Bᴀʀᴏɴᴇs',
        type: 'team'
      },
      {
        id: 'teamMostHeralds',
        title: '👁️ Mᴀ́s ʜᴇʀᴀʟᴅᴏs',
        type: 'team'
      },
      {
        id: 'teamMostTowers',
        title: '🏰 Mᴀ́s ᴛᴏʀʀᴇs ᴅᴇsᴛʀᴜɪᴅᴀs',
        type: 'team'
      },
      {
        id: 'teamMostFirstBloods',
        title: '🩸 Mᴀ́s ᴘʀɪᴍᴇʀᴀ sᴀɴɢʀᴇ ᴇɴ ᴄᴏɴᴊᴜɴᴛᴏ',
        type: 'team'
      },
      {
        id: 'fastestWin',
        title: '⚡ Pᴀʀᴛɪᴅᴀ ᴍᴀ́s ʀᴀᴘɪᴅᴀ ɢᴀɴᴀᴅᴀ',
        type: 'team'
      },
      {
        id: 'longestWin',
        title: '⏱️ Pᴀʀᴛɪᴅᴀ ᴍᴀ́s ʟᴀʀɢᴀ ɢᴀɴᴀᴅᴀ',
        type: 'team'
      }
    ]
  },

  {
    title: '👤 Jᴜɢᴀᴅᴏʀᴇs',
    color: 'text-violet-300',

    questions: [
      {
        id: 'playerMostKills',
        title: '🔥 Mᴀ́s ᴋɪʟʟs',
        type: 'player'
      },
      {
        id: 'playerMostAssists',
        title: '🧿 Mᴀ́s ᴀsɪsᴛᴇɴᴄɪᴀ',
        type: 'player'
      },
      {
        id: 'playerMostDeaths',
        title: '💀 Mᴀ́s ᴍᴜᴇʀᴛᴇs',
        type: 'player'
      },
      {
        id: 'bestKDA',
        title: '⚔️ Mᴇᴊᴏʀ ᴋᴅᴀ',
        type: 'player'
      },
      {
        id: 'mostPentas',
        title: '🌸 Mᴀ́s ᴘᴇɴᴛᴀᴋɪʟʟ',
        type: 'player'
      },
      {
        id: 'mostDamage',
        title: '🏹 Mᴀ́s ᴅᴀɴ̃ᴏ ᴛᴏᴛᴀʟ',
        type: 'player'
      },
      {
        id: 'mostCs',
        title: '🌾 Mᴀ́s sᴜʙᴅɪᴛᴏs (cs)',
        type: 'player'
      },
      {
        id: 'mostGoldPerMinute',
        title: '💰 Mᴀs ᴏʀᴏ ᴘᴏʀ ᴍɪɴᴜᴛᴏ',
        type: 'player'
      },
      {
        id: 'mostFirstBloods',
        title: '🩸 Mᴀ́s ғɪʀsᴛ ʙʟᴏᴏᴅ',
        type: 'player'
      },
      {
        id: 'mostBaronSteals',
        title: '🧿 Mᴀ́s ʀᴏʙᴏs ᴅᴇ ʙᴀʀᴏɴ',
        type: 'player'
      },
      {
        id: 'mostDragonSteals',
        title: '🐉 Mᴀ́s ʀᴏʙᴏs ᴅᴇ ᴅʀᴀɢᴏ́ɴ',
        type: 'player'
      }
    ]
  },

  {
    title: '🎮 Cᴀᴍᴘᴇᴏɴᴇs',
    color: 'text-yellow-300',

    questions: [
      {
        id: 'mostBanned',
        title: '🚫 Mᴀ́s ʙᴀɴᴇᴀᴅᴏ',
        type: 'champion'
      },
      {
        id: 'mostPlayed',
        title: '🎮 Mᴀ́s ᴊᴜɢᴀᴅᴏs',
        type: 'champion'
      },
      {
        id: 'bestWinrate',
        title: '🏆 Mᴇᴊᴏʀ ᴡɪɴ ʀᴀᴛᴇ',
        type: 'champion'
      },
      {
        id: 'worstWinrate',
        title: '💀 Pᴇᴏʀ Wɪɴ ʀᴀᴛᴇ',
        type: 'champion'
      },
      {
        id: 'champMostKills',
        title: '🔥 Mᴀ́s ᴋɪʟʟs',
        type: 'champion'
      },
      {
        id: 'champMostDeaths',
        title: '☠️ Mᴀ́s ᴍᴜᴇʀᴛᴇs',
        type: 'champion'
      },
      {
        id: 'champMostAssists',
        title: '🤝 Mᴀ́s ᴀsɪsᴛᴇɴᴄɪᴀs',
        type: 'champion'
      },
      {
        id: 'firstPentaChampion',
        title: '🌸 Pʀɪᴍᴇʀ ᴄᴀᴍᴘᴇᴏ́ɴ ᴄᴏɴ ᴘᴇɴᴛᴀᴋɪʟʟ',
        type: 'champion'
      },
      {
        id: 'mostFlexChampion',
        title: '🎭 Cᴀᴍᴘᴇᴏ́ɴ ᴍᴀ́s ғʟᴇx',
        type: 'champion'
      }
    ]
  },

  {
    title: '📊 Esᴛᴀᴅɪsᴛɪᴄᴀs',
    color: 'text-emerald-300',

    questions: [
      {
        id: 'totalBarons',
        title: '🧿 Bᴀʀᴏɴᴇs ᴛᴏᴛᴀʟᴇs',
        type: 'baronsRange'
      },
      {
        id: 'totalElders',
        title: '🐉 Eʟᴅᴇʀs ᴛᴏᴛᴀʟᴇs',
        type: 'eldersRange'
      },
      {
        id: 'totalTowers',
        title: '🏰 Tᴏʀʀᴇs ᴅᴇsᴛʀᴜɪᴅᴀs',
        type: 'towersRange'
      },
      {
        id: 'totalPentas',
        title: '🌸 Pᴇɴᴛᴀᴋɪʟʟs ᴛᴏᴛᴀʟᴇs',
        type: 'pentasRange'
      },
      {
        id: 'longestGame',
        title: '⏱️ Pᴀʀᴛɪᴅᴀ ᴍᴀ́s ʟᴀʀɢᴀ',
        type: 'longestGameRange'
      },
      {
        id: 'totalKills',
        title: '🔥 Kɪʟʟs ᴛᴏᴛᴀʟᴇs',
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
          Cʀʏsᴛᴀʟ Bᴀʟʟ
        </p>

        <h2 className="text-5xl font-black mt-3">
          Pʀᴇᴅɪᴄᴄᴄɪᴏɴᴇs Lᴏᴛᴜs Rɪғᴛ
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          Pʀᴇᴅɪᴄᴇ ᴇʟ ғᴜᴛᴜʀᴏ ᴅᴇʟ ᴛᴏʀɴᴇᴏ ʏ ᴅᴇᴍᴜᴇsᴛʀᴀ ϙᴜᴇ ᴄᴏɴᴏᴄᴇs ʟᴀ ɢʀɪᴇᴛᴀ ᴍᴇᴊᴏʀ ϙᴜᴇ ɴᴀᴅɪᴇ
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