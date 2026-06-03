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

            <div className="flex items-center gap-1 px-2 py-2 rounded-2xl 
                            border border-white/10 
                            bg-black/30 backdrop-blur-xl
                            shadow-[0_0_40px_rgba(0,0,0,0.4)]">

              <Link
                href="/"
                className="px-5 py-2 text-sm text-white/60 hover:text-white transition"
              >
                Inicio
              </Link>

              <Link
                href="/brackets"
                className="px-5 py-2 text-sm text-white/60 hover:text-white transition"
              >
                Bracket
              </Link>

              <Link
                href="/pickem"
                className="px-5 py-2 text-sm text-white/60 hover:text-white transition"
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