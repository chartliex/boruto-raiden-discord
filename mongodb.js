import { MongoClient, ServerApiVersion } from "mongodb";

const mongoclient = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let userDB, infoGameDB, jutsuDB, itemDB, invDB, clanDB, ninjaTalentsDB;

async function connectToMongoDB() {
  try {
    await mongoclient.connect();
    const db = mongoclient.db("borutoraiden");
    userDB = db.collection("users");
    infoGameDB = db.collection("infoGame");
    jutsuDB = db.collection("jutsus");
    itemDB = db.collection("items");
    invDB = db.collection("invs");
    clanDB = db.collection("clans");
    ninjaTalentsDB = db.collection("ninjaTalents");
    console.log("Conectado ao banco de dados com sucesso. ✅");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados: ❌", err,);
  }
}

export {
  connectToMongoDB,
  userDB,
  infoGameDB,
  jutsuDB,
  itemDB,
  invDB,
  clanDB,
  ninjaTalentsDB
};