import { readFile, writeFile } from "fs";

readFile("./files/成绩.txt", "utf8", (err, dataStr) => {
  if (err) {
    console.log("读取失败!", err.message);
    return;
  }
  const arrOld = dataStr.split(" ");
  const arrNew = [];
  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", ":"));
  });
  const newStr = arrNew.join("\n");
  console.log(newStr);
  writeFile("./files/成绩-ok.txt", newStr, (err) => {
    if (err) {
      console.log("文件写入失败!", err.message);
      return;
    }
    console.log("成绩写入成功!");
  });
});
