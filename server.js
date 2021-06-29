// dotenv for easily accessing environment variables
// keep it at the top!
require('dotenv').config();
const express = require('express');
const app = express();
// const todoRoute=require('./routes/todo');
const cors=require('cors');
// const doc=require('./models/doc');

// set port number
const PORT = process.env.PORT || 3100;
// to allow cross-origin requests
app.use(cors());
app.use(express.json({extends:true}));
app.use(express.urlencoded({extends:true}));

// api endpoint accessible from /todo/...
// app.use("/todo",todoRoute);

app.get('/',(req,res)=>{
    res.status(200).send({"status": "ok"});
});
/**
 * For creating room
 * videoURL
 * 
 */

app.post('/createRoom',(req,res)=>{
    let videoURL=req.body.vsrc;
    console.log(videoURL);
    res.status(200).send("working");
})

// start server
app.listen(PORT, () => {
    console.log(`server running at >${PORT}<`)
});