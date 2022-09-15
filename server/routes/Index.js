const express = require("express");
const router = express.Router();
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const User = require('../models/user')
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("Hi");
});


router.get('/authenticate/:token/', (req,res) => {
  User.findOne({token : req.params.token}).exec((err, userD) => {
    if (userD) {
      res.status(200).send(userD)
    } else {
      res.status(400)
    }
  })
})

router.post("/register", (req, res) => {
  let errors
  let token
  const arr = Object.keys(req.body);
  let UserData = JSON.parse(arr[0]);
  User.findOne({ name: UserData.name }).exec((err, userN) => {
    if (userN) {
      errors = "Name already registered";
      return res.send(errors)
    } else {
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(UserData.password, salt, (err, hash) => {
          token = hash;
          token.replace('/', '')
          if (err) throw err;
          const newUser = new User({
            name: UserData.name,
            password: UserData.password,
            token: hash,
            email: UserData.email,
            pfp : 'https://ibb.co/GdvRJn6',
          });
          newUser.save()
          return res.send(hash)
        })
      )
    }
  });
});

module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home
