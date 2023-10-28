// importing the fs module from node_modules/nodejs library

const fs = require("fs");

// creating a new file named 'newfile.txt' in the current directory if it doesn't exist already using writeFileSync method of fs

fs.writeFileSync("newfile.txt", "Welcome to Node.js tutorial.\n");
fs.writeFileSync(
  "newfile.txt",
  "Welcome to Node.js tutorial.\nToday topic : Synchronous file creation, appending content to that file and reading the file.\n"
);

fs.appendFileSync("newfile.txt", "Today we will learn how to create a file, ");
fs.appendFileSync("newfile.txt", "how to append a file, ");
fs.appendFileSync("newfile.txt", "how to read a file, ");

// reading a file using readFileSync method of fs module. It reads the content synchronously and returns it as Buffer object

const buffer_data = fs.readFileSync("newfile.txt");
// console.log(buffer_data);

const utf_data = fs.readFileSync("newfile.txt", "utf-8");
console.log(utf_data);
// creating a new file named 'newfile.txt' in write mode (w) and writing some data to it using appendFile method of fs
