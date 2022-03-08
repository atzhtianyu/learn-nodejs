const db = require("../db/index");

exports.getArticleCates = (req, res) => {
  const sqlStr =
    "select * from ev_article_cate where is_delete=0 order by Id asc";
  db.query(sqlStr, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    res.send({
      status: 0,
      massage: "获取文章分类列表成功！",
      data: results,
    });
  });
};

exports.addArticleCates = (req, res) => {
  const sqlStr = "select * from ev_article_cate where name=? or alias=?";
  db.query(sqlStr, [req.body.name, req.body.alias], (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length === 2) {
      return res.cc("分类名称与别名被占用，请更换后重试！");
    }
    if (results.length === 2) {
      return res.cc("分类名称与别名被占用，请更换后重试！");
    }
    if (
      results.length === 1 &&
      results[0].name === req.body.name &&
      results[0].alias === req.body.alias
    ) {
      return res.cc("分类名称与别名被占用，请更换后重试！");
    }

    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body.name) {
      return res.cc("分类名称被占用，请更换后重试！");
    }
    if (results.length === 1 && results[0].alias === req.body.alias) {
      return res.cc("分类别名被占用，请更换后重试！");
    }

    // 在数据库中添加新的文章分类
    const sqlStr = "insert into ev_article_cate set ?";
    db.query(sqlStr, req.body, (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.affectedRows !== 1) {
        return res.cc("新增文章分类失败！");
      }
      res.cc("新增文章分类成功！", 0);
    });
  });
};

exports.deleteCateById = (req, res) => {
  const sqlStr = "update ev_article_cate set is_delete=1 where Id=?";
  db.query(sqlStr, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.affectedRows !== 1) {
      return res.cc("删除文章分类失败!");
    }
    res.cc("删除文章分类成功！", 0);
  });
};

exports.getArtCateById = (req, res) => {
  const sqlStr = "select * from ev_article_cate where Id=?";
  db.query(sqlStr, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.length !== 1) {
      return res.cc("获取文章分类数据失败！");
    }
    res.send({
      status: 0,
      message: "获取文章分类数据成功！",
      data: results[0],
    });
  });
};

exports.updateCateById = (req, res) => {
  const sqlStr =
    "select * from ev_article_cate where Id<>? and (name=? or alias=?)";
  db.query(
    sqlStr,
    [req.body.Id, req.body.name, req.body.alias],
    (err, results) => {
      if (err) {
        return res.cc(err);
      }
      // 分类名称 和 分类别名 都被占用
      if (results.length === 2) {
        return res.cc("分类名称与别名被占用，请更换后重试！");
      }
      if (
        results.length === 1 &&
        results[0].name === req.body.name &&
        results[0].alias === req.body.alias
      ) {
        return res.cc("分类名称与别名被占用，请更换后重试！");
      }
      // 分类名称 或 分类别名 被占用
      if (results.length === 1 && results[0].name === req.body.name) {
        return res.cc("分类名称被占用，请更换后重试！");
      }
      if (results.length === 1 && results[0].alias === req.body.alias) {
        return res.cc("分类别名被占用，请更换后重试！");
      }
      const sqlStr = "update ev_article_cate set ? where Id=?";
      db.query(sqlStr, [req.body, req.body.Id], (err, results) => {
        if (err) {
          return res.cc(err);
        }
        if (results.affectedRows !== 1) {
          return res.cc("更新文章分类失败！");
        }
        res.cc("更新文章分类成功！", 0);
      });
    }
  );
};
