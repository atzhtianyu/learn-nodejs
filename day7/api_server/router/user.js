const express = require("express");
const router = express.Router();

// 导入用户路由处理模块的函数
const user_handler = require("../router_handler/user");

const expressJoi = require("../middleware/express-joi");
const { reg_schema, login_schema } = require("../schema/user");

// 注册新用户
router.post("/register", expressJoi(reg_schema), user_handler.regUser);

// 登录
router.post("/login", expressJoi(login_schema), user_handler.login);

module.exports = router;
