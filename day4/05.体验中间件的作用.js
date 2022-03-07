const express = require("express");
const app = express();

// const mw = function (req, res, next) {
//   console.log("这是最简单的中间件函数");

//   // 把流转关系，转交到下一个中间件函数
//   next();
// };

// // 将 mw 注册为全局可用的中间件
// app.use(mw);

// 定义全局中间件的最简单的方式
app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now();

  // 在 req 上挂载自定义属性
  req.startTime = time;

  // 把流转关系，转交到下一个中间件函数
  next();
});

app.get("/", (req, res) => {
  res.send("Home page." + req.startTime);
});

app.get("/user", (req, res) => {
  res.send("User page." + req.startTime);
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
});
