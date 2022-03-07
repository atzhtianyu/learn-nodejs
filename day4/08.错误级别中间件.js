const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // 人为制造错误
  throw new Error("客户端发生了错误");
  res.send("Home page");
});

// 定义错误级别的中间价
app.use((err, req, res, next) => {
  console.log("发生了错误! " + err.message);
  res.send("Error! " + err.message);
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1");
});
