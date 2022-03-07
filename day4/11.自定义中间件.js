const express = require("express");
const qs = require("querystring");

const app = express();

app.use((req, res, next) => {
  // 存储请求体数据
  let str = "";

  // 监听 req 的 data 事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  // 监听 req 的 end 事件
  req.on("end", () => {
    // 在 str 中存储的是完整的请求体数据
    // console.log(str);

    // 调用 querystring 的方法解析字符串
    const body = qs.parse(str);
    console.log(body);
    req.body = body;
    next();
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1");
});
