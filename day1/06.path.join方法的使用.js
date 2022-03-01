import fs from "fs";
import path from "path";
const __dirname = path.resolve();

fs.readFile(path.join(__dirname, "./files/1.txt"), "utf8", (err, dataStr) => {
  if (err) {
    return console.log("文件读取失败!", err.message);
  }
  console.log(dataStr);
});
