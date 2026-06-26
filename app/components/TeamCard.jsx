"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function TeamCard({
  team,
  logo,
  roster = [],
  open,
  onToggle,
}) {

// ============================================================
// Mouse & 3D
// ============================================================

const [mouse, setMouse] = useState({
  x: 0,
  y: 0,
  rotateX: 0,
  rotateY: 0,
})

const handleMouseMove = (e) => {

  const rect = e.currentTarget.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const px = x / rect.width
  const py = y / rect.height

  const rotateY = (px - 0.5) * 12
const rotateX = -(py - 0.5) * 12

  setMouse({
    x,
    y,
    rotateX,
    rotateY,
  })

}

const handleMouseLeave = () => {

  setMouse((prev) => ({
    ...prev,
    rotateX: 0,
    rotateY: 0,
  }))

}

return (

    <motion.div
  layout
  initial={false}

  onClick={onToggle}

  onMouseMove={handleMouseMove}

  onMouseLeave={handleMouseLeave}

  animate={{
    rotateX: mouse.rotateX,
    rotateY: mouse.rotateY,
    y: open ? -6 : 0,
  }}

  transition={{
    type: "spring",
    stiffness: 220,
    damping: 20,
    mass: 0.9,
  }}

  style={{
  perspective: 1800,
  transformStyle: "preserve-3d",
  boxShadow:
    "0 30px 80px rgba(0,0,0,.45), 0 0 120px rgba(236,72,153,.08)",
}}
  

  className="
    relative
    group
    cursor-pointer
    overflow-visible
    rounded-[32px]
    will-change-transform
  "
>



  {/* ============================================================
    Background Layers
============================================================ */}

{/* Base Oscura */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    bg-[#0A0711]
  "
/>

{/* Cristal */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    border
    border-white/10

    bg-white/[0.045]

    backdrop-blur-[24px]
  "
/>

<motion.div

animate={{
   x:["-120%","120%"]
}}

transition={{
   duration:6,
   repeat:Infinity,
   repeatDelay:5
}}

className="
absolute
top-0
bottom-0
w-40
rounded-[32px]
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
-rotate-12
pointer-events-none
overflow-hidden
"
/>

{/* Gradiente Interior */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    bg-gradient-to-br

    from-white/[0.08]
    via-transparent
    to-violet-500/[0.04]

    pointer-events-none
  "
/>

{/* Reflejo Superior */}

<div
  className="
    absolute

    top-0
    left-0
    right-0

    h-[40%]

    rounded-t-[32px]

    bg-gradient-to-b

    from-white/[0.08]
    to-transparent

    pointer-events-none
  "
/>



{/* Sombra Interior */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-25px_50px_rgba(0,0,0,0.45)]

    pointer-events-none
  "
/>


  {/* ============================================================
    RGB Border
============================================================ */}

<div
  className="
    absolute

    -inset-[1px]

    rounded-[33px]

    overflow-hidden

    pointer-events-none
  "
>

  {/* Gradiente RGB */}

  <motion.div

    animate={{
      rotate: 360,
    }}

    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}

    className="
      absolute

      -inset-[150%]

      bg-[conic-gradient(from_0deg,#ec4899,#8b5cf6,#06b6d4,#22c55e,#f59e0b,#ec4899)]
    "

  />

  {/* Máscara para dejar solo el borde */}

  <div
    className="
      absolute

      inset-[1px]

      rounded-[32px]

      bg-[#0A0711]
    "
  />

</div>



 {/* ============================================================
    Aurora
============================================================ */}

<div
  className="
    absolute
    inset-0

    overflow-hidden

    rounded-[32px]

    pointer-events-none
  "
>

  <motion.div

    animate={{
      x: [-80, 60, -80],
      y: [-30, 40, -30],
      scale: [1, 1.15, 1],
      rotate: [0, 18, 0],
    }}

    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    className="
      absolute

      left-1/2
      top-1/2

      w-[520px]
      h-[520px]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-gradient-to-r

      from-pink-500/12
      via-violet-500/12
      to-cyan-400/12

      blur-[120px]
    "
  />

</div>

{/* Nebula */}

<motion.div
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 20, 0],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
  absolute
  -top-40
  -left-40
  w-[700px]
  h-[700px]
  rounded-full
  bg-gradient-to-r
  from-cyan-500/10
  via-violet-500/10
  to-pink-500/10
  blur-[170px]
  pointer-events-none
  "
/>

{[...Array(12)].map((_, i) => (
   <motion.div
      key={i}
      animate={{
         y:[0,-25,0],
         opacity:[0.2,1,0.2]
      }}
      transition={{
         duration:4+i,
         repeat:Infinity
      }}
      className="
absolute
z-0
w-1
h-1
rounded-full
bg-white/70
pointer-events-none
"
      style={{
         left:`${Math.random()*100}%`,
         top:`${Math.random()*100}%`
      }}
   />
))}



 {/* ============================================================
    Cursor Glow
============================================================ */}

<motion.div

  animate={{
    x: mouse.x - 175,
    y: mouse.y - 175,
  }}

  transition={{
    type: "spring",
    stiffness: 350,
    damping: 30,
    mass: 0.3,
  }}

  className="
    absolute

    w-[350px]
    h-[350px]

    rounded-full

    pointer-events-none
  "

  style={{
    background:
      "radial-gradient(circle, rgba(255,255,255,.12) 0%, rgba(236,72,153,.08) 30%, transparent 70%)",
    filter: "blur(55px)",
  }}
/>



 {/* ============================================================
    Noise
============================================================ */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    opacity-[0.03]

    mix-blend-soft-light

    pointer-events-none
  "

  style={{
    backgroundImage: `
      radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
      radial-gradient(circle at 80% 60%, white 1px, transparent 1px),
      radial-gradient(circle at 50% 90%, white 1px, transparent 1px)
    `,
    backgroundSize: "18px 18px",
  }}
/>



      {/* ============================================================
          Contenedor Principal
      ============================================================ */}

      <motion.div

        className="
        relative
        z-10

        overflow-hidden

        rounded-[32px]

        p-7
        "

      >

        {/* ============================================================
    Logo
============================================================ */}

<div
  className="
    relative

    flex
    justify-center

    mb-8

    [transform:translateZ(100px)]
  "
>

  {/* Halo */}

  <motion.div
  animate={{
    y: [0, -6, 0],
    rotate: [0, 4, -4, 0],
  }}

  whileHover={{
    scale: 1.08,
    rotate: 5,
    y: -4,
    transition:{
      type:"spring",
      stiffness:260,
      damping:18
    }
  }}

  transition={{
  y: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
  rotate: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}

    className="
      absolute

      w-56
h-56

      rounded-full

      bg-pink-500/40

      blur-[90px]
    "
  />

  {/* Contenedor */}

  <motion.div
  animate={{
    y: [0, -6, 0],
    rotate: [0, 4, -4, 0],
  }}

 whileHover={{
   scale:1.08,
   rotate:5,
   y:-4,
   transition:{
      type:"spring",
      stiffness:260,
      damping:18
   }
}}
  

  className="
    relative
    rounded-[24px]
    p-[3px]
    bg-gradient-to-br
    from-pink-500
    via-violet-500
    to-cyan-400
  "
>

    <div
      className="
        rounded-[22px]

        bg-[#12081b]

        p-4
      "
    >

      <Image
        src={logo}
        alt={team}
        width={120}
        height={120}
        className="
          h-24
          w-24

          object-contain
        "
      />

    </div>

  </motion.div>

</div>



        {/* ============================================================
    Team Info
============================================================ */}

<div
  className="
    relative
    z-20

    flex
    flex-col
    items-center

    text-center

    [transform:translateZ(80px)]

  "
>


  {/* Nombre */}

  <motion.h3

    layout
    
    style={{
WebkitTextStroke:"0.4px rgba(255,255,255,.15)"
}}

whileHover={{
      letterSpacing: "0.18em",
    }}

    transition={{
      type: "spring",
      stiffness: 250,
      damping: 18,
    }}

    className="
      text-4xl

      font-black

      uppercase

      tracking-[0.12em]

      bg-gradient-to-r

      from-white
      via-pink-200
      to-cyan-200

      bg-clip-text
      drop-shadow-[0_0_25px_rgba(236,72,153,.35)]

      text-transparent
    "

  >

    {team}

  </motion.h3>

  {/* Separador */}

  <div
    className="
      mt-3

      h-px
      w-40

      bg-gradient-to-r

      from-transparent
      via-pink-400/70
      to-transparent
    "
  />

  {/* Estado */}

  <motion.p

    layout

    className="
      mt-4

      text-[11px]

      uppercase

      tracking-[0.45em]

      text-white/65
    "

  >

    {open ? "Roster Abierto" : "Click para ver roster"}

    </motion.p>


    <motion.div

animate={{
rotate:open?180:0
}}

className="
mt-4
text-white/50
text-xl
"

>

⌄

</motion.div>

</div>



         {/* ============================================================
    Expandable Roster
============================================================ */}

<AnimatePresence initial={false}>

  {open && (

    <motion.div

      key="roster"

      initial={{
        height: 0,
        opacity: 0,
      }}

      animate={{
        height: "auto",
        opacity: 1,
      }}

      exit={{
        height: 0,
        opacity: 0,
      }}

      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}

      className="
        overflow-hidden
      "

    >

      {/* Separador */}

      <motion.div

        initial={{ scaleX: 0 }}

        animate={{ scaleX: 1 }}

        exit={{ scaleX: 0 }}

        transition={{
          delay: 0.05,
          duration: 0.4,
        }}

        className="
          mx-auto
          mt-8
          mb-6

          h-px
          w-full

          origin-center

          bg-gradient-to-r

          from-transparent
          via-pink-500/70
          to-transparent
        "
      />

      {/* Lista */}

      <motion.div

        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}

        initial="hidden"

        animate="show"

        className="
          flex
          flex-col

          gap-3
        "

      >

        {roster.map((player, index) => (

          <motion.div

            key={player.id ?? index}

            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.95,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}

            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}

            className="
rounded-2xl
border
border-white/10
bg-gradient-to-r
from-white/[0.05]
to-white/[0.02]
backdrop-blur-xl
px-4
py-3
transition-all
duration-300
hover:scale-[1.03]
hover:border-pink-400/30
hover:bg-white/[0.08]
"

          >

            <div className="flex items-center justify-between">

              <span className="font-semibold text-white">

                {player.name}

              </span>

              <span className="text-xs text-white/60 uppercase">

                {player.role}

              </span>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </motion.div>

  )}


        </AnimatePresence>

      </motion.div>

    </motion.div>

  )

}