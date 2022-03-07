// 导入数据库处理模块
const db = require("../db/index");
// 导入加密模块
const bcrypt = require("bcryptjs");
// 导入生成 token 相关模块
const jwt = require("jsonwebtoken");
// 导入全局配置文件
const config = require("../config");

exports.regUser = (req, res) => {
  const userInfo = req.body;
  // 查询用户名是否被占用
  const sqlStr = "select * from ev_users where username=?";
  db.query(sqlStr, userInfo.username, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length > 0) {
      return res.cc("用户名被占用，请更换其他用户名");
    }
    // TODO: 注册用户，将用户添加入数据库
    // 加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);

    const sql = "insert into ev_users set ?";
    db.query(
      sql,
      { username: userInfo.username, password: userInfo.password },
      (err, results) => {
        if (err) {
          return res.cc(err);
        }
        if (results.affectedRows !== 1) {
          return res.cc("注册用户失败，请稍后再试");
        }
        res.cc("注册成功!", 0);
      }
    );
  });
};

exports.login = (req, res) => {
  // 接受表单的数据
  const userInfo = req.body;
  const sqlStr = "select * from ev_users where username=?";
  db.query(sqlStr, userInfo.username, (err, results) => {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("用户名不存在！");
    }
    // TODO: 判断密码是否正确
    const compareResult = bcrypt.compareSync(
      userInfo.password,
      results[0].password
    );
    if (!compareResult) {
      return res.cc("密码错误！");
    }
    // TODO: 登录成功，生成 token
    // 剔除密码和头像
    const user = { ...results[0], password: "", user_pic: "" };
    // 生成 token
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });
    // 将 token 响应给客户端
    res.send({
      status: 0,
      message: "登录成功",
      token: "Bearer " + tokenStr,
    });

    // res.send("登录成功!");
  });
};
