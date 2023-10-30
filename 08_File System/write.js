const fs = require("fs");

let md = `
This is a new file
==================

ES6 Template literals are really cool. They honor whitespace.

    * Template literal
    * Node file system
    * Reading CLIs
`;

// fs.writeFileSync("es6.md", md.trim(), { encoding: "utf-8" });

// fs.writeFile("ES5.md", md.trim(), (err) => {
//   if (err) throw err;
// });
