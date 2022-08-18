const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
var path = require("path");
const router = require('./routes/routes')

const PORT = 3000;

app.use(session({secret: "asdsadsadsajdjsadjisajdsajdsadjsaidjsjaidjsaida"}));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname,"temp")
}));
app.use(cors());
app.use(router);

app.get("/usuarios",(req,res) => {
    res.json({"titulo":"uma noticia"});
})

app.listen(PORT,()=> {
    console.log("rodando")
})