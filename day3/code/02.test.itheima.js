const itheima = require("./itheima-tools");

const dtStr = itheima.dateFormat(new Date());

console.log(dtStr);

console.log("---------");

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

const str = itheima.htmlEscape(htmlStr);

console.log(str);

console.log("---------");

console.log(itheima.htmlUnescape(str));
