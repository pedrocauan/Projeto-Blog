const express = require("express")
const app = express()
// const path = require("path") /*Caso der ruim no  view*/

// app.set("view engine", path.join(__dirname, "views"))

//Renderiza o front end
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("home") //identifica  a pasta views como raíz
})

app.listen(3000, (err) => {
    if(!err)
        console.log("Rodou")
    if(err)
        console.log(err)
})