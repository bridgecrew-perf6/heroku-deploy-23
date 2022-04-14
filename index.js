const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/users", (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
})