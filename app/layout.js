import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { Contrail_One } from "next/font/google";

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
    "LAN Tournament",
  ],
  other: {
    google: "notranslate",
  },
};

export const contrailOne = contrailOne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-contrailOne"
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      translate="no"
     className={`${geistSans.variable} ${geistMono.variable} ${contrailOne.variable} h-full antialiased`}
     >
      <body
  translate="no"
  className={`
    ${contrailOne.variable}
    min-h-full
    flex
    flex-col
    bg-[#050108]
    text-white
  `}
>
        <AuthProvider>
          <Navbar />

          <main className="pt-24 flex-1">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}