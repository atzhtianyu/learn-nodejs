const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

// 必须在配置 CORS 中间件之前设置 JSONP

app.get("/api/jsonp", (req, res) => {
  const funcName = req.query.callback;
  const data = {
    name: "张三",
    age: 20,
  };
  const scriptStr = `${funcName} (${JSON.stringify(data)})`;
  res.send(scriptStr);
});

// 在路由之前，使用 CORS 实现跨域
const cors = require("cors");

app.use(cors());

const router = require("./15.apiRouter");

app.use("/api", router);

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
});
