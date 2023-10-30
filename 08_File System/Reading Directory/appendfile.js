const fs = require("fs");

if (fs.existsSync("./temp/newFolder/data.txt")) {
  fs.appendFileSync("./temp/newFolder/data.txt", "\nData to append");
  console.log(`The "data to append" was appended to file!`);
} else {
  console.log("File not found");
}

fs.appendFile(
  "./temp/folder 2/temp.txt",
  "Data to append\n",
  { encoding: "utf-8" },
  (err) => {
    if (err) throw err;
    console.log("Data has been appended");
  }
);
