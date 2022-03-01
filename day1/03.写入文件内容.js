import { writeFile } from "fs";

writeFile("./files/2.txt", "abcde", "utf8", (err) => {
  if (err) {
    console.log("文件写入失败！", err.message);
    return;
  }
  console.log("文件写入成功！");
});
