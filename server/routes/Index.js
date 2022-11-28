const express = require("express");
const router = express.Router();
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const User = require('../models/user')
const Server = require('../models/Server')
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  console.log('xx')
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
            servers: [{'img':'https://i.ibb.co/gFgwwgB/itachi-eye-moment-2.jpg','name':"DORTROX"}]
          });
          newUser.save()
          return res.send(newUser)
        })
      )
    }
  });
});

router.post("/CreateServer", async (req, res) => {
  console.log(req.body)
  const arr = Object.keys(req.body);
  console.log(arr)
  let nata = JSON.parse(arr[0])
  console.log(nata)
  Server.findOne({ name: nata.Sname }).exec((err, userN) => {
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
        solos.servers.push({"img": nata.imageUri,"name": nata.Sname})
        await User.updateOne({servers: solos.servers})
      });
      return newServer.save()
    }
  });
});

router.get('/FetchServers/:name', async (req,res) =>{
  console.log(req.params.name)
  User.findOne({name: req.params.name }).exec( async (err, solos) => {  
    return res.send(solos)
  })
})

router.get('/FetchServerData/:name', async (req, res) => {
  res.send('Working')
})

module.exports = router;

//Daily UI 001 Sign Up Form
// https://activetheory.net/home
