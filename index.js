const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { initialiseDBConnection } = require("./db/db.connect.js")

require('dotenv').config();


const { authVerify } = require("./middlewares/auth-handler.middleware")
const { errorHandler } = require("./middlewares/error-handler.middleware")
const { routeNotFound } = require("./middlewares/route-not-found.middleware")


const { addQuizData } = require("./models/quiz.model");

const auth = require("./routes/auth.router");
const user = require("./routes/user.router");
const quiz = require("./routes/quiz.router");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({origin: "*"}));
app.use(bodyParser.json());

initialiseDBConnection();

app.use('/auth', auth);
app.use('/user', user);
app.use('/quizzes', quizzes);


app.get("/" , (req, res) => {
  res.json({hello: "Welcome to Quiz Up!"})
})


app.use(routeNotFound);
app.use(errorHandler)


app.listen(PORT, ()=>{
  console.log("Server started on PortNo: ", PORT)
})
