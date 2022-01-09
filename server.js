const express = require('express')
const fs = require("fs")
const url = require("url")
const app = express()
const port = 3000

app.get("/", (req, res) =>{
    res.sendFile(`${__dirname}/gm.html`);
});
app.listen(port, () => console.log(`click http://localhost:${port}/ !`))