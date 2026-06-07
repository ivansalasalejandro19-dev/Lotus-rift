"use client";

import { useState } from "react";

import { db } from "@/app/lib/firebase";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { calculateScore } from "@/app/lib/calculateScore";

export default function CalculatePage() {
  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState(0);
  const [total, setTotal] = useState(0);

  async function calculateAllScores() {
    try {
      setLoading(true);
      setProcessed(0);

      const resultsSnap = await getDoc(
        doc(db, "results", "official")
      );

      const scoringSnap = await getDoc(
        doc(db, "scoring", "official")
      );

      const official = resultsSnap.data();
      const scoring = scoringSnap.data();

      const pickemsSnap = await getDocs(
        collection(db, "pickems")
      );

      setTotal(pickemsSnap.size);

      for (const pickemDoc of pickemsSnap.docs) {
        const user = pickemDoc.data();

        const score = calculateScore(
          user,
          official,
          scoring
        );

        await updateDoc(
          doc(db, "pickems", pickemDoc.id),
          {
            score,
          }
        );

        setProcessed((prev) => prev + 1);
      }

      alert("Puntuaciones calculadas correctamente.");

    } catch (e) {
      console.error(e);
      alert("Ocurrió un error.");
    }

    setLoading(false);
  }

  return (
    <div>

      <h1 className="text-5xl font-black mb-3">
        Calcular puntuaciones
      </h1>

      <p className="text-zinc-400 mb-10">
        Recorre todos los Pick'Em y actualiza el score.
      </p>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

        <div className="text-2xl mb-6">

          Procesados:

          <span className="font-black ml-2">

            {processed} / {total}

          </span>

        </div>

        <button
          disabled={loading}
          onClick={calculateAllScores}
          className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 disabled:opacity-50 transition font-bold text-xl"
        >
          {loading
            ? "Calculando..."
            : "🧮 Calcular puntuaciones"}
        </button>

      </div>

    </div>
  );
}