'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import {
  doc,
  getDoc,
  collection,
  getDocs
} from 'firebase/firestore'
import { db } from '../lib/firebase'

export default function AdminPage() {

  const { user } = useAuth()

  const [loading, setLoading] = useState(true)

  const [isAdmin, setIsAdmin] = useState(false)

  const [participants, setParticipants] = useState(0)

  const [pickems, setPickems] = useState([])

  useEffect(() => {

  if (!user) {
    setLoading(false)
    return
  }

  checkAdmin()

}, [user])

const checkAdmin = async () => {

  try {

    const adminRef = doc(
      db,
      'admins',
      user.uid
    )

    const snap = await getDoc(adminRef)

    if (snap.exists()) {
      setIsAdmin(true)
    }

    const picksSnap = await getDocs(
  collection(db, 'pickems')
)

setParticipants(picksSnap.size)

const data = picksSnap.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}))

setPickems(data)

  } catch (error) {
    console.error(error)
  }

  setLoading(false)
}

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Cargando...
    </div>
  )
}

if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">

      <div className="text-center">

        <h1 className="text-5xl font-black mb-4">
          🔒 Acceso Restringido
        </h1>

        <p className="text-white/60">
          Debes iniciar sesión.
        </p>

      </div>

    </div>
  )
}

if (!isAdmin) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">

      <div className="text-center">

        <h1 className="text-5xl font-black mb-4">
          🚫 Acceso Denegado
        </h1>

        <p className="text-white/60">
          No eres administrador.
        </p>

      </div>

    </div>
  )
}

return (
  <div className="min-h-screen bg-[#09030f] text-white p-10">

    <h1 className="text-5xl font-black mb-4">
      ⚙️ Lotus Admin
    </h1>

    <p className="text-white/60 mb-10">
      Bienvenido {user.displayName}
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

        <p className="text-white/50 mb-2">
          Participantes
        </p>

        <h2 className="text-5xl font-black">
          {participants}
        </h2>

      </div>

    </div>

    <div>

      <h2 className="text-3xl font-black mb-6">
        Participantes
      </h2>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left p-4">
                Usuario
              </th>

              <th className="text-left p-4">
                UID
              </th>

              <th className="text-left p-4">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {pickems.map((player) => (

              <tr
                key={player.id}
                className="border-b border-white/5"
              >

                <td className="p-4">
                  {player.username}
                </td>

                <td className="p-4 text-white/50">
                  {player.uid}
                </td>

                <td className="p-4">

                  <button
                    onClick={() => console.log(player)}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-cyan-500/20
                      hover:bg-cyan-500/30
                      transition
                    "
                  >
                    👁 Ver
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>
)
}