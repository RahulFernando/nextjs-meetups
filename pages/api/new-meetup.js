import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb://localhost:27017/meetup_db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();

    return res.status(201).json(result);
  }
};

export default handler;
