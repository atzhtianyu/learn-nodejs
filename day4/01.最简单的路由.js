const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world.");
})

app.post("/", (req, res) => {
  res.send("Post Request.");
})

app.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});
