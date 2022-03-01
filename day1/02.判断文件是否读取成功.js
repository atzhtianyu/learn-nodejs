import { readFile } from "fs";

readFile("files/1.txt", "utf8", (err, dataStr) => {
  if (err) {
    return console.log("读取文件失败！" + err.message);
  }
  console.log(dataStr);
});
