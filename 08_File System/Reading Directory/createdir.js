const fs = require("fs");

fs.mkdirSync("./temp/newFolder", { recursive: true });

fs.mkdir("./temp/folder 2", { recursive: false }, (err) => {
  if (err) throw err;
  console.log("Created folder");
});
