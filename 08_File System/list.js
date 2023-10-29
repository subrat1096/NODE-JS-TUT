const fs = require("fs");

// let files = fs.readdirSync("./");

// console.log(files);

fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log(files);
});

console.log("Reading files....");
