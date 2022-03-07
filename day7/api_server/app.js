// 导入并创建 express 服务器
const express = require("express");
const app = express();

const Joi = require("joi");
const expressJWT = require("express-jwt");

const config = require("./config");

// 导入并配置 CORS 中间件跨域
const cors = require("cors");
app.use(cors());

// 配制解析表单数据的中间件，只能解析 application/x-www-form-urlencoded 的表单数据
app.use(express.urlencoded({ extended: false }));

// 封装中间件，处理错误信息
app.use((req, res, next) => {
  // status 默认为 1， 表示失败的情况
  // err 可能是一个错误对象，也可能是一个字符串
  res.cc = (err, status = 1) => {
    res.send({
      status: status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 配置解析 token 的中间件
app.use(
  expressJWT({ secret: config.jwtSecretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

// 导入并使用用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 导入并使用用户信息路由模块
const userInfoRouter = require("./router/userinfo");
app.use("/my", userInfoRouter);

// 导入并使用文章分类路由模块
const artCateRouter = require("./router/artcate");
app.use("/my/article", artCateRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 数据验证失败
  if (err instanceof Joi.ValidationError) {
    return res.cc(err);
  }
  // 身份认证失败后的错误
  if (err.name === "UnauthorizedError") {
    return res.cc("身份认证失败");
  }
  // 未知的错误
  res.cc(err);
});

app.listen(3007, () => {
  console.log("api server running at http://127.0.0.1:3007");
});
