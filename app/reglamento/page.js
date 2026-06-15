"use client"

import { motion } from "framer-motion"

const paginas = [
  "/reglamento/1.jpg",
  "/reglamento/2.jpg",
  "/reglamento/3.jpg",
  "/reglamento/4.jpg",
  "/reglamento/5.jpg",
  "/reglamento/6.jpg",
  "/reglamento/7.jpg",
  "/reglamento/8.jpg",
  "/reglamento/9.jpg",
  "/reglamento/10.jpg",
  "/reglamento/11.jpg",
]

export default function ReglamentoPage() {
  return (
    <main
  className="
    min-h-screen
    text-white
    overflow-hidden
    bg-zinc-950
    bg-[radial-gradient(circle_at_top,#ec489930,transparent_40%),radial-gradient(circle_at_bottom,#06b6d430,transparent_40%)]
  "
>
      
      {/* Fondo */}
      <div className="fixed inset-0 pointer-events-none">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-fuchsia-600/20 blur-[180px]" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[180px]" />
</div>

      {/* Header */}
      <section className="relative py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
text-6xl
md:text-8xl
font-black
tracking-widest
bg-gradient-to-r
from-pink-400
via-fuchsia-300
to-cyan-300
bg-clip-text
text-transparent
drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]
"
        >
          𝑅𝐸𝐺𝐿𝐴𝑀𝐸𝑁𝑇𝑂
        </motion.h1>

        <p className="
mt-4
text-lg
tracking-[0.4em]
bg-gradient-to-r
from-pink-300
to-cyan-300
bg-clip-text
text-transparent
font-semibold
">
          𝐿𝑜𝑡𝑢𝑠 𝑅𝑖𝑓𝑡
        </p>

        <div className="flex justify-center mt-8">

  <div className="
    h-[3px]
    w-56
    rounded-full
    bg-gradient-to-r
    from-transparent
    via-pink-500
    to-transparent
  " />

</div>
      </section>

     {/* Páginas */}
<section className="relative w-full pb-40">

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-pink-500/5 blur-[250px]" />
  </div>

  <div className="space-y-24">

    {paginas.map((pagina, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative"
      >

        {/* Decoración superior */}
        <div className="flex justify-center mb-6">
          <div
            className="
              h-px
              w-96
              bg-gradient-to-r
              from-transparent
              via-pink-500/50
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            w-[95vw]
            max-w-[1400px]
            rounded-[32px]
            overflow-hidden

            border
            border-pink-500/20

            bg-zinc-900

            shadow-[0_0_80px_rgba(236,72,153,0.15)]

            group-hover:shadow-[0_0_120px_rgba(236,72,153,0.35)]

            transition-all
            duration-700
          "
        >

          {/* Marco interno */}
          <div className="absolute inset-4 rounded-[24px] border border-white/10 pointer-events-none z-10" />

          {/* Esquinas decorativas */}
          <div className="absolute top-4 left-4 w-10 h-10 border-l border-t border-pink-400/40 z-10" />
          <div className="absolute top-4 right-4 w-10 h-10 border-r border-t border-pink-400/40 z-10" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-l border-b border-pink-400/40 z-10" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b border-pink-400/40 z-10" />

          <img
            src={pagina}
            alt={`Reglamento página ${index + 1}`}
            loading="lazy"
            draggable={false}
            className="
              w-full
              h-auto
              block

              transition-all
              duration-700

              group-hover:scale-[1.01]
            "
          />

        </div>

        {/* Número de página */}
        <div className="flex justify-center mt-8">

          <div
            className="
              px-6
              py-2
              rounded-full

              border
              border-pink-500/20

              bg-black/30
              backdrop-blur-xl

              text-sm
              tracking-[0.3em]
              text-pink-300
            "
          >
            PÁGINA {index + 1}
          </div>

        </div>

      </motion.div>
    ))}

  </div>

</section>
      
      <footer className="relative py-20 text-center">

  <h3
    className="
      text-3xl
      font-black
      bg-gradient-to-r
      from-pink-400
      via-fuchsia-300
      to-cyan-300
      bg-clip-text
      text-transparent
    "
  >
    𝐿𝑂𝑇𝑈𝑆 𝑅𝐼𝐹𝑇
  </h3>

  <p className="text-zinc-500 mt-3">
    𝑅𝑒𝑔𝑙𝑎𝑚𝑒𝑛𝑡𝑜 𝑂𝑓𝑖𝑐𝑖𝑎𝑙 𝑑𝑒𝑙 𝑇𝑜𝑟𝑛𝑒𝑜
  </p>

</footer>

    </main>
  )
}