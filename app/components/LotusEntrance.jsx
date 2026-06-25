"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function LotusEntrance({ onEnter }) {
  const [opening, setOpening] = useState(false)

  const handleEnter = () => {
    if (opening) return

    setOpening(true)

    setTimeout(() => {
      onEnter()
    }, 600)
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: opening ? 0 : 1,
          scale: opening ? 1.05 : 1,
        }}
        transition={{
          duration: 0.55,
          ease: "easeInOut",
        }}
        className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
          justify-center
          bg-[#040109]
        "
      >
        {/* FONDO */}

        <div className="absolute inset-0">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_60%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_75%)]
            "
          />
        </div>

        {/* PARTICULAS */}

        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-white/40
            "
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
          />
        ))}

        {/* LOTO */}

        <motion.div
          onClick={handleEnter}
          className="
            relative
            cursor-pointer
            z-20
            flex
            items-center
            justify-center
          "
        >
          <motion.div
            animate={
              opening
                ? {
                    scale: 2.2,
                    opacity: 0,
                    filter: "blur(8px)",
                  }
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={
              opening
                ? {
                    duration: 0.55,
                    ease: "easeOut",
                  }
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <img
              src="/lotus.png"
              alt="Lotus Rift"
              draggable={false}
              className="
                w-[280px]
                sm:w-[420px]
                md:w-[520px]
                lg:w-[650px]

                drop-shadow-[0_0_60px_rgba(236,72,153,0.35)]
                select-none
                pointer-events-none
              "
            />
          </motion.div>
        </motion.div>

        {/* TITULO */}

        <motion.div
          animate={{
            opacity: opening ? 0 : 1,
            y: opening ? 20 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            absolute
            bottom-16
            left-1/2
            -translate-x-1/2

            text-center
            z-20
          "
        >
          <h1
            className="
              text-4xl
              sm:text-5xl
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
              mt-4
              text-[10px]
              sm:text-xs

              tracking-[0.45em]

              text-white/40
            "
          >
            TOCA EL LOTO
          </p>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  )
}