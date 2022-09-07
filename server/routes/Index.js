const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs   = require('fs');
const Discord = require('discord.js')
const { MessageEmbed, WebhookClient } = require('discord.js');
const axios = require("axios")

router.get('/', (req, res) => {
  res.send('Hi')
})

router.post("/Imaging", (req, res) => {
  const arr = Object.keys(req.body);
  let nata = JSON.parse(arr[0])
  console.log(nata)
  console.log(nata.imageUri)
})


module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home