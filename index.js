const express = require("express");
const mongoose = require("mongoose");
const app = express();
const api = require('./api')
var cors = require('cors')
const url = "mongodb+srv://arduinomongodbjsyx:1234@learnmongodbarduino.8i0jknp.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB.");
    }catch (error){
        console.error(error);
    }
}

connect();

app.use(cors())

app.get("/", async (req, res)=>{
    res.sendFile(__dirname + "/home.html")
})

app.use(api)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));