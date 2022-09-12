const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const User = require('../models/user')
const bcrypt = require("bcrypt");


router.get("/", (req, res) => {
  res.send("Hi");
});

router.post("/register", (req, res) => {
  let errors
  const arr = Object.keys(req.body);
  let UserData = JSON.parse(arr[0]);
  User.findOne({ name: UserData.name }).exec((err, userN) => {
    if (userN) {
      errors = "Name already registered";
      return res.send(errors)
    } else {
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(UserData.password, salt, (err, hash) => {
          if (err) throw err;
          UserData.password = hash;
          const newUser = new User({
            name: UserData.name,
            password: UserData.password,
            email: UserData.email
          });
          return newUser.save()
        })
      );
    }
  });
});

module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home
