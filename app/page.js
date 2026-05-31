'use client'

import LoginButton from "./components/LoginButton"
import { Disc3 } from "lucide-react"
import { useEffect, useState } from "react"
import {
  signInWithPopup
} from "firebase/auth"

import {
  auth,
  discordProvider
} from "./lib/firebase"
export default function LotusRiftTournamentPage() {

  const [openTeam, setOpenTeam] = useState(null)
  const [discordUser, setDiscordUser] = useState(null)

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lotus_user="))

    if (!cookie) return

    try {
      const user = JSON.parse(
        decodeURIComponent(cookie.split("=")[1])
      )

      setDiscordUser(user)
    } catch (err) {
      console.error(err)
    }
  }, [])

  const tournamentInfo = {
    name: '🪷 LOTUS RIFT 🪷',
    subtitle: 'Torneo LAN',
    description: '',
    season: 'S',
    pricepool: '180 USDT',
    players: '16 Equipos',
    status: 'INSCRIPCIONES CERRADAS',
    startTime: '19:00 PM MX'
  }


  // =============================
  // EDITÁ TODO DESDE ACÁ
  // =============================


  const bracketLink = 'https://tus-brackets.com'
  const discordLink = 'https://discord.gg/nVyrHkeCn5'


 // ======================================================
// LOGOS OFICIALES
// ======================================================
//
// GUARDAR TODOS LOS LOGOS EN:
//
// /public/logos/
//
// EJEMPLOS:
//
// /public/logos/equipo1.png
// /public/logos/equipo2.png
//
// ======================================================

const teamLogos = {

  // Sᴍᴀᴄᴋᴅᴏᴡɴ
  'Sᴍᴀᴄᴋᴅᴏᴡɴ': '/logos/smackdown.png',

  // T502
  'T502': '/logos/T502.png',

  // Rokurominos
  'Rokurominos': '/logos/rku.png',

  // overextended
  'overextended': '/logos/overextended.png',

  // Huesitos Proyect
  'Huesitos Proyect': '/logos/huesitos.png',

  // HaTsu
  'HaTsu': '/logos/hatsu.png',

  // Golden Dragons
  'Golden Dragons': '/logos/golden_dragons.png',

  // Nahuales
  'Nahuales': '/logos/nahuales.png',

  // Ice Gold
  'Ice Gold': '/logos/ice_gold.png',

  // ÆSIIR Go Legends
  'ÆSIIR Go Legends': '/logos/ae_siir_go_legends.png',

  // Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs
  'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs': '/logos/shadow_reapers.png',

  // Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ
  'Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ': '/logos/new_alliance.png',

  // Fʟᴀᴡʟᴇss
  'Fʟᴀᴡʟᴇss': '/logos/flawless.png',

  // Secret Society
  'Secret Society': '/logos/secret_society.png',

  // Cosa nostra
  'Cosa nostra': '/logos/cosa_nostra.png',

  // Joyita Gaming
  'Joyita Gaming': '/logos/joyita_gaming.png'

}


// ======================================================
// NOMBRES OFICIALES DE LOS EQUIPOS
// ======================================================
//
// IMPORTANTE:
// EL NOMBRE DEBE SER EXACTAMENTE IGUAL
// AL DEL ROSTER Y TEAMLOGOS
//
// ======================================================

const teams = [

  'Sᴍᴀᴄᴋᴅᴏᴡɴ',
  'T502',
  'Rokurominos',
  'overextended',
  'Huesitos Proyect',
  'HaTsu',
  'Golden Dragons',
  'Nahuales',
  'Ice Gold',
  'ÆSIIR Go Legends',
  'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs',
  'Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ',
  'Fʟᴀᴡʟᴇss',
  'Secret Society',
  'Cosa nostra',
  'Joyita Gaming'

]


// ======================================================
// ROSTERS OFICIALES
// ======================================================
//
// captain: true = coronita 👑
//
// ROLES:
//
// TOP
// JUNGLA
// MID
// ADC
// SUP
// SUPLENTE
//
// TODOS LOS EQUIPOS:
// 5 TITULARES
// 1 SUPLENTE
//
// ======================================================

const roster = {


  // ======================================================
  // Sᴍᴀᴄᴋᴅᴏᴡɴ
  // ======================================================

  'Sᴍᴀᴄᴋᴅᴏᴡɴ': [

    // TOP
    {
      id: 'QQl#KKXX',
      role: 'TOP'
    },

    // JUNGLA
    {
      id: 'Zen#Odev',
      role: 'JUNGLA',
      captain: true
    },

    // MID
    {
      id: 'SD Zoldk#mid',
      role: 'MID',
    },

    // ADC
    {
      id: 'Hakuuuuuiiiii#True',
      role: 'ADC'
    },

    // SUPPORT
    {
      id: 'Sunny CSS#Hope',
      role: 'SUP'
    },

    // SUPLENTE
    {
      id: 'banshoot3rve#2802',
      role: 'SUPLENTE'
    }, 
    
    {
      id: 'Addy#Moon',
      role: 'SUPLENTE 2'
    }

  ],


  // ======================================================
  // T502
  // ======================================================

  'T502': [

    {
      id: 'playerslinky#5799',
      role: 'TOP'
    },

    {
      id: '愛 Liu Kam 愛#馬圖爾',
      role: 'JUNGLA',
    
    },

    {
      id: 'LW TheAngel#8589',
      role: 'MID'
    },

    {
      id: 'G0DZILLAKN1GHT#8650',
      role: 'ADC'
    },

    {
      id: 'lilO#8593',
      role: 'SUP'
    },

    {
      id: 'Nahomi#Naø',
      role: 'SUPLENTE',
      captain: true
    }, 
    
    {
      id: 'Azzel#7331',
      role: 'SUPLENTE 2'
    }

  ],


  // ======================================================
  // Rokurominos
  // ======================================================

  'Rokurominos': [
    {
    id: 'Better#lvysf',
     role: 'TOP'
    },
     
    {
      id: 'SojaCarbo#1830',
      role: 'JUNGLA'
    }, 
    
    {
      id: 'Dropex13#LAN',
      role: 'MID',
    }, 
    
    {
      id: 'Mata perros#Aletz',
      role: 'ADC',
    }, 
    
    {
      id: '루발  GawrNikho メ#lulu',
      role: 'SUP',
      captain: true
    }, 
    
    {}, {}
  ],


  // ======================================================
  // overextended
  // ======================================================

  'overextended': [
    {
      id: 'M3XC1T4#D1FF',
      role: 'TOP'
    }, 
    
    {
      id: 'Aplastador99#9247',
      role: 'JUNGLA',
      captain: true
    }, 
    
    {
      id: 'Passionfruit#GGmid',
      role: 'MID',
    },
    
    {
      id: 'Da Vinci#4034',
      role: 'ADC',
    }, 
    
    {
      id: 'sebdra#4417',
      role: 'SUP',
    }, 
    
    {
      id: 'Nexo Simon#7403',
      role: 'SUPLENTE',
    }, {}
  ],


  // ======================================================
  // Huesitos Proyect
  // ======================================================

  'Huesitos Proyect': [
    {
      id: 'junedvs#NBA',
      role: 'TOP'
    }, 
    
    {
      id: 'JACOP#JGL',
      role: 'JUNGLA',
    }, 
    
    {
      id: 'TikTokPrimordial#1103',
      role: 'MID',
    }, 
    
    {
      id: 'ID: I Blóód I#Moon',
      role: 'ADC',
    }, 
    
    {
      id: 'SpearDiff Marc#SMITE',
      role: 'SUP',
      captain: true
    }, {}, {}
  ],


  // ======================================================
  // HaTsu
  // ======================================================

  'HaTsu': [
    {
      id: 'HTS Unfair#9090',
      role: 'TOP',
      captain: true
    }, 
    
    {
      id: 'HTS JAYCE BALVIN#9828',
      role: 'JUNGLA',
    }, 
    
    {
      id: 'HTS Jochelo#1308',
      role: 'MID',
    }, 
    
    {
      id: ' HTS Jhintonic#Four',
      role: 'ADC',
    }, 
    
    {
      id: ' HTS Nacatamalita#nica',
      role: 'SUP',
    }, 
    
    {
      id: 'HTS PAN#hts',
      role: 'SUPLENTE',

    }, {}

  ],


  //======================================================
  // Golden Dragons
  // ======================================================

  'Golden Dragons': [
    {
      id: 'G7龙 Alejoo#Ñupra',
      role: 'TOP'
    }, 
    
    {
      id: 'Just Supra#Ling',
      role: 'JUNGLA'
    },
    
    {
      id: 'G7龙 Cheemz#ñupra',
      role: 'MID'
    }, 
    
    {
      id: 'Wirtz#Key',
      role: 'ADC'
    }, 
    
    {
      id: 'G7 Nestior#001',
      role: 'SUP'
    }, 
    
    {
      id: 'G7龙 ŽhêrØ#Ñupra',
      role: 'SUPLENTE',
      captain: true
    }, {}
  ],


  // ======================================================
  // Nahuales
  // ======================================================

  'Nahuales': [
    {}, {}, {}, {}, {}, {}, {}
  ],



  // ======================================================
  // Ice Gold
  // ======================================================

  'Ice Gold': [
    {
      id: 'G7 Lugia ツ#2502',
      role: 'TOP'
    }, 
    
    {
      id: 'G7 Vanderrr#Zzz',
      role: 'JUNGLA',
      captain: true
    }, 
    
    {
      id: '大綠色格林奇先生#Всегд',
      role: 'MID'
    }, 
    
    {
      id: 'Burbuja#Ice88',
      role: 'ADC'
    }, 
    
    {
      id: 'BKI Muss#CEO',
      role: 'SUP',
    },
    
    {
      id: 'G7 Aren Woka#Nea',
      role: 'SUPLENTE'
    }, 
    
    {
      id: 'G7 Tyki Pon#Mikk',
      role: 'SUPLENTE 2'
    }



  ],


  // ======================================================
  // ÆSIIR Go Legends
  // ======================================================

  'ÆSIIR Go Legends': [
    {
      id: 'Koer#fr15',
      role: 'TOP'
    }, 
    
    {
      id: 'Hxdès Pérez#3312',
      role: 'JUNGLA'
    }, 
    
    {
      id: 'Robi#Yuyu',
      role: 'MID'
    }, 
    
    {
      id: 'Kino 縁#0609',
      role: 'ADC'
    }, 
    
    {
      id: 'The Unforgiven#NoFun',
      role: 'SUP'
    }, 
    
    {
      id: 'Tiffany69#LAN',
      role: 'SUPLENTE'
    }, 
    
    {
      id: 'Who is Jxss愛#Kensy',
      role: 'SUPLENTE 2'
    }
  ],


  // ======================================================
  // Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs
  // ======================================================

  'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs': [
    {
      id: 'Ackerman 死 ツ#Azpi',
      role: 'TOP'
    }, 
    
    {
      id: 'SerCh#2000',
      role: 'JUNGLA'
    }, 
    
    {
      id: 'Arcament#maker',
      role: 'MID'
    }, 
    
    {
      id: 'KΞX償 D i a b l o#TOP',
      role: 'ADC'
    }, 
    
    {
      id: 'MarcecGD#LAS',
      role: 'SUP'
    }, 
    
    {
      id: 'Dreigun#龍EGO',
      role: 'SUPLENTE'
    }, {}
  ],


  // ======================================================
  // Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ
  // ======================================================

  'Nᴇᴡ ᴀʟʟɪᴀɴᴄᴇ': [
    {}, {}, {}, {}, {}, {}, {}
  ],


  // ======================================================
  // Fʟᴀᴡʟᴇss
  // ======================================================

  'Fʟᴀᴡʟᴇss': [
    {
      id: 'LR BausSon#2121',
      role: 'TOP'
    }, 
    
    {
      id: 'RitroxZ#RAZN',
      role: 'JUNGLA',
      captain: true
    }, 
    
    {
      id: 'Hide on LATAM#2517',
      role: 'MID'
    }, 
    
    {
      id: 'Anazthazia#CR420',
      role: 'ADC'
    }, 
    
    {
      id: 'Meffy#2195',
      role: 'SUP'
    }, 
    
    {
      id: 'Hide on WęęĐ#CRC',
      role: 'SUPLENTE'
    }, {}
  ],


  // ======================================================
  // Secret Society
  // ======================================================

  'Secret Society': [
    {
      id: 'EzLane DieGod ツ#Mich',
      role: 'TOP'
    }, 
    
    {
      id: 'Twitch EzGiaan#Poro',
      role: 'JUNGLA'
    }, 
    
    {
      id: 'SS Brocoli#Zoe',
      role: 'MID',
      captain: true
    }, 
    
    {
      id: 'Soujinn#ADC',
      role: 'ADC'
    }, 
    
    {
      id: 'SS Show#Kbras',
      role: 'SUP'
    }, 
    
    {
      id: 'KatEvolved#HWL',
      role: 'SUPLENTE'
    }, 
    
    {
      id: 'Andy#V2007',
      role: 'SUPLENTE 2'
    }
  ],


  // ======================================================
  // Cosa nostra
  // ======================================================

  'Cosa nostra': [
    {}, {}, {}, {}, {}, {}, {}
  ],


  // ======================================================
  // Joyita Gaming
  // ======================================================

  'Joyita Gaming': [
    {
      id: 'xHiroyukix#gamer',
      role: 'TOP'
    }, 
    
    {
      id: 'Jhon Wuju Alfa#Jhon',
      role: 'JUNGLA'
    }, 
    
    {
      id: 'Zerohz#NICA',
      role: 'MID'
    }, 
    
    {
      id: 'Luminous 고수#Kanto',
      role: 'ADC'
    }, 
    
    {
      id: 'Elophobia#0301',
      role: 'SUP'
    }, 
    
    {
      id: '莉莉丝丨EVE#XOXO ',
      role: 'SUPLENTE'
    }
  ]

}


  const schedule = [
    {
      date: '4 Julio',
      matches: 'Octavos 1, 2, 3 y 4',
      format: 'Bo1'
    },
    {
      date: '5 Julio',
      matches: 'Octavos 5, 6, 7 y 8',
      format: 'Bo1'
    },
    {
      date: '11 Julio',
      matches: 'Cuartos 1 y 2',
      format: 'Bo3'
    },
    {
      date: '12 Julio',
      matches: 'Cuartos 3 y 4',
      format: 'Bo3'
    },
    {
      date: '18 Julio',
      matches: 'Semifinal 1',
      format: 'Bo5'
    },
    {
      date: '19 Julio',
      matches: 'Semifinal 2',
      format: 'Bo5'
    },
    {
      date: '25 Julio',
      matches: 'Final',
      format: 'Bo5'
    }
  ]


  const matches = [
    {
      teamA: 'TBD',
      teamB: 'TBD',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'TBD',
      teamB: 'TBD',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'TBD',
      teamB: 'TBD',
      score: '0 - 0',
      status: 'Pendiente'
    },
    {
      teamA: 'TBD',
      teamB: 'TBD',
      score: '0 - 0',
      status: 'Pendiente'
    }
  ]


  const leaderboard = [
    { name: 'Equipo 1', points: 0 },
    { name: 'T502', points: 0 },
    { name: 'Rokurominos', points: 0 },
    { name: 'overextended', points: 0 }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09030f] via-[#14081f] to-[#050108] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-cyan-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>


      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.4em] text-pink-300">
            {tournamentInfo.name}
          </h1>


          <p className="text-pink-100/60 mt-2 text-sm tracking-[0.25em] uppercase">
            {tournamentInfo.subtitle}
          </p>
        </div>


        <div className="flex items-center gap-4">
  <LoginButton discordUser={discordUser} />
</div>  

      </header>


      {/* HERO */}
      <section className="relative z-10 px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-pink-500/20 bg-pink-500/10 mb-8 backdrop-blur-xl">
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />


            <span className="uppercase tracking-[0.3em] text-sm text-pink-100">
              {tournamentInfo.status}
            </span>
          </div>


          <h2 className="text-7xl md:text-8xl font-black leading-none">
            Lotus
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300">
              Rift
            </span>
          </h2>


          <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
            Unete a la comunidad de discord y disfruta del bracket en vivo.
          </p>


          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="/brackets"
              target="_blank"
              className="px-8 py-4 rounded-3xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 font-black text-lg hover:scale-105 transition shadow-2xl shadow-pink-500/30"
            >
              Entrar al bracket oficial
            </a>


            <a
              href="https://discord.gg/nVyrHkeCn5"
              target="_blank"
              className="px-8 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              Discord
            </a>
          </div>
        </div>


        <div className="relative flex justify-center items-center">
          <div className="absolute w-[450px] h-[450px] rounded-full border border-pink-300/10 animate-pulse" />


          <div className="relative w-[370px] h-[370px] rounded-full border border-white/10 bg-gradient-to-br from-pink-400/10 to-violet-500/20 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_100px_rgba(236,72,153,0.3)]">
            <div className="text-center px-6">
              <div className="text-8xl animate-pulse">🪷</div>


              <h3 className="text-4xl font-black mt-5 text-pink-200">
                Lotus arena
              </h3>


              <p className="mt-4 text-white/60 leading-relaxed">
                Donde el loto florece en combate.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="relative z-10 px-8 lg:px-20 grid md:grid-cols-4 gap-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Equipos
          </p>


          <h3 className="text-5xl font-black mt-3 text-pink-200">
            16
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Formato
          </p>


          <h3 className="text-3xl font-black mt-3 text-violet-200">
            5v5
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Inicio
          </p>


          <h3 className="text-3xl font-black mt-3 text-cyan-200">
            19:00
          </h3>
        </div>


        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
          <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
            Modalidad
          </p>


          <h3 className="text-2xl font-black mt-3 text-pink-200">
            Fearless
          </h3>
        </div>
      </section>


      {/* SCHEDULE */}
      <section id="cronograma" className="relative z-10 px-8 lg:px-20 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
            Calendario Oficial
          </p>


          <h3 className="text-5xl font-black mt-3">
            Cronograma
          </h3>
        </div>


        <div className="grid lg:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-3xl font-black text-pink-200">
                  {item.date}
                </h4>


                <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm">
                  {item.format}
                </div>
              </div>


              <p className="text-xl text-white/80 leading-relaxed">
                {item.matches}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* EQUIPOS */}
<section id="equipos" className="relative z-10 px-8 lg:px-20 pb-24">

  <div className="mb-12">
    <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
      Participantes
    </p>

    <h3 className="text-5xl font-black mt-3">
      Equipos
    </h3>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {teams.map((team, index) => (
      <div
        key={index}
        onClick={() => setOpenTeam(openTeam === team ? null : team)}
        className="relative cursor-pointer rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition text-center"
      >

      {/* LOTO */}
<div className="absolute top-3 left-3 text-3xl opacity-70">
  🪷
</div>

        {/* BOTÓN */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setOpenTeam(openTeam === team ? null : team)
          }}
          className="absolute top-3 right-3 text-xs bg-white/10 px-2 py-1 rounded-lg"
        >
          {openTeam === team ? 'Volver' : 'Abrir'}
        </button>

   {/* LOGO */}
<div className="mb-4 flex justify-center">
  <div
    className="
      p-[3px]
      rounded-2xl
      bg-gradient-to-br
      from-pink-500
      via-purple-500
      to-cyan-400
      shadow-lg shadow-pink-500/30
      transition-all duration-300
      hover:scale-105
      hover:shadow-cyan-400/40
    "
  >
    <div className="bg-[#14081f] rounded-2xl p-2">
      <img
        src={teamLogos[team]}
        alt={team}
        className="w-28 h-28 object-contain rounded-xl"
      />
    </div>
  </div>
</div>
        {/* NOMBRE */}
        <h3 className="text-2xl font-black text-white">
          {team}
        </h3>

      {/* ROSTER */}
{openTeam === team && roster[team] && (

  <div className="mt-4">

    {/* TITULARES */}
    <div className="space-y-2">

      {roster[team]
        .filter(
  (p) =>
    p.role &&
    !p.role.includes('SUPLENTE')
)
        .map((p, idx) => (

          <div
            key={idx}
            className="flex items-center justify-between bg-white/10 p-2 rounded-xl"
          >

            {/* PLAYER */}
            <div className="flex flex-col items-start">

              {p.captain && (
                <span className="text-yellow-300 text-xs font-bold">
                  👑 CAPITÁN
                </span>
              )}

              <span>{p.id}</span>

            </div>

            {/* ROLE */}
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              {p.role}
            </span>

          </div>

      ))}

    </div>


    {/* SEPARACIÓN */}
    <div className="my-4 border-t border-white/10" />


    {/* SUPLENTES */}
<div className="space-y-2">

  <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
    Suplentes
  </div>

  {roster[team]
    .filter(
      (p) =>
        p.role &&
        p.role.includes('SUPLENTE')
    )
    .map((p, idx) => (

      <div
        key={idx}
        className="flex items-center justify-between bg-white/5 border border-white/10 p-2 rounded-xl mt-3"
      >

        {/* PLAYER */}
        <div className="flex flex-col items-start">

          {p.captain && (
            <span className="text-yellow-300 text-xs font-bold">
              👑 CAPITÁN
            </span>
          )}

          <span>{p.id}</span>

        </div>

        {/* ROLE */}
        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
          {p.role}
        </span>

      </div>

  ))}

</div>

  </div>

)}

      </div>
    ))}

  </div>

</section>


      {/* MATCHES */}
      <section className="relative z-10 px-8 lg:px-20 pb-24">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
              
            </p>


            <h3 className="text-5xl font-black mt-3">
              Partidos
            </h3>
          </div>


          <div className="px-5 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm backdrop-blur-xl">
           4 de Julio - 19:00 PM Hr MX
          </div>
        </div>


        <div className="grid gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-400/20 to-violet-500/20 flex items-center justify-center text-3xl shadow-lg shadow-pink-500/10">
                  🌸
                </div>


                <div>
                  <h4 className="text-3xl font-black text-white">
                    {match.teamA}
                    <span className="mx-3 text-white/30">vs</span>
                    {match.teamB}
                  </h4>


                  <p className="text-white/50 mt-2 uppercase tracking-widest text-sm">
                    {match.status}
                  </p>
                </div>
              </div>


              <div className="text-5xl font-black text-pink-200">
                {match.score}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* RESURRECTION PORTAL */}
      <section className="relative z-10 px-8 lg:px-20 pb-32">
        <div className="rounded-[2.8rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-violet-500/10 backdrop-blur-3xl p-14 text-center shadow-[0_0_100px_rgba(236,72,153,0.2)] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]" />


          <div className="relative z-10">
            <div className="text-8xl mb-8 animate-pulse">🪷</div>


            <p className="uppercase tracking-[0.4em] text-pink-300 text-sm">
             Bracket en Vivo
            </p>


            <h3 className="text-6xl font-black mt-5">
            
            </h3>


            <p className="mt-8 text-white/65 max-w-3xl mx-auto text-xl leading-relaxed">
              
            </p>


            <a
              href="/brackets"
              target="_blank"
              className="inline-flex mt-12 px-12 py-6 rounded-3xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-2xl font-black hover:scale-105 transition shadow-2xl shadow-pink-500/30"
            >
              Bracket Oficial
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}