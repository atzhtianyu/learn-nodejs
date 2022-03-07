const express = require("express");
const app = express();

const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  // 如果没有配置任意解析数据的中间件，则 req.body 为 undefined
  console.log(req.body);
  res.send("ok");
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1");
});
