const express = require("express");
const router = express.Router();
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const User = require('../models/user')
const Server = require('../models/Server')
const bcrypt = require("bcrypt");
const { time } = require("console");

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
  const arr = Object.keys(req.body);
  let UserData = JSON.parse(arr[0]);
  User.findOne({ name: UserData.name }).exec((err, userN) => {
    if (userN) {
      errors = "Name already registered";
      return res.send(errors)
    } else {
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(UserData.password, salt, async(err, hash) => {
          let xx = '';
          for (let i=0; i < hash.length; i++){
              if(hash[i] != "/"){
                  xx += hash[i]
              }
          }
          if (err) throw err;
          const newUser = new User({
            name: UserData.name,
            password: UserData.password,
            token: xx,
            email: UserData.email,
            pfp : 'https://i.ibb.co/vcxkBVF/person-icon.png',
            servers: 'DORTROX'
          });
          newUser.save()
          return res.send(newUser)
        })
      )
    }
  });
});

router.post("/CreateServer", async (req, res) => {
  const arr = Object.keys(req.body);
  let nata = JSON.parse(arr[0])
  Server.findOne({ Sname: nata.Sname }).exec((err, userN) => {
    if (userN) {
      errors = "Name already registered";
      return res.send(errors)
    } else {
      if (err) throw err;
      const newServer = new Server({
        name: nata.Sname,
        pfp : nata.imageUri,
        status: "New Server",
        members: nata.members
      });
      User.findOne({name: nata.members}).exec(async (err, solos) => {
        solos.servers.push(nata.Sname)
        await User.updateOne({servers: solos.servers})
      });
      return newServer.save()
    }
  });
});

module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home
