const express = require("express");
const customParser = require('./13.custom-body-parser');

const app = express();

app.use(customParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1");
});
