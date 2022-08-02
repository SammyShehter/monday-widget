import {
    MongoClient,
    Collection
} from "$mongo"
import {
    TipsSchema
} from '../models.ts'

const client = new MongoClient();
export let tipsCollection: Collection<TipsSchema>
// Connect using srv url
try {
  await client.connect(
    "mongodb+srv://<user>:<password>@<mongourl>/?authMechanism=SCRAM-SHA-1",
  );
  tipsCollection = client.database("ZeroHero").collection<TipsSchema>("Tips")
  console.log("\nMongo connected...\n");
} catch (error) {
  console.log(error.message);
  
}