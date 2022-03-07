const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("调用了第一个全局中间件");
  next();
});

app.use((req, res, next) => {
  console.log("调用了第二个全局中间件");
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
})

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
})
