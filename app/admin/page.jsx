"use client";

import Link from "next/link";

export default function AdminPage() {
  const cards = [
    {
      title: "👥 Usuarios",
      desc: "Ver todos los Pick'Em enviados",
      href: "/admin/users",
    },
    {
      title: "🏆 Resultados",
      desc: "Editar resultados oficiales",
      href: "/admin/results",
    },
    {
      title: "💰 Puntuación",
      desc: "Editar cuánto vale cada acierto",
      href: "/admin/scoring",
    },
    {
      title: "🥇 Ranking",
      desc: "Ver clasificación global",
      href: "/admin/ranking",
    },
    {
      title: "⚙️ Configuración",
      desc: "Bloquear Pick'Em y publicar resultados",
      href: "/admin/settings",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">

      <h1 className="text-5xl font-black mb-2">
        Panel de Administración
      </h1>

      <p className="text-zinc-400 mb-10">
        Centro de control del Pick'Em
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <h2 className="text-2xl font-bold mb-2">
              {card.title}
            </h2>

            <p className="text-zinc-400">
              {card.desc}
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}