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
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      
      {/* Fondo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ec489955,transparent_60%)]" />

      {/* Header */}
      <section className="relative py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-widest"
        >
          𝑅𝐸𝐺𝐿𝐴𝑀𝐸𝑁𝑇𝑂
        </motion.h1>

        <p className="mt-4 text-zinc-400 text-lg tracking-[0.3em]">
          LOTUS RIFT
        </p>

        <div className="mx-auto mt-8 h-1 w-40 rounded-full bg-pink-500" />
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
              <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900 shadow-[0_0_40px_rgba(236,72,153,0.15)]">
                <img
                  src={pagina}
                  alt={`Reglamento página ${index + 1}`}
                  className="w-full h-auto transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  )
}