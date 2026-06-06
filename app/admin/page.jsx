'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function AdminPage() {

  const { user } = useAuth()

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    if (user !== undefined) {
      setLoading(false)
    }

  }, [user])

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

  return (
    <div className="min-h-screen bg-[#09030f] text-white p-10">

      <h1 className="text-5xl font-black mb-4">
        ⚙️ Lotus Admin
      </h1>

      <p className="text-white/60 mb-8">
        Bienvenido {user.displayName}
      </p>

    </div>
  )
}