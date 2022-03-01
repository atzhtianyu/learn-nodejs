import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  console.log('Someone visit our web server');
});

server.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
})