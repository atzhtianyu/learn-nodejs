import fs from "fs";
import path from "path";
const __dirname = path.resolve();

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.css"), newCSS, (err) => {
    if (err) {
      return console.log("写入CSS失败" + err.message);
    }
    console.log("写入CSS成功");
  });
}

function resolveJS(htmlStr) {
  const r1 = regScript.exec(htmlStr);
  const newJS = r1[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJS, (err) => {
    if (err) {
      return console.log("写入JS失败" + err.message);
    }
    console.log("写入JS成功");
  });
}

function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, "./clock/index.html"), newHTML, (err) => {
    if (err) {
      return console.log("写入HTML失败" + err.message);
    }
    console.log("写入HTML成功");
  });
}

fs.readFile(path.join(__dirname, "./clock.html"), "utf8", (err, dataStr) => {
  if (err) {
    return console.log("读取文件失败" + err.message);
  }

  resolveCSS(dataStr);

  resolveJS(dataStr);

  resolveHTML(dataStr);
});
