const express = require("express")
const app = express();

//estou dizendo para o express usar ejs como view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    res.send("Bem vindo");
});

app.listen(8080,()=>{
    console.log("App rodando!")
});