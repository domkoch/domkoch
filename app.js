var express = require("express")
var app = express()

//app.set("view engine", "pug")
app.use(express.static("./public"));
/*app.get("/", (req, res) => {
    res.render("index.html")
})*/

app.listen(3000, () => {
  console.log("Port 3000")
})
