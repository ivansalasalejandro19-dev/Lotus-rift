"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export default function RankingPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadRanking();
  }, []);

  async function loadRanking() {
    const snap = await getDocs(collection(db, "pickems"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    data.sort((a, b) => (b.score || 0) - (a.score || 0));

    setPlayers(data);
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-black">
            Ranking
          </h1>

          <p className="text-zinc-400">
            Clasificación general
          </p>

        </div>

        <button
          onClick={loadRanking}
          className="bg-pink-500 px-6 py-3 rounded-xl font-bold"
        >
          Actualizar
        </button>

      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-4 text-left">#</th>

              <th className="p-4 text-left">Usuario</th>

              <th className="p-4 text-left">Score</th>

              <th className="p-4 text-left">Estado</th>

            </tr>

          </thead>

          <tbody>

            {players.map((player, index) => (

              <tr
                key={player.id}
                className="border-t border-white/10 hover:bg-white/5"
              >

                <td className="p-4 font-bold">

                  {index === 0 && "🥇"}

                  {index === 1 && "🥈"}

                  {index === 2 && "🥉"}

                  {index > 2 && index + 1}

                </td>

                <td className="p-4">

                  {player.username}

                </td>

                <td className="p-4 font-bold">

                  {player.score || 0}

                </td>

                <td className="p-4">

                  {player.locked ? "🔒" : "🟢"}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}