'use client'

import Link from 'next/link'
import LoginButton from './LoginButton'
import { useAuth } from '../context/AuthContext'
import { Trophy, Swords, Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from "next/image"

export default function Navbar() {

  const { user } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[180px] bg-fuchsia-600/20 blur-[140px]" />

          <div className="absolute right-0 top-0 w-[400px] h-[150px] bg-cyan-500/10 blur-[120px]" />

        </div>

        <div
  className="
    relative
    overflow-hidden
    max-w-7xl
            mx-auto
            h-20
            rounded-[2rem]
            border
            border-white/10
            bg-gradient-to-r
from-black/70
via-zinc-900/60
to-black/70
            backdrop-blur-2xl
            shadow-[0_0_60px_rgba(236,72,153,0.12)]
            flex
            items-center
            justify-between
            px-6
          "
        >

          {/* LOGO */}

          <Link
  href="/"
  className="flex items-center gap-3"
>
  <div
    className="
      relative
      w-14
      h-14
      rounded-2xl
      bg-gradient-to-br
      from-pink-500/20
      to-cyan-500/20
      border border-white/10
      shadow-[0_0_30px_rgba(236,72,153,0.4)]
    "
  >
    <Image
      src="/logos/lotuz.png"
      alt="Lotus Rift"
      fill
      className="object-contain p-2"
    />
    
  </div>
  

  <div>
    <p className="text-xs uppercase tracking-[0.35em] text-pink-300">
      🪷𝑇𝑂𝑅𝑁𝐸𝑂 𝐿𝐴𝑁
    </p>

    <h1 className="font-black text-xl">
      🪷𝐿𝑂𝑇𝑈𝑆 𝑅𝐼𝐹𝑇
    </h1>
  </div>
</Link>

          {/* DESKTOP LINKS */}

          <div className="hidden lg:flex items-center gap-2">

            <Link
  href="/"
  className="nav-button font-contrail px-5 py-3"
>
  <span className="relative z-10">
    INICIO
  </span>
</Link>

<Link
  href="/brackets"
  className="nav-button font-contrail px-5 py-3 flex items-center gap-2"
>
  <span className="relative z-10 flex items-center gap-2">
    <Swords size={16} />
    BRACKET
  </span>
</Link>
            

            <Link
  href="/reglamento"
  className="nav-button font-contrail px-5 py-3"
>
  <span className="relative z-10">
    📜 REGLAMENTO
  </span>
</Link>
            {user ? (
             <Link
  href="/pickem"
  className="nav-button font-contrail px-5 py-3 flex items-center gap-2"
>
  <span className="relative z-10 flex items-center gap-2">
    <Sparkles size={16} />
    PICK' EM
  </span>
</Link>
            ) : (
              <div
                className="
                  px-5
                  py-3
                  rounded-xl
                  text-zinc-500
                  border
                  border-white/5
                  bg-white/5
                  flex
                  items-center
                  gap-2
                "
              >
                🔒 PICK' EM
              </div>
            )}

          </div>

          {/* LOGIN */}

          <div className="hidden lg:block">
            <LoginButton />
          </div>

          {/* MOBILE BTN */}

          {/* MOBILE BTN */}

<button
  onClick={() => setOpen(!open)}
  className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10"
>
  {open ? <X size={20} /> : <Menu size={20} />}
</button>

<div
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-[60%]
    h-px
    bg-gradient-to-r
    from-transparent
    via-pink-500
    to-transparent
  "
/>

</div>

      </nav>

      {/* MOBILE MENU */}

      {open && (

        <div
          className="
            fixed
            top-28
            left-4
            right-4
            z-50
            lg:hidden
            rounded-[2.5rem]
            border
            border-white/10
            bg-gradient-to-br
from-black/90
via-pink-950/40
to-black/90
            backdrop-blur-2xl
            shadow-[0_0_50px_rgba(236,72,153,0.25)]
            p-6
          "
        >

          <div className="flex flex-col gap-3">

            <Link
  href="/"
  onClick={() => setOpen(false)}
  className="mobile-nav-button font-contrail"
>
  INICIO
</Link>

  <Link
  href="/brackets"
  onClick={() => setOpen(false)}
  className="mobile-nav-button font-contrail"
>
  BRACKET
</Link>

            <Link
  href="/reglamento"
  onClick={() => setOpen(false)}
  className="mobile-nav-button font-contrail"
>
  REGLAMENTO
</Link>

            {user ? (
              <Link
  href="/pickem"
  onClick={() => setOpen(false)}
  className="mobile-nav-button font-contrail"
>
  PICK' EM
</Link>
            ) : (
              <div className="px-4 py-4 rounded-xl bg-white/5 text-zinc-500">
                🔒 PICK' EM
              </div>
            )}

            <div className="pt-3 border-t border-white/10">
              <LoginButton />
            </div>
            

          </div>

        </div>

      )}
    </>
  )
}