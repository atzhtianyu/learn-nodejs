// 文章的路由模块
const express = require("express");
const multer = require("multer");
const path = require("path");
const expressJoi = require("../middleware/express-joi");

const router = express.Router();

const article_handler = require("../router_handler/article");

const {
  add_article_schema,
  del_article_schema,
  get_article_schema,
} = require("../schema/article");

const upload = multer({ dest: path.join(__dirname, "../uploads") });

console.log(__dirname);

// 发布文章的路由
router.post(
  "/add",
  upload.single("cover_img"),
  expressJoi(add_article_schema),
  article_handler.addArticle
);

router.get(
  "/delete/:id",
  expressJoi(del_article_schema),
  article_handler.delArticle
);

router.get("/list", article_handler.getArticle);

module.exports = router;
