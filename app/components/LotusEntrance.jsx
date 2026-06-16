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

        {/* PORTAL MÁGICO */}

{opening && (
  <>
    {/* Flash central */}
    <motion.div
      initial={{
        scale: 0,
        opacity: 1
      }}
      animate={{
        scale: 12,
        opacity: 0
      }}
      transition={{
        duration: 0.8
      }}
      className="
        absolute
        w-24
        h-24
        rounded-full
        bg-white
        blur-3xl
      "
    />

    {/* Portal exterior */}
    <motion.div
      initial={{
        scale: 0,
        opacity: 1
      }}
      animate={{
        scale: 25,
        opacity: 0
      }}
      transition={{
        duration: 1.8,
        ease: "easeOut"
      }}
      className="
        absolute
        w-40
        h-40
        rounded-full

        border-[6px]
        border-pink-300

        shadow-[0_0_120px_rgba(236,72,153,0.8)]
      "
    />

    {/* Portal interior */}
    <motion.div
      initial={{
        scale: 0,
        opacity: 1
      }}
      animate={{
        scale: 18,
        opacity: 0
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut"
      }}
      className="
        absolute
        w-32
        h-32
        rounded-full

        border-[4px]
        border-cyan-300

        shadow-[0_0_100px_rgba(34,211,238,0.8)]
      "
    />
  </>
)}

        {/* LOTO LEGENDARIO */}

<motion.div
  onClick={handleClick}
  className="
    relative
    cursor-pointer
    select-none
    flex
    items-center
    justify-center
  "
  animate={
  opening
    ? {
        scale: 3,
        opacity: 0,
        rotate: 8
      }
      : {
          scale: [1, 1.04, 1],
          y: [0, -12, 0]
        }
  }
  transition={
    opening
      ? {
          duration: 1.8
        }
      : {
          duration: 5,
          repeat: Infinity
        }
  }
>

  {/* Halo gigante */}

  <div
    className="
      absolute
      w-[900px]
      h-[900px]
      rounded-full
      bg-pink-500/15
      blur-[220px]
    "
  />

  <div
    className="
      absolute
      w-[700px]
      h-[700px]
      rounded-full
      bg-fuchsia-500/15
      blur-[180px]
    "
  />

  {/* Círculo exterior */}

  <motion.div
    animate={{
      rotate: 360
    }}
    transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }}
    className="
      absolute
      w-[780px]
      h-[780px]
      rounded-full
      border
      border-pink-400/10
    "
  />

  {/* Círculo interior */}

  <motion.div
    animate={{
      rotate: -360
    }}
    transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear"
    }}
    className="
      absolute
      w-[620px]
      h-[620px]
      rounded-full
      border
      border-cyan-400/10
    "
  />

  {/* PNG */}

  <img
    src="/lotus.png"
    alt="Lotus Rift"
    draggable={false}
    className="
      relative

      w-[380px]
      sm:w-[550px]
      lg:w-[720px]

      drop-shadow-[0_0_150px_rgba(236,72,153,0.9)]
    "
  />

</motion.div>

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
    bottom-20
    text-center
  "
>

  <h1
    className="
      text-6xl
      md:text-8xl
      font-black

      tracking-[0.25em]

      bg-gradient-to-r
      from-pink-300
      via-fuchsia-300
      to-cyan-300

      bg-clip-text
      text-transparent

      drop-shadow-[0_0_40px_rgba(236,72,153,0.4)]
    "
  >
    LOTUS RIFT
  </h1>

  <p
    className="
      mt-6
      text-white/50
      tracking-[0.5em]
      text-sm
    "
  >
    TOCA EL LOTO
  </p>

</motion.div>

      </motion.main>

    </AnimatePresence>
  )
}