const admin = require("firebase-admin");
const ExcelJS = require("exceljs");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportTeams() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Equipos");

  sheet.columns = [
    { header: "ID", key: "id", width: 25 },
    { header: "Nombre", key: "name", width: 30 },
    { header: "TOP", key: "top", width: 25 },
    { header: "JUNGLA", key: "jg", width: 25 },
    { header: "MID", key: "mid", width: 25 },
    { header: "ADC", key: "adc", width: 25 },
    { header: "SUPPORT", key: "sup", width: 25 },
    { header: "Logo", key: "logo", width: 35 },
    { header: "Discord", key: "discord", width: 15 },
  ];

  const snapshot = await db.collection("teams").get();

  snapshot.forEach((doc) => {
    const data = doc.data();

    let top = "";
    let jg = "";
    let mid = "";
    let adc = "";
    let sup = "";

    if (data.players) {
      data.players.forEach((player) => {
        switch (player.role) {
          case "TOP":
            top = player.id;
            break;

          case "JUNGLA":
          case "JUNGLE":
            jg = player.id;
            break;

          case "MID":
            mid = player.id;
            break;

          case "ADC":
          case "BOT":
            adc = player.id;
            break;

          case "SUPPORT":
          case "SUP":
            sup = player.id;
            break;
        }
      });
    }

    sheet.addRow({
      id: doc.id,
      name: data.name || "",
      top,
      jg,
      mid,
      adc,
      sup,
      logo: data.logo || "",
      discord: "",
    });
  });

  sheet.getRow(1).font = {
    bold: true,
  };

  await workbook.xlsx.writeFile("equipos.xlsx");

  console.log("✅ Excel generado correctamente.");
}

exportTeams().catch(console.error);