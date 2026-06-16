"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function LotusEntrance({ onEnter }) {

  const [opening, setOpening] = useState(false)

  const handleClick = () => {

    if (opening) return

    setOpening(true)

    setTimeout(() => {
      onEnter()
    }, 1800)
  }

  return (
    <AnimatePresence>

      <motion.main
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          min-h-screen
          bg-[#050108]
          overflow-hidden
          flex
          items-center
          justify-center
          relative
        "
      >

        {/* Glow fondo */}

        <div className="absolute inset-0">

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[1200px]
              h-[1200px]

              bg-pink-500/10

              rounded-full

              blur-[250px]
            "
          />

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[800px]
              h-[800px]

              bg-violet-500/10

              rounded-full

              blur-[200px]
            "
          />

        </div>

        {/* Partículas */}

        {opening && (

          <>
            {[...Array(30)].map((_, i) => (

              <motion.div
                key={i}

                initial={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 0.5
                }}

                animate={{
                  opacity: 0,
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 1000,
                  rotate: Math.random() * 720,
                  scale: 1.5
                }}

                transition={{
                  duration: 1.8
                }}

                className="
                  absolute
                  text-3xl
                "
              >
                🌸
              </motion.div>

            ))}
          </>

        )}

        {/* Loto */}

        <motion.div
          onClick={handleClick}
          className="
            relative
            cursor-pointer
            select-none
          "

          animate={
            opening
              ? {
                  scale: 1.8,
                  opacity: 0,
                  rotate: 20
                }
              : {
                  y: [0, -20, 0]
                }
          }

          transition={
            opening
              ? {
                  duration: 1.8
                }
              : {
                  duration: 4,
                  repeat: Infinity
                }
          }
        >

          {/* Glow */}

          <div
            className="
              absolute
              inset-0

              scale-125

              bg-pink-500/20

              rounded-full

              blur-[100px]

              animate-pulse
            "
          />

          {/* PNG DEL LOTO */}

          <img
            src="/lotus.png"
            alt="Lotus Rift"

            draggable={false}

            className="
              relative

              w-[280px]
              sm:w-[420px]
              lg:w-[550px]

              drop-shadow-[0_0_100px_rgba(236,72,153,0.8)]
            "
          />

        </motion.div>

        {/* Logo */}

        <motion.div

          animate={
            opening
              ? {
                  opacity: 0
                }
              : {
                  opacity: 1
                }
          }

          className="
            absolute
            bottom-24

            text-center
          "
        >

          <h1
            className="
              text-5xl
              md:text-7xl

              font-black

              tracking-[0.25em]

              bg-gradient-to-r
              from-pink-300
              via-fuchsia-300
              to-cyan-300

              bg-clip-text
              text-transparent
            "
          >
            LOTUS RIFT
          </h1>

          <p
            className="
              mt-6

              text-white/40

              tracking-[0.4em]
            "
          >
            TOCA EL LOTO
          </p>

        </motion.div>

      </motion.main>

    </AnimatePresence>
  )
}