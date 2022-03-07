const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "zty235613",
  database: "learnNodejs",
});

module.exports = db;
