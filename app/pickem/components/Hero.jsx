'use client'

export default function Hero() {
  return (
    <section className="relative px-8 lg:px-20 py-24">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 text-center">

        <div className="text-8xl mb-8">
          🪷
        </div>

        <h1 className="text-6xl md:text-8xl font-black">
          LOTUS
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300">
            PICK'EM
          </span>
        </h1>

        <p className="mt-8 text-white/60 text-xl max-w-3xl mx-auto">
          Predice el futuro del torneo y compite contra toda la comunidad.
        </p>

      </div>

    </section>
  )
}