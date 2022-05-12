const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000;
var cors = require("cors");
app.use(cors());
const ObjectId = require('mongodb').ObjectId;
app.use(express.json());


const uri = "mongodb+srv://book-user:XZTQoDSHVOxf4L5X@cluster0.h0u2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    await client.connect();
    const database = client.db("Angular");
    const haiku = database.collection("CRUD");

    //get method
    app.get('/users',async(req,res)=>{
      const cursor = haiku.find({});
      const users =await cursor.toArray();
      res.send(users);

      
  });

  //Delete
  app.delete('/users/:id',async(req,res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await  haiku.deleteOne(query);
    console.log("deleteting an user ",result);
    res.json(result);
  })

    // create a document to insert
    app.post('/users',async(req,res)=>{
             console.log("hitting the post");
      const newUser = req.body;
      // newUser.id = users.length;
      
      const result = await haiku.insertOne(newUser);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      res.json(result);
      
    })
    
    
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// users = [
//   {id : 0, name:'Shabana',email: 'Shabana@gmail.com',password:'123'},
//   {id : 1, name:'Shaban',email: 'Shabana@gmail.com',password:'123'},
//   {id : 2, name:'Shaba',email: 'Shabana@gmail.com',password:'123'},
// ];




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 