const fs = require("fs");

let rootFiles = fs.readdirSync("../../");

fs.readdir("../", "utf-8", (err, files) => {
  if (err) throw err;
  console.log(files);
});
console.log(rootFiles);

console.log("hello World!");
