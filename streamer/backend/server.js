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
app.get("/createroom", (req, res) => {
  let roomid;
  while (1) {
    roomid = randomstring.generate(8);
    if (!rooms.hasOwnProperty(roomid)) break;
  }
  video_src = req.body.vsrc;
  rooms[roomid] = { vrsc: video_src };
  console.log({ roomid, video_src });
  res.redirect(`/room/${roomid}?vs=${video_src}`);
});

app.get("/room/:id", (req, res) => {
  let id = req.params.id || null;
  if (!rooms.hasOwnProperty(id)) {
    console.log("redirect");
    // redirect to search page
    res.redirect("http://locahost:3000/");
    return;
  }
  res.status(200).send({ vsrc: video_src, room: id });
});

// start server
app.listen(PORT, () => {
  console.log(`server running at >${PORT}<`);
});
