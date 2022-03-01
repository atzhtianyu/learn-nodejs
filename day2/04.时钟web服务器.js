import http from "http";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  // const fpath = path.join(__dirname, url);

  let fpath = "";

  if (url === "/") {
    fpath = path.join(__dirname, "./clock/index.html");
  } else {
    fpath = path.join(__dirname, "./clock", url);
  }

  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) {
      return res.end("<h1>404 Not Found</h1>");
    }
    res.end(dataStr);
  })
});

server.listen(8080, () => {
  console.log("Server is running at http://127.0.0.1:8080");
});
