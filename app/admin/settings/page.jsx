"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);

  const [settings, setSettings] = useState({
    pickemsLocked: false,
    resultsPublished: false,
    rankingVisible: false,
    maintenance: false,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const ref = doc(db, "settings", "tournament");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setSettings(snap.data());
    }

    setLoading(false);
  }

  async function saveSettings() {
    const ref = doc(db, "settings", "tournament");

    await updateDoc(ref, settings);

    alert("Configuración guardada correctamente.");
  }

  function toggle(key) {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  if (loading) {
    return (
      <div className="text-white text-3xl">
        Cargando...
      </div>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-black mb-8">
        Configuración del torneo
      </h1>

      <div className="space-y-4">

        <div className="flex justify-between bg-white/5 p-5 rounded-2xl">
          <span>🔒 Bloquear Pick'Em</span>

          <input
            type="checkbox"
            checked={settings.pickemsLocked}
            onChange={() => toggle("pickemsLocked")}
          />
        </div>

        <div className="flex justify-between bg-white/5 p-5 rounded-2xl">
          <span>🏆 Publicar resultados</span>

          <input
            type="checkbox"
            checked={settings.resultsPublished}
            onChange={() => toggle("resultsPublished")}
          />
        </div>

        <div className="flex justify-between bg-white/5 p-5 rounded-2xl">
          <span>🥇 Mostrar ranking</span>

          <input
            type="checkbox"
            checked={settings.rankingVisible}
            onChange={() => toggle("rankingVisible")}
          />
        </div>

        <div className="flex justify-between bg-white/5 p-5 rounded-2xl">
          <span>🚧 Modo mantenimiento</span>

          <input
            type="checkbox"
            checked={settings.maintenance}
            onChange={() => toggle("maintenance")}
          />
        </div>

      </div>

      <button
        onClick={saveSettings}
        className="mt-8 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-2xl font-bold"
      >
        Guardar cambios
      </button>

    </div>
  );
}