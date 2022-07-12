const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("<h1>Ablublu bleble</h1>")
})


app.listen(3000, (err) => {
    if(!err)
        console.log("Rodou")
    if(err)
        console.log(err)
})