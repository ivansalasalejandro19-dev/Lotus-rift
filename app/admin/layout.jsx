"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
{ name: "Dashboard", href: "/admin", icon: "🏠" },
{ name: "Usuarios", href: "/admin/users", icon: "👥" },
{ name: "Resultados", href: "/admin/results", icon: "🏆" },
{ name: "Puntuación", href: "/admin/scoring", icon: "💰" },
{ name: "Ranking", href: "/admin/ranking", icon: "🥇" },
{ name: "Configuración", href: "/admin/settings", icon: "⚙️" },
{ name: "Calcular Scores", href: "/admin/calculate", icon: "🧮" }
];

export default function AdminLayout({ children }) {
const pathname = usePathname();

return (
<div className="min-h-screen bg-zinc-950 text-white flex">

  <aside className="w-72 border-r border-white/10 bg-black/20 p-6">

    <h1 className="text-3xl font-black mb-10">
      Pick'Em Admin
    </h1>

    <nav className="space-y-2">

      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 rounded-xl p-3 transition ${
            pathname === item.href
              ? "bg-pink-500 text-white"
              : "hover:bg-white/10"
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}

    </nav>

  </aside>

  <main className="flex-1 p-8">
    {children}
  </main>

</div>

);
}