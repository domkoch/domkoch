var express = require("express")
var app = express()

app.set("view engine", "pug")

app.get("/", function(req, res){
    res.render("index", {title: "This is the title", msg: "this is a msg"})
})

app.listen(3000, function(){
  console.log("Port 3000")
})
