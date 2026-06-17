import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpZYAfrdcgyD2rc1Jk__bnyYyhFuhZxXY",
  authDomain: "lotus-rift.firebaseapp.com",
  projectId: "lotus-rift",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const teams = [

    'Sᴍᴀᴄᴋᴅᴏᴡɴ',
    'T502',
    'Rᴏᴋᴜʀᴏᴍɪɴᴏs',
    'Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ',
    'Hᴜᴇsɪᴛᴏs Pʀᴏʏᴇᴄᴛ',
    'HᴀTsᴜ',
    'Gᴏʟᴅᴇɴ Fᴇɴɪx-Z',
    'KT E Sᴘᴏʀᴛs',
    'Iᴄᴇ Gᴏʟᴅ',
    'ÆSIIR Gᴏ Lᴇɢᴇɴᴅs',
    'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs',
    'Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ',
    'Fʟᴀᴡʟᴇss',
    'Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ',
    'Cᴏsᴀ Nᴏsᴛʀᴀ',
    'Asᴛʀᴀʟ Gᴀᴍɪɴɢ'

  ];

const teamLogos = {
  'Sᴍᴀᴄᴋᴅᴏᴡɴ': '/logos/smackdown.png',
  'T502': '/logos/T502.png',
  'Rᴏᴋᴜʀᴏᴍɪɴᴏs': '/logos/rku.png',
  'Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ': '/logos/overextended.png',
  'Hᴜᴇsɪᴛᴏs Pʀᴏʏᴇᴄᴛ': '/logos/huesitos.png',
  'HᴀTsᴜ': '/logos/hatsu.png',
  'Gᴏʟᴅᴇɴ Fᴇɴɪx-Z': '/logos/golden_fenix_z.png',
  'KT E Sᴘᴏʀᴛs': '/logos/KTESports.png',
  'Iᴄᴇ Gᴏʟᴅ': '/logos/ice_gold.png',
  'ÆSIIR Gᴏ Lᴇɢᴇɴᴅs': '/logos/ae_siir_go_legends.png',
  'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs': '/logos/shadow_reapers.png',
  'Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ': '/logos/valhalla_legacy.png',
  'Fʟᴀᴡʟᴇss': '/logos/flawless.png',
  'Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ': '/logos/secret_society.png',
  'Cᴏsᴀ Nᴏsᴛʀᴀ': '/logos/cosa_nostra.png',
  'Asᴛʀᴀʟ Gᴀᴍɪɴɢ': '/logos/Astral_gaming.png'
};

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
    // Rᴏᴋᴜʀᴏᴍɪɴᴏs
    // ======================================================

    'Rᴏᴋᴜʀᴏᴍɪɴᴏs': [
      {
        id: 'Gz TheTØPArtist#PHX',
        role: 'TOP'
      },

      {
        id: 'Jei ttv#6711',
        role: 'JUNGLA',
        captain: true
      },

      {
        id: ' ElKratoz#MID',
        role: 'MID',
      },

      {
        id: 'Romina#Gyal',
        role: 'ADC',
      },

      {
        id: '루발  GawrNikho メ#lulu',
        role: 'SUP',
      },

      {
        id: 'Atlas#Buuu',
        role: 'SUPLENTE',
      },

      {
        id: 'Xue#穆尼奥斯',
        role: 'SUPLENTE 2'
      }

    ],


    // ======================================================
    // Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ
    // ======================================================

    'Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ': [
      {
        id: '愛 ChofisModo#Beast',
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
        id: 'Azul#BlueL',
        role: 'ADC',
      },

      {
        id: 'sebdra#4417',
        role: 'SUP',
      },

      {
        id: 'Nexo Simon#7403',
        role: 'SUPLENTE',
      }, 
      
      {
        id: 'Da Vinci#4034',
        role: 'SUPLENTE 2',
      }
    ],


    // ======================================================
    // Hᴜᴇsɪᴛᴏs Pʀᴏʏᴇᴄᴛ
    // ======================================================

    'Hᴜᴇsɪᴛᴏs Pʀᴏʏᴇᴄᴛ': [
      {
        id: 'Lillia Futa#Eep',
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
      }, 
      
      {
        id: 'DoomScry#Edu',
        role: 'SUPLENTE',
      }
    ],


    // ======================================================
    // HᴀTsᴜ
    // ======================================================

    'HᴀTsᴜ': [
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

      }

    ],


    //======================================================
    // Gᴏʟᴅᴇɴ Fᴇɴɪx-Z
    // ======================================================

    'Gᴏʟᴅᴇɴ Fᴇɴɪx-Z': [
      {
        id: 'G7龙 Alejoo#Ñupra',
        role: 'TOP'
      },

      {
        id: 'Wirtz#Key',
        role: 'JUNGLA'
      },

      {
        id: 'G7龙 Cheemz#ñupra',
        role: 'MID'
      },

      {
        id: 'G7z EGO#EROS',
        role: 'ADC'
      },

      {
        id: 'Alexa#AED',
        role: 'SUP'
      },

      {
        id: 'Zhxgrl#rxwtz',
        role: 'SUPLENTE',
      }, 
      
      {
        id: 'G7龙 ŽhêrØ#Ñupra',
        role: 'SUPLENTE',
        captain: true
      } 
    ],


    // ======================================================
    // KT E Sᴘᴏʀᴛs
    // ======================================================

    'KT E Sᴘᴏʀᴛs': [
      {
        id: 'Alejo#0910',
        role: 'TOP'
      }, 
      
      {
        id: 'Biggwall#Lzng',
        role: 'JUNGLA'
      }, 
      
      {
        id: 'MyBelleGi#2501',
        role: 'MID'
      }, 
      
      {
        id: 'Krum#Fαith',
        role: 'ADC'
      }, 
      
      {
        id: 'TikTokReaper#Boost',
        role: 'SUP',
      }, 
      
      {
        id: 'Twitch Sleepwrl#XXI',
        role: 'SUPLENTE',
      }
    ],



    // ======================================================
    // Iᴄᴇ Gᴏʟᴅ
    // ======================================================

    'Iᴄᴇ Gᴏʟᴅ': [
      {
        id: 'G7 Lugia ツ#2502',
        role: 'TOP'
      },

      {
        id: 'G7 Vanderrr#Zzz',
        role: 'JUNGLA',
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
        id: 'Chrome Dokuro#IPin',
        role: 'SUPLENTE',
        captain: true
      },

      {
        id: 'Mukuro#Lambo',
        role: 'SUPLENTE 2'
      }
    ],


    // ======================================================
    // ÆSIIR Gᴏ Lᴇɢᴇɴᴅs
    // ======================================================

    'ÆSIIR Gᴏ Lᴇɢᴇɴᴅs': [
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
        id: 'Vaytiu#Vayli',
        role: 'ADC'
      },

      {
        id: 'Kino 縁#0609',
        role: 'SUP'
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
    // Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ
    // ======================================================

    'Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ': [
      {
        id: 'Better#lvys',
        role: 'TOP',
        captain: true
      }, 
      
      {
        id: 'SojaCarbo#1830',
        role: 'JUNGLA'
      }, 
      
      {
        id: '清隆 Ayanokoji#ZDIAC',
        role: 'MID'
      }, 
      
      {
        id: 'Smash#Sick',
        role: 'ADC'
      }, 
      
      {
        id: 'LF NovemberAjax#SUPP',
        role: 'SUP'
      }, 
      
      {
          id: 'VF DaSilva 火#Vicky',
          role: 'SUPLENTE',
      }, 
      
      {
          id: 'mapache elegante#ADC',
          role: 'SUPLENTE 2',
      }
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
        id: 'Arvey#0615',
        role: 'ADC'
      },

      {
        id: 'Meffy#2195',
        role: 'SUP'
      },

      {
        id: 'Hide on WęęĐ#CRC',
        role: 'SUPLENTE'
      }
    ],


    // ======================================================
    // Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ
    // ======================================================

    'Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ': [
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
    // Cᴏsᴀ Nᴏsᴛʀᴀ
    // ======================================================

    'Cᴏsᴀ Nᴏsᴛʀᴀ': [
      {
        id: 'Khaivツ#DIFF',
        role: 'TOP'
      }, 
      
      {
        id: 'Valcaster#ALFA',
        role: 'JUNGLA'
      }, 
      
      {
        id: 'dark#green',
        role: 'MID'
      }, 
      
      {
        id: 'Seine liebe#Soul',
        role: 'ADC'
      }, 
      
      {
        id: 'Adapthing#Two',
        role: 'SUP'
      }, 
      
      {
        id: 'Tiktokdelpatio16#JG1',
        role: 'SUPLENTE',
      }, 
      
      {
        id: 'Я Σ N Z O 亞瑟#1997',
        role: 'SUPLENTE 2'
      }
    ],


    // ======================================================
    // Asᴛʀᴀʟ Gᴀᴍɪɴɢ
    // ======================================================

    'Asᴛʀᴀʟ Gᴀᴍɪɴɢ': [
      {
        id: 'Zero#bbx',
        role: 'TOP'
      },

      {
        id: 'Artemis 縁#Abi',
        role: 'JUNGLA'
      },

      {
        id: 'Cloxer#AMIN',
        role: 'MID'
      },

      {
        id: 'LaloSalamanca#INF',
        role: 'ADC'
      },

      {
        id: 'lifes a mess#没有爱',
        role: 'SUP'
      },

      {
        id: 'Ticamate#3674',
        role: 'SUPLENTE'
      },

      {
        id: 'G7z Vox#EzAdc',
        role: 'SUPLENTE 2'
      }
    ]

  };

  const matches = [

  {
    id: "octavos1",
    stage: "octavos",
    order: 1,
    team1: "kt_esports",
    team2: "flawless",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-04",
    hour: "19:00"
  },

  {
    id: "octavos2",
    stage: "octavos",
    order: 2,
    team1: "aesiir",
    team2: "astral",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-04",
    hour: "19:00"
  },

  {
    id: "octavos3",
    stage: "octavos",
    order: 3,
    team1: "overextended",
    team2: "golden_fenix",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-04",
    hour: "19:00"
  },

  {
    id: "octavos4",
    stage: "octavos",
    order: 4,
    team1: "t502",
    team2: "smackdown",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-04",
    hour: "19:00"
  },

  {
    id: "octavos5",
    stage: "octavos",
    order: 5,
    team1: "cosa_nostra",
    team2: "huesitos",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-05",
    hour: "19:00"
  },

  {
    id: "octavos6",
    stage: "octavos",
    order: 6,
    team1: "ice_gold",
    team2: "shadow_reapers",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-05",
    hour: "19:00"
  },

  {
    id: "octavos7",
    stage: "octavos",
    order: 7,
    team1: "secret_society",
    team2: "rokurominos",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-05",
    hour: "19:00"
  },

  {
    id: "octavos8",
    stage: "octavos",
    order: 8,
    team1: "hatsu",
    team2: "valhalla_legacy",
    score1: 0,
    score2: 0,
    format: "BO1",
    date: "2026-07-05",
    hour: "19:00"
  }

];

const teamIds = {
  "Sᴍᴀᴄᴋᴅᴏᴡɴ": "smackdown",
  "T502": "t502",
  "Rᴏᴋᴜʀᴏᴍɪɴᴏs": "rokurominos",
  "Oᴠᴇʀᴇxᴛᴇɴᴅᴇᴅ": "overextended",
  "Hᴜᴇsɪᴛᴏs Pʀᴏʏᴇᴄᴛ": "huesitos",
  "HᴀTsᴜ": "hatsu",
  "Gᴏʟᴅᴇɴ Fᴇɴɪx-Z": "golden_fenix",
  "KT E Sᴘᴏʀᴛs": "kt_esports",
  "Iᴄᴇ Gᴏʟᴅ": "ice_gold",
  "ÆSIIR Gᴏ Lᴇɢᴇɴᴅs": "aesiir",
  "Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs": "shadow_reapers",
  "Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ": "valhalla_legacy",
  "Fʟᴀᴡʟᴇss": "flawless",
  "Sᴇᴄʀᴇᴛ Sᴏᴄɪᴇᴛʏ": "secret_society",
  "Cᴏsᴀ Nᴏsᴛʀᴀ": "cosa_nostra",
  "Asᴛʀᴀʟ Gᴀᴍɪɴɢ": "astral"
};

async function upload() {

    for (const team of teams) {
  console.log(team, "->", teamIds[team]);

  if (!teamLogos[team]) {
    console.log("FALTA LOGO:", team);
    continue;
  }

  await setDoc(doc(db, "teams", teamIds[team]), {
    name: team,
    logo: teamLogos[team],
    players: roster[team] || [],
    updatedAt: Date.now(),
  });
}

  // Config
  await setDoc(doc(db, "config", "teams"), {
    teams,
    teamLogos,
    roster,
    updatedAt: Date.now(),
  });

  // Equipos
  for (const team of teams) {
    console.log(team, "->", teamIds[team]);

    await setDoc(doc(db, "teams", teamIds[team]), {
      name: team,
      logo: teamLogos[team],
      players: roster[team] || [],
      updatedAt: Date.now(),
    });
  }

  // Partidos
  for (const match of matches) {
    await setDoc(doc(db, "matches", match.id), match);
  }

  console.log("✅ Todo subido correctamente");
}

upload().catch(console.error);