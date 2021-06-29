require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var randomstring = require("randomstring");

// set port number
const PORT = process.env.PORT || 3100;
// to allow cross-origin requests
app.use(cors());

let video_src;
let rooms = {};

// TODO: change it to post request
app.post("/createroom", (req, res) => {
  let roomid;
  while (1) {
    roomid = randomstring.generate(8);
    if (!rooms.hasOwnProperty(roomid)) break;
  }
  video_src = req.body.vsrc;
  rooms[roomid] = { vrsc: video_src, members: [] };
  res.status(200).send({ ok: true, roomid: roomid });
  //   console.log({ roomid, video_src });
  //   res.redirect(`/room/${roomid}?vs=${video_src}`);
});

// verify room
app.post("/verify", (req, res) => {
  let data = {
    ok: false,
    rd={}
  };
  let id = req.body.rid || null;
  if (rooms.hasOwnProperty(id)) data.ok = true;
  if (data.ok) data.rd=rooms[id];
  res.status(200).send(data);
});

// start server
app.listen(PORT, () => {
  console.log(`server running at >${PORT}<`);
});
