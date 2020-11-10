const express = require("express");
const path = require('path')
const sqlite3 = require('sqlite3').verbose();

const app = express();

//middleware
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

let db = new sqlite3.Database('digi.db');
let sql = `SELECT * from digimon`;
var objs = [];
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    objs.push([row.Digimon, row.url])
  });
});



  app.listen(3000, () => { 
    console.log("Server started (http://localhost:3000/) !");
  });
  
  app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get('/data', (req, res) => {
    
    res.json(objs);



  })