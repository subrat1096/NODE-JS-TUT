const fs = require("fs");

//! reading directory :
// let files = fs.readdirSync("./");

// console.log(files);

// fs.readdir("./", (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });

// console.log("Reading files....");

//! reading file :
// let ipsum = fs.readFileSync("./readme.md", { encoding: "utf-8" });

// console.log(ipsum);

fs.readFile("./readme.md", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// console.log("Reading files....");
