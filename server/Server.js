const express = require("express");
const mongoose = require("mongoose");
const { dirname } = require("path");
const app = express();
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require('cors');
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}));
require('dotenv').config()
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/index"));

mongoose.connect(
  process.env.mongoDb,
  (err) => {
    console.log("mongodb connected", err);
  }
);


io.on("connection", function (socket) {
  console.log("Player Connected From server")
});


http.listen(8000, function () {
  console.log("Running server");
});
