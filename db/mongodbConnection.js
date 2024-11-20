import fs from "fs";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://idacasperson:pimqGvgLGLDDJivw@examensarbete.tyygq.mongodb.net/?retryWrites=true&w=majority&appName=examensarbete";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function uploadProducts() {
  try {
    await client.connect();
    const database = client.db("examensarbete"); // Skapa eller använd en befintlig databas
    const collection = database.collection("products"); // Skapa eller använd en befintlig samling

    const products = JSON.parse(fs.readFileSync("products.json", "utf8"));
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} produkter har laddats upp.`);
  } finally {
    await client.close();
  }
}

uploadProducts().catch(console.dir);
