const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const { initialiseDBConnection } = require("./db/db.connect.js")

require('dotenv').config();




const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({origin: "*"}));

app.use(bodyParser.json());

// initialiseDBConnection();

console.log(require('crypto').randomBytes(256).toString('base64'));

app.get("/" , (req, res) => {
  res.json({hello: "Welcome to Quiz Up!"})
})


// app.use(routeNotFound);
// app.use(errorHandler)


app.listen(PORT, ()=>{
  console.log("Server started on PortNo: ", PORT)
})
