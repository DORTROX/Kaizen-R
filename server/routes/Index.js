const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs   = require('fs');
const Discord = require('discord.js')
const { MessageEmbed, WebhookClient } = require('discord.js');

router.get('/', (req, res) => {
  res.send('Hi')
})



module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home