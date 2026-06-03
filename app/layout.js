import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lotus Rift | Torneo Competitivo de League of Legends",
  description:
    "Lotus Rift es un torneo competitivo de League of Legends para la comunidad LATAM. Sigue el bracket, resultados, equipos, predicciones y transmisiones en vivo.",
  keywords: [
    "League of Legends",
    "LoL",
    "Torneo League of Legends",
    "Esports",
    "Esports LATAM",
    "Gaming Mexico",
    "Torneo LoL",
    "Bracket LoL",
    "Lotus Rift",
    "Lotus Rift Tournament",
    "League of Legends LAN",
    "Predicciones LoL",
    "Comunidad Gamer",
    "League Tournament",
    "LAN Tournament"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050108] text-white">

        <AuthProvider>

          {/* ⚡ NAVBAR ULTRA (SIN ROMPER TU APP) */}
          <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">

  {/* 🌌 capa glow detrás */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-purple-600/20 blur-[120px]" />
  <div className="absolute top-0 right-1/3 w-[400px] h-[100px] bg-cyan-400/10 blur-[100px]" />

  {/* 🧿 barra */}
  <div className="relative flex items-center gap-2 px-3 py-2 rounded-2xl
                  bg-black/40 backdrop-blur-xl
                  border border-white/10
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]">

    {/* ✨ partículas */}
    <span className="absolute -top-1 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
    <span className="absolute top-6 right-10 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
    <span className="absolute bottom-1 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-bounce" />

    {/* LINKS */}
    <Link
      href="/"
      className="px-5 py-2 rounded-xl text-sm text-white/60 hover:text-white
                 hover:bg-white/10 transition-all duration-200"
    >
      Inicio
    </Link>

    <Link
      href="/brackets"
      className="px-5 py-2 rounded-xl text-sm text-white/60 hover:text-white
                 hover:bg-white/10 transition-all duration-200"
    >
      Bracket
    </Link>

    <Link
      href="/pickem"
      className="px-5 py-2 rounded-xl text-sm text-white/60 hover:text-white
                 hover:bg-white/10 transition-all duration-200"
    >
      Pick'Em
    </Link>

  </div>
</nav>

          {/* 📦 CONTENIDO */}
          <main className="pt-24 flex-1">
            {children}
          </main>

        </AuthProvider>

      </body>
    </html>
  );
}