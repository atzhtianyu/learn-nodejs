const qs = require("querystring");
const bodyParser = (req, res, next) => {
  // 存储请求体数据
  let str = "";

  // 监听 req 的 data 事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  // 监听 req 的 end 事件
  req.on("end", () => {
    // 在 str 中存储的是完整的请求体数据
    // console.log(str);

    // 调用 querystring 的方法解析字符串
    const body = qs.parse(str);
    console.log(body);
    req.body = body;
    next();
  });
};

module.exports = bodyParser;
