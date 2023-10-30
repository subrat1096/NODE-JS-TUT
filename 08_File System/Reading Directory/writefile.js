const fs = require("fs");

const data = `
This is a test text file
========================
ES6 is really cool and have some awesome features
    *   Default Parameters
    *   Template literals
    *   Tagged Templates
    *   Destructing Assignments
    *   Arrow Function
    *   let and const
    *   Rest and Spread Syntax
    *   Map Objects
    *   Set Objects   
`;

fs.writeFileSync("./temp/newFolder/data.txt", data, { encoding: "utf-8" });

fs.writeFile("./temp/folder 2/temp.txt", data, { encoding: "utf-8" }, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
