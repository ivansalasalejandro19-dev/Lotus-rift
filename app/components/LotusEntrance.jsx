"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function LotusEntrance({ onEnter }) {

const [opening, setOpening] = useState(false)

const handleEnter = () => {

```
if (opening) return

setOpening(true)

setTimeout(() => {
  onEnter()
}, 1400)
```

}

return ( <AnimatePresence>

```
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
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
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 4 + (i % 5),
          repeat: Infinity,
          ease: "easeInOut"
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
          top: `${(i * 11) % 100}%`
        }}
      />

    ))}

    {/* PORTAL */}

    {opening && (

      <motion.div
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 20,
          opacity: 1
        }}
        transition={{
          duration: 1.3,
          ease: "easeIn"
        }}
        className="
          absolute
          w-40
          h-40
          rounded-full

          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-cyan-500

          blur-3xl

          z-30
        "
      />

    )}

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
                scale: 1.8,
                opacity: 0
              }
            : {
                y: [0, -10, 0]
              }
        }

        transition={
          opening
            ? {
                duration: 1.2
              }
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
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
        opacity: opening ? 0 : 1
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
```

)
}
