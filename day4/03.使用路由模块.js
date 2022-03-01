const express = require("express");
const router = require("./02.router");

const app = express();


// app.use 注册全局中间件
app.use("/api", router);

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
})
