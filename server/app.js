const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/keeperDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 5000,function(){
    console.log("Server is Running on Port 5000");
})