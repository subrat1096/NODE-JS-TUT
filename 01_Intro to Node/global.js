// Inspecting the global object

// Global objects#
// These objects are available in all modules. The following variables may appear to be global but are not. They exist only in the scope of modules, see the module system documentation:

// __dirname;
// __filename;
// exports;
// module;
// require();

// console.log("hello world");

// console.log(global);
// console.log(globalThis);

// console.log(__dirname);
// console.log(__filename);

// for (const key in global) {
//   console.log(key);
// }

console.log(process.argv);

function grab(flag) {
  const index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
}
let user = grab("--user");
let greeting = grab("--greeting");
console.log(user);
console.log(greeting);
