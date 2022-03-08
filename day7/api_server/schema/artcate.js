const Joi = require("joi");

// 定义添加文章类型的验证规则
const name = Joi.string().min(1).max(20).required();
const alias = Joi.string().alphanum().required();

exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};

// 定义 分类 Id 的校验规则
const id = Joi.number().integer().min(1).required();

exports.delete_cate_schema = {
  params: {
    id,
  },
};

exports.get_cate_schema = {
  params: {
    id,
  }
}

exports.update_cate_schema = {
  body: {
    Id: id,
    name,
    alias,
  }
}