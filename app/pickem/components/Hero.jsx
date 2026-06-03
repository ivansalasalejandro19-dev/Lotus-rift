'use client'

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-24 overflow-hidden">

      {/* 🌌 Glow central vivo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* ✨ partículas simples flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-cyan-300/40 rounded-full animate-ping" />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-bounce" />
      </div>

      {/* 🧿 Contenido principal */}
      <div className="relative z-10 max-w-3xl px-4">

        {/* Título con “respiración” */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-pulse">
          The Oracle Picks
        </h1>

        {/* Subtítulo con fade suave */}
        <p className="mt-6 text-lg text-white/70 animate-[pulse_4s_ease-in-out_infinite]">
          Predictions flow through the crystal. Trust the system.
        </p>

        {/* Botón místico */}
        <div className="mt-10">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-200">
            Enter the Oracle
          </button>
        </div>

      </div>
    </section>
  )
}