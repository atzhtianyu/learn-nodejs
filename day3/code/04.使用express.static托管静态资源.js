const express = require("express");

const app = express();

app.use("/clock", express.static("clock"));
app.use(express.static("./files"));


app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1:8080");
});
