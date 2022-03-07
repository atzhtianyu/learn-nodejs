const express = require("express");
const app = express();

// 除了错误处理中间件，其他的中间件都要放在路由之前
// 别忘了小括号 ()
app.use(express.json());

// 通过 express.urlencoded 中间件解析 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  // 通过 req.body 获取请求体数据
  console.log(req.body);
  res.send("ok");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1");
});
