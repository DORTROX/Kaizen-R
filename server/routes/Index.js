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
  console.log(arr[0])
  axios
        .post(
          "https://api.imgbb.com/1/upload?expiration=600&key=de96ee1ca130062862c4b484f650f647&image="+arr[0])
        .then((response) => {
          console.log("response", response);
          console.log("response URL", response.data.data.image.url);
          console.log("success");
        })
        .catch((error) => {
          console.log("error", error);
        }); 
})


module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home