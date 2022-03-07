const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "zty235613",
  database: "learnNodejs",
});

// db.query("select 1", (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(results);
// });

// 查询数据
// const sqlStr = "select * from users";

// db.query(sqlStr, (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(results);
// });

// 插入数据
// const user = { username: "SpiderMan", password: "pcc123" };

// const sqlStr = "INSERT INTO users (username, password) values (?, ?)";
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功!");
//   }
// });

// 便捷插入数据
// const user = { username: "Spider-Man2", password: "pcc4321" };

// const sqlStr = "INSERT INTO users set?";
// db.query(sqlStr, user, (err, results) => {
//   if (err) {
//     console.log(err.message);
//   }
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功!");
//   }
// });

// 更新数据
// const user = { id: 12, username: "SpiderMan2", password: "pcc4321" };
// const sqlStr = "update users set username=?, password=? where id=?";

// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   if (results.affectedRows === 1) {
//     console.log("更新成功!");
//   }
// });

// 便捷更新数据
// const user = { id: 12, username: "Spider-Man2", password: "pcc321" };
// const sqlStr = "update users set ? where id=?";
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   if (results.affectedRows === 1) {
//     console.log("更新成功!");
//   }
// });

// 删除数据
// const sqlStr = "delete from users where id=?";
// db.query(sqlStr, 7, (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   if (results.affectedRows === 1) {
//     console.log("删除成功!");
//   }
// });

// DELETE 语句过于危险，最好进行标记删除
const sqlStr = "update users set status=? where id=?";
db.query(sqlStr, [0, 12], (err, results) => {
  if (err) {
    return console.log(err.message);
  }
  if (results.affectedRows === 1) {
    console.log("删除成功!");
  }
})
