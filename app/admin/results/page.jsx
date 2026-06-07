"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function ResultsPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    const snap = await getDoc(doc(db, "results", "official"));

    if (snap.exists()) {
      setResults(snap.data());
    }

    setLoading(false);
  }

  async function save() {
    await updateDoc(doc(db, "results", "official"), results);

    alert("Resultados guardados correctamente.");
  }

  if (loading || !results)
    return (
      <div className="text-white text-3xl">
        Cargando...
      </div>
    );

  return (
    <div className="space-y-10">

      <div>

        <h1 className="text-5xl font-black">
          Resultados Oficiales
        </h1>

        <p className="text-zinc-400">
          Edita el bracket y Crystal Ball.
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

        <h2 className="text-3xl font-bold mb-6">
          Bracket
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label>Campeón</label>

            <input
              value={results.champion || ""}
              onChange={(e) =>
                setResults({
                  ...results,
                  bracket: {
                    ...results.bracket,
                    champion: e.target.value,
                  },
                })
              }
              className="w-full mt-2 p-3 rounded-xl bg-black/20 border border-white/10"
            />

          </div>

        </div>

      </div>

      <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

        <h2 className="text-3xl font-bold mb-6">
          Crystal Ball
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {Object.keys(results.crystalBall).map((key) => (

            <div key={key}>

              <label className="capitalize">
                {key}
              </label>

              <input
                value={results.crystalBall[key]}
                onChange={(e) =>
                  setResults({
  ...results,
  champion: e.target.value,
})
                }
                className="w-full mt-2 p-3 rounded-xl bg-black/20 border border-white/10"
              />

            </div>

          ))}

        </div>

      </div>

      <button
        onClick={save}
        className="bg-pink-500 hover:bg-pink-600 transition px-10 py-4 rounded-2xl font-bold"
      >
        💾 Guardar resultados
      </button>

    </div>
  );
}