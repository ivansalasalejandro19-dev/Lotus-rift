"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/app/lib/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [official, setOfficial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newScore, setNewScore] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const userSnap = await getDoc(doc(db, "pickems", id));
    const officialSnap = await getDoc(doc(db, "results", "official"));

    if (userSnap.exists()) {
  const data = userSnap.data();

  setUser(data);

  setNewScore(data.score || 0);
}

    if (officialSnap.exists()) setOfficial(officialSnap.data());

    setLoading(false);
  }

  function correct(a, b) {
    
    async function saveScore() {
  await updateDoc(
    doc(db, "pickems", id),
    {
      score: Number(newScore),
    }
  );

  await loadData();

alert("Score actualizado correctamente");
}
    
    return (
      String(a || "").trim().toLowerCase() ===
      String(b || "").trim().toLowerCase()
    );
  }

  async function recalculateScore() {

  const scoringSnap = await getDoc(
    doc(db, "scoring", "official")
  );

  const officialSnap = await getDoc(
    doc(db, "results", "official")
  );

  const scoring = scoringSnap.data();

  const official = officialSnap.data();

  const score = calculateScore(
    user,
    official,
    scoring
  );

  await updateDoc(
    doc(db, "pickems", id),
    {
      score,
    }
  );

  setNewScore(score);

  await loadData();

  alert("Score recalculado.");
}

async function deletePickem() {

  const confirmDelete = confirm(
    "¿Seguro que quieres eliminar este Pick'Em?"
  );

  if (!confirmDelete) return;

  await deleteDoc(
    doc(db, "pickems", id)
  );

  alert("Pick'Em eliminado.");

  window.location.href = "/admin/users";
}

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Cargando...
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Usuario no encontrado
      </div>
    );

  return (
    <div className="space-y-8">

      <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

        <h1 className="text-5xl font-black mb-6">
          {user.username}
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <span className="font-bold">
              UID:
            </span>{" "}
            {user.uid}
          </div>

          <div>
            <span className="font-bold">
              Score:
            </span>{" "}
            {user.score}
          </div>

          <div>
            <span className="font-bold">
              Estado:
            </span>{" "}
            {user.locked ? "🔒 Bloqueado" : "🟢 Abierto"}
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

  <h2 className="text-3xl font-bold mb-6">
    Administrar Pick'Em
  </h2>

  <div className="flex flex-wrap gap-4 items-center">

    <input
      type="number"
      value={newScore}
      onChange={(e) => setNewScore(e.target.value)}
      className="bg-black/20 border border-white/10 rounded-xl p-3 w-40"
    />

    <button
      onClick={saveScore}
      className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-bold"
    >
      💾 Guardar Score
    </button>

    <button
      onClick={recalculateScore}
      className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-bold"
    >
      🔄 Recalcular
    </button>

    <button
      onClick={deletePickem}
      className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl font-bold"
    >
      🗑️ Eliminar
    </button>

  </div>

</div>

        </div>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

        <h2 className="text-3xl font-bold mb-6">
          Bracket
        </h2>

        <div className="space-y-3">

          <div className={correct(user.bracket.champion, official?.bracket?.champion) ? "text-green-400" : "text-red-400"}>
            🏆 Campeón: {user.bracket.champion}
          </div>

          <h3 className="text-xl font-bold mt-6">
            Semifinales
          </h3>

          {Object.entries(user.bracket.semis || {}).map(([key, value]) => (
            <div
              key={key}
              className={correct(value, official?.bracket?.semis?.[key]) ? "text-green-400" : "text-red-400"}
            >
              {key}: {value}
            </div>
          ))}

          <h3 className="text-xl font-bold mt-6">
            Cuartos
          </h3>

          {Object.entries(user.bracket.quarters || {}).map(([key, value]) => (
            <div
              key={key}
              className={correct(value, official?.bracket?.quarters?.[key]) ? "text-green-400" : "text-red-400"}
            >
              {key}: {value}
            </div>
          ))}

          <h3 className="text-xl font-bold mt-6">
            Octavos
          </h3>

          {Object.entries(user.bracket.round16 || {}).map(([key, value]) => (
            <div
              key={key}
              className={correct(value, official?.bracket?.round16?.[key]) ? "text-green-400" : "text-red-400"}
            >
              {key}: {value}
            </div>
          ))}

        </div>

      </div>

      <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

        <h2 className="text-3xl font-bold mb-6">
          Crystal Ball
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {Object.entries(user.crystalBall || {}).map(([key, value]) => (
            <div
            key={key}
              className={`rounded-xl p-4 border ${
                correct(value, official?.crystalBall?.[key])
                  ? "border-green-500 bg-green-500/10"
                  : "border-red-500 bg-red-500/10"
              }`}
            >

              <div className="font-bold mb-2">
                {key}
              </div>

              <div>
                {String(value)}
              </div>

              <div className="text-xs mt-3 opacity-70">
                Oficial: {String(official?.crystalBall?.[key] || "-")}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}