require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const stbsroutes = require("./routes/stbRoutes");

//middle wares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

//database connection
require("./db/conn");

//routes
server.use("/api/v1/stb", stbsroutes);

server.listen(port, (req, res) => {
  console.log("server running fine");
});
