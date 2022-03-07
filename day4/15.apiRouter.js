const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  // 获取客户端数据
  const query = req.query;

  // cors 的一些设置
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, X-Custom-Header");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, HEAD");
  res.setHeader("Access-Control-Allow-Methods", "*");

  res.send({
    // 0 表示处理成功，1 表示处理失败
    status: 0,
    // 状态描述
    msg: "GET 请求成功",
    // 返回数据
    data: query,
  });
});

router.post("/post", (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    msg: "POST 请求成功",
    data: body,
  });
});

router.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "DELETE 请求成功",
  });
});

module.exports = router;
