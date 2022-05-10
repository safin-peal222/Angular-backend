const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000;
var cors = require("cors");
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://book-user: PIRXtp4jL180AKyh@cluster0.h0u2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log("Databasa connected");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

});
app.get('/',(req,res)=>{
    res.send("Hello World");
});
users = [];


app.post('/users',(req,res)=>{
  console.log("hitting the post",req.body);
  const newUser = req.body;
  // users.push(newUser);
  res.send(newUser);
  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 