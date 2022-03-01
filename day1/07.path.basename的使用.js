import path from "path";

const fPath = "a/b/c/index.html";

let fullName = path.basename(fPath);

console.log(fullName);

let nameWithoutExt = path.basename(fPath, ".html");

console.log(nameWithoutExt);
