import { readFile } from "fs";
import path from "path";
const __dirname = path.resolve();

// readFile(
//   "/Users/lala/Documents/Tianyu/FrontEnd/nodejs/files/1.txt",
//   "utf8",
//   (err, dataStr) => {
//     if (err) {
//       return console.log("读取文件失败!" + err.message);
//     }
//     console.log(dataStr);
//   }
// );

readFile(__dirname + "/files/1.txt", "utf8", (err, dataStr) => {
  if (err) {
    return console.log("读取文件失败!" + err.message);
  }
  console.log(dataStr);
});

console.log(__dirname);
