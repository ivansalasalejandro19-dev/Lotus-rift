import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const teams = [

    'Sᴍᴀᴄᴋᴅᴏᴡɴ',
    'T502',
    'Rokurominos',
    'overextended',
    'Huesitos Proyect',
    'HaTsu',
    'Golden Fenix-Z',
    'Nahuales',
    'Ice Gold',
    'ÆSIIR Go Legends',
    'Sʜᴀᴅᴏᴡ ʀᴇᴀᴘᴇʀs',
    'Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ',
    'Fʟᴀᴡʟᴇss',
    'Secret Society',
    'Cosa nostra',
    'Astral Gaming'

  ];

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
        id: 'Gz TheTØPArtist#PHX',
        role: 'TOP'
      },

      {
        id: 'Jei ttv#6711',
        role: 'JUNGLA'
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
        captain: true
      },

      {}, {}
    ],


    // ======================================================
    // overextended
    // ======================================================

    'overextended': [
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
      }, 
    ],


    // ======================================================
    // Huesitos Proyect
    // ======================================================

    'Huesitos Proyect': [
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
      },
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
    // Golden Fenix-Z
    // ======================================================

    'Golden Fenix-Z': [
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
        id: 'Just Supra#Ling',
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
      }, {}
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
    // Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ
    // ======================================================

    'Vᴀʟʜᴀʟʟᴀ Lᴇɢᴀᴄʏ': [
      {
        id: 'Better#lvys',
        role: 'TOP'
      }, 
      
      {
        id: 'T1 Azazel#GTM',
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
          id: 'Chicx DaSleep 火#Burra',
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
    // Astral Gaming
    // ======================================================

    'Astral Gaming': [
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

async function upload() {
  await setDoc(
    doc(db, "config", "teams"),
    {
      teams,
      roster,
      updatedAt: Date.now(),
    }
  );

  console.log("Subido correctamente");
}

upload();