const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const imageBase64 = require('image-base64');

router.get('/', (req, res) => {
  res.send('Hi')
})

router.get("/api", (req, res ) => {
  res.json({ "users" : ["One", "Two","Threee", "four", "five"]})
})

router.get('/upload', (req, res) => {
  console.log('HYi')
})

router.post("/upload", (req, res ) => {
  console.log(req.body)
  imageBase64.local(req.body);
  const life = imageBase64.url(req.body,function(base64){
  console.log(base64)
})
console.log(life)
})



module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home