import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;
  const str = `您请求的 url 为 ${url}, 请求的 method 类型是 ${method}`;
  // 解决中文乱码的问题
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  console.log(str);
  res.end(str);
});

server.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
