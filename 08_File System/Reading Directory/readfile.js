const fs = require("fs");

let file = fs.readFileSync("./readdir.js", "utf-8");
console.log(file);

fs.readFile("../ES5.md", "utf-8", (err, data) => {
  if (!err) console.log(data);
});
