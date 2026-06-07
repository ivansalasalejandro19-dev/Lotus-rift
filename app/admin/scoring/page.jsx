"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function ScoringPage() {
  const [loading, setLoading] = useState(true);
  const [scoring, setScoring] = useState({});

  useEffect(() => {
    loadScoring();
  }, []);

  async function loadScoring() {
    const snap = await getDoc(
      doc(db, "scoring", "official")
    );

    if (snap.exists()) {
      setScoring(snap.data());
    }

    setLoading(false);
  }

  async function saveScoring() {
    await updateDoc(
      doc(db, "scoring", "official"),
      scoring
    );

    alert("Puntuación guardada correctamente.");
  }

  if (loading) {
    return (
      <div className="text-3xl text-white">
        Cargando...
      </div>
    );
  }

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Puntuación
        </h1>

        <p className="text-zinc-400 mt-2">
          Edita los puntos que vale cada predicción.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

        {Object.keys(scoring).map((key) => (

          <div
            key={key}
            className="rounded-2xl bg-white/5 border border-white/10 p-5"
          >

            <label className="block mb-2 font-bold capitalize">
              {key}
            </label>

            <input
              type="number"
              value={scoring[key]}
              onChange={(e) =>
                setScoring({
                  ...scoring,
                  [key]: Number(e.target.value),
                })
              }
              className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
            />

          </div>

        ))}

      </div>

      <button
        onClick={saveScoring}
        className="mt-8 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-2xl font-bold"
      >
        💾 Guardar cambios
      </button>

    </div>
  );
}