"use client"

import { useEffect, useMemo, useState } from "react"

import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

import { db } from "../../lib/firebase"

const round16Matches = [
  ["Nᴀʜᴜᴀʟᴇs", "Fʟᴀᴡʟᴇss"],
  ["ÆSIIR Gᴏ Lᴇɢᴇɴᴅs", "Jᴏʏɪᴛᴀ Gᴀᴍɪɴɢ"],
  ["Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ", "Gᴏʟᴅᴇɴ Dʀᴀɢᴏɴs"],
  ["T502", "Sᴍᴀᴄᴋᴅᴏᴡɴ"],
  ["Cᴏsᴀ Nᴏsᴛʀᴀ", "Hᴜᴇsɪᴛᴏs Pʀᴏᴊᴇᴄᴛ"],
  ["Iᴄᴇ Gᴏʟᴅ", "Sʜᴀᴅᴏᴡ Rᴇᴀᴘᴇʀs"],
  ["Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ", "Rᴏᴋᴜʀᴏᴍɪɴᴏs"],
  ["HᴀTsᴜ", "Nᴇᴡ Aʟʟɪᴀɴᴄᴇ"]
]

export default function PickemBracket({
  user,
  crystalBallAnswers,
  setPickemLocked,
  riotId
}) {
  const [round16, setRound16] = useState({})
  const [quarters, setQuarters] = useState({})
  const [semis, setSemis] = useState({})
  const [finalWinner, setFinalWinner] = useState(null)
  const [locked, setLocked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  

  const quarterTeams = useMemo(() => {
    return [
      round16.m1,
      round16.m2,
      round16.m3,
      round16.m4,
      round16.m5,
      round16.m6,
      round16.m7,
      round16.m8
    ]
  }, [round16])

  const semiTeams = useMemo(() => {
    return [
      quarters.q1,
      quarters.q2,
      quarters.q3,
      quarters.q4
    ]
  }, [quarters])

  const finalTeams = useMemo(() => {
    return [
      semis.s1,
      semis.s2
    ]
  }, [semis])

  const champion = finalWinner

  const TeamButton = ({
    team,
    selected,
    onClick
  }) => (
    <button
  disabled={locked}
  onClick={onClick}
      className={`
        w-full
        p-3
        rounded-xl
        border
        transition-all
        font-semibold

        ${locked ? "opacity-50 cursor-not-allowed" : ""}

        ${
          selected
            ? "bg-pink-500 border-pink-400 text-white"
            : "bg-white/5 border-white/10 hover:bg-white/10"
        }
      `}
    >
      {team}
    </button>
  )

  useEffect(() => {

  if (!user) return

  loadPickem()

}, [user])

const savePickem = async () => {

    console.log("USER:", user)
console.log("UID:", user?.uid)
console.log("DISPLAY:", user?.displayName)
console.log("EMAIL:", user?.email)

  if (locked) return

  if (
    Object.keys(round16).length !== 8 ||
    Object.keys(quarters).length !== 4 ||
    Object.keys(semis).length !== 2 ||
    !finalWinner
  ) {
    alert("Completa todo el bracket.")
    return
  }

  if (Object.keys(crystalBallAnswers).length < 39) {
  alert("Completa todas las predicciones de Crystal Ball.")
  return
}

if (!riotId.trim()) {
  alert("Ingresa tu RIOT ID.")
  return
}

console.log("GUARDANDO...")

  await setDoc(
  doc(db, "pickems", user.uid),
  {
    uid: user.uid,
    riotId,
    username: user.displayName || user.email,

    crystalBall: crystalBallAnswers,

    bracket: {
      round16,
      quarters,
      semis,
      champion: finalWinner
    },

    locked: true,
    score: 0,
    createdAt: Date.now()
  },
  { merge: true }
)

  setLocked(true)

  if (setPickemLocked) {
  setPickemLocked(true)
}

  setShowSuccess(true)
}

const loadPickem = async () => {

  const snap = await getDoc(
    doc(db, "pickems", user.uid)
  )

  if (!snap.exists()) return

  const data = snap.data()

  if (data.bracket) {

    setRound16(data.bracket.round16 || {})
    setQuarters(data.bracket.quarters || {})
    setSemis(data.bracket.semis || {})
    setFinalWinner(data.bracket.champion || null)

  }

  if (data.locked) {

  setLocked(true)

  if (setPickemLocked) {
    setPickemLocked(true)
  }

}

}

if (showSuccess) {
  return (
    <section className="py-24 px-6">

      <div className="max-w-2xl mx-auto">

        <div
          className="
            rounded-3xl
            border
            border-emerald-500/30
            bg-emerald-500/10
            backdrop-blur-xl
            p-10
            text-center
          "
        >

          <div className="text-6xl mb-6">
            ✅
          </div>

          <h2 className="text-4xl font-black mb-4">
            Predicciones guardadas
          </h2>

          <p className="text-white/70 mb-8">
            Tus predicciones fueron registradas correctamente.
            El Pick'Em ha quedado bloqueado
          </p>

          <button
            onClick={() => {
              window.location.href = "/"
            }}
            className="
              px-8
              py-4
              rounded-2xl
              font-black

              bg-gradient-to-r
              from-pink-500
              to-violet-500

              hover:scale-105

              transition-all
            "
          >
            🏠 Volver al inicio
          </button>

        </div>

      </div>

    </section>
  )
}

  return (
    <section className="px-6 lg:px-12 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-pink-300 tracking-[0.3em] uppercase text-sm">
            Pick'Em
          </p>

          <h2 className="text-5xl font-black mt-4">
            🏆 PREDICCIÓN DE BRACKET
          </h2>

          <p className="text-zinc-400 mt-4">
        Predice todo el camino hacia el campeonato.
          </p>
        </div>

        {/* OCTAVOS */}

        <div className="mb-20">

          <h3 className="text-3xl font-black text-pink-300 mb-8">
            OCTAVOS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {round16Matches.map((match, index) => {

              const key = `m${index + 1}`

              return (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="space-y-3">

                    <TeamButton
                      team={match[0]}
                      selected={round16[key] === match[0]}
                      onClick={() =>
                        setRound16({
                          ...round16,
                          [key]: match[0]
                        })
                      }
                    />

                    <TeamButton
                      team={match[1]}
                      selected={round16[key] === match[1]}
                      onClick={() =>
                        setRound16({
                          ...round16,
                          [key]: match[1]
                        })
                      }
                    />

                  </div>
                </div>
              )
            })}

          </div>

        </div>

        {/* CUARTOS */}

        <div className="mb-20">

          <h3 className="text-3xl font-black text-cyan-300 mb-8">
            CUARTOS DE FINAL
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[0, 2, 4, 6].map((index, i) => {

              const team1 = quarterTeams[index]
              const team2 = quarterTeams[index + 1]

              const key = `q${i + 1}`

              return (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="space-y-3">

                    {team1 && (
                      <TeamButton
                        team={team1}
                        selected={quarters[key] === team1}
                        onClick={() =>
                          setQuarters({
                            ...quarters,
                            [key]: team1
                          })
                        }
                      />
                    )}

                    {team2 && (
                      <TeamButton
                        team={team2}
                        selected={quarters[key] === team2}
                        onClick={() =>
                          setQuarters({
                            ...quarters,
                            [key]: team2
                          })
                        }
                      />
                    )}

                  </div>
                </div>
              )
            })}

          </div>

        </div>

        {/* SEMIS */}

        <div className="mb-20">

          <h3 className="text-3xl font-black text-violet-300 mb-8">
            SEMIFINALES
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[0, 2].map((index, i) => {

              const team1 = semiTeams[index]
              const team2 = semiTeams[index + 1]

              const key = `s${i + 1}`

              return (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="space-y-3">

                    {team1 && (
                      <TeamButton
                        team={team1}
                        selected={semis[key] === team1}
                        onClick={() =>
                          setSemis({
                            ...semis,
                            [key]: team1
                          })
                        }
                      />
                    )}

                    {team2 && (
                      <TeamButton
                        team={team2}
                        selected={semis[key] === team2}
                        onClick={() =>
                          setSemis({
                            ...semis,
                            [key]: team2
                          })
                        }
                      />
                    )}

                  </div>
                </div>
              )
            })}

          </div>

        </div>

        {/* FINAL */}

        <div className="mb-20">

          <h3 className="text-3xl font-black text-yellow-300 mb-8">
            FINAL
          </h3>

          <div className="max-w-xl mx-auto rounded-3xl border border-yellow-500/20 bg-white/5 p-8">

            <div className="space-y-4">

              {finalTeams[0] && (
                <TeamButton
                  team={finalTeams[0]}
                  selected={finalWinner === finalTeams[0]}
                  onClick={() =>
                    setFinalWinner(finalTeams[0])
                  }
                />
              )}

              {finalTeams[1] && (
                <TeamButton
                  team={finalTeams[1]}
                  selected={finalWinner === finalTeams[1]}
                  onClick={() =>
                    setFinalWinner(finalTeams[1])
                  }
                />
              )}

            </div>

          </div>

        </div>

        {/* CAMPEON */}

        <div className="text-center">

          <div className="inline-block rounded-3xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-violet-500/10 px-10 py-8">

            <div className="text-6xl mb-4">
              🏆
            </div>

            <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm">
              Campeón Predicho
            </p>

            <h3 className="text-4xl font-black mt-4">

              {champion || "Selecciona un campeón"}

            </h3>

          </div>

          <div className="mt-10 text-center">

  <button
    onClick={savePickem}
    disabled={locked}
    className={`
      px-10
      py-4
      rounded-2xl
      font-black
      transition-all

      ${
        locked
          ? "bg-green-500/20 text-green-300 cursor-not-allowed"
          : "bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105"
      }
    `}
  >

    {locked
      ? "✓ Predicciones bloqueadas"
      : "💾 Guardar Pick'Em"}

  </button>

</div>

        </div>

      </div>

    </section>
  )
}