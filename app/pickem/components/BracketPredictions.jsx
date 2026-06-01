'use client'

export default function BracketPredictions() {
  return (
    <section className="px-8 lg:px-20 pb-24">

      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
          Knockout Stage
        </p>

        <h2 className="text-5xl font-black">
          Bracket Predictions
        </h2>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12">

        <div className="grid lg:grid-cols-4 gap-8">

          <div>
            <h3 className="font-black mb-4">
              Octavos
            </h3>
          </div>

          <div>
            <h3 className="font-black mb-4">
              Cuartos
            </h3>
          </div>

          <div>
            <h3 className="font-black mb-4">
              Semifinal
            </h3>
          </div>

          <div>
            <h3 className="font-black mb-4">
              Final
            </h3>
          </div>

        </div>

      </div>

    </section>
  )
}