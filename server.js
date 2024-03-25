const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;


const app = express()

var allValues;
async function main(){
  const uri = "mongodb://127.0.0.1:27017/";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      const cursor = await client.db("MiniProject").collection("Appn").find({});
      allValues = await cursor.toArray();
      console.log(allValues);

  } catch (e) {
      console.error(e);
  } finally {
    await client.close()
  }
}

main().catch(console.error);

app.post('/therapist_booking', (req, res) => {
    res.send("POST Request Called");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});