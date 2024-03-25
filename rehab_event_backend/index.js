const express = require("express");
const { event } = require("jquery");
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;

const app = express();
var eventData;
var therapistBook
async function main(){
  const uri = "mongodb://127.0.0.1:27017/";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      const cursor_rehab_event = await client.db("MiniProject").collection("RehabEvents").find({});
      eventData = await cursor_rehab_event.toArray();
      const cursor_therapist = await client.db("MiniProject").collection("Appn").find({});
      therapistBook = await cursor_therapist.toArray();

  } catch (e) {
      console.error(e);
  } finally {
    await client.close()
  }
}

main().catch(console.error);

app.get("/rehab_event", (req, res) => {
  res.json(eventData);
});

app.post('/therapist_booking', (req, res) => {
  res.send("POST Request Called");
  console.log(req.body);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
