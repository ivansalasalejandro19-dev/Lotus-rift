import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
