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
  animate={{
    opacity: 1,
    y: 0,
    backgroundPosition: ["0%", "100%", "0%"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
  style={{
    backgroundSize: "200% 200%",
  }}
  className="
    text-6xl
    md:text-8xl
    font-black
    tracking-[0.25em]
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
      <section className="relative max-w-7xl mx-auto px-4 pb-32">
        <div className="space-y-12">

          {paginas.map((pagina, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900 shadow-[0_0_50px_rgba(236,72,153,0.18)]
group-hover:shadow-[0_0_90px_rgba(236,72,153,0.4)]
transition-all
duration-500">

    <div className="absolute top-6 right-6 z-10">
  <div className="
    px-4
    py-2
    rounded-full
    bg-black/70
    backdrop-blur-xl
    border
    border-pink-500/20
    text-pink-300
    font-bold
  ">
    {index + 1} / {paginas.length}
  </div>
</div>
                <img
                  src={pagina}
                  alt={`Reglamento página ${index + 1}`}
                  className="w-full h-auto transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </motion.div>
          ))}

          <div className="fixed inset-0 overflow-hidden pointer-events-none">

  <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full blur-sm animate-pulse" />

  <div className="absolute top-96 right-32 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-pulse" />

  <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-fuchsia-400 rounded-full blur-sm animate-pulse" />

</div>

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