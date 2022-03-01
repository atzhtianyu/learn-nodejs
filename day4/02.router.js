const express = require("express");

const router = express.Router();

router.get("/user/list", (req, res) => {
  res.send("获取用户列表");
});

router.post("/user/add", (req, res) => {
  res.send("添加用户信息");
});

module.exports = router;
