const db = require("../db/index");
const path = require("path");

exports.addArticle = (req, res) => {
  if (!req.file || req.file.fieldname !== "cover_img") {
    return res.cc("文章封面是必选参数！");
  }
  const articleInfo = {
    // 标题、内容、状态、所属的分类 Id
    ...req.body,
    // 文章封面在服务器端的存放路径
    cover_img: path.join("/uploads", req.file.filename),
    // 文章发布时间
    pub_date: new Date(),
    author_id: req.user.id,
  };
  const sqlStr = "insert into ev_articles set ?";
  db.query(sqlStr, articleInfo, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.affectedRows !== 1) {
      return res.cc("更新文章失败！");
    }
    res.cc("发布文章成功！", 0);
  });
};

exports.delArticle = (req, res) => {
  const sqlStr = "select * from ev_articles where Id=?";
  db.query(sqlStr, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("文章不存在！");
    }
    const sqlStr = "update ev_articles set is_delete=1 where Id=?";
    db.query(sqlStr, req.params.id, (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.affectedRows !== 1) {
        return res.cc("删除文章失败！");
      }
      res.cc("删除文章成功！", 0);
    });
  });
};

exports.getArticle = (req, res) => {
  const sqlStr = "select * from ev_articles";
  db.query(sqlStr, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("文章不存在！");
    }
    res.send({
      status: 0,
      message: "获取文章成功！",
      data: {
        ...results,
      },
    });
  });
};
