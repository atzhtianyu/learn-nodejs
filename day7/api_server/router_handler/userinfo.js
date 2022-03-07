const db = require("../db/index");
const bcrypt = require("bcryptjs");

// 获取用户基本信息的模块
exports.getUserInfo = (req, res) => {
  const sqlStr =
    "select id, username, nickname, email, user_pic from ev_users where id=?";
  db.query(sqlStr, req.user.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("获取用户信息失败！");
    }
    res.send({
      status: 0,
      msg: "获取用户基本信息成功！",
      data: results[0],
    });
  });
};

// 更新用户基本信息的模块
exports.updateUserInfo = (req, res) => {
  const sqlStr = "update ev_users set ? where id=?";
  db.query(sqlStr, [req.body, req.user.id], (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.affectedRows !== 1) {
      return res.cc("修改用户信息失败");
    }
    return res.cc("修改用户信息成功！", 0);
  });
};

// 更新用户密码
exports.updatePassword = (req, res) => {
  const sqlStr = "select * from ev_users where id=?";
  db.query(sqlStr, req.user.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("用户不存在！");
    }

    // TODO：判断提交的旧密码是否正确
    const compareResult = bcrypt.compareSync(
      req.body.oldPwd,
      results[0].password
    );
    if (!compareResult) {
      return res.cc("原密码错误！");
    }

    // TODO: 将新密码更新到数据库中
    const sqlStr = "update ev_users set password=? where id=?";
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    db.query(sqlStr, [newPwd, req.user.id], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.affectedRows !== 1) {
        return res.cc("修改密码失败！");
      }
      res.cc("修改密码成功！", 0);
    });
  });
};

// 更新用户头像
exports.updateAvatar = (req, res) => {
  const sqlStr = "update ev_users set user_pic=? where id=?";
  db.query(sqlStr, [req.body.avatar, req.user.id], (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.affectedRows !== 1) {
      return res.cc("更换头像失败！");
    }
  })
  res.cc("更换头像成功！", 0);
};
