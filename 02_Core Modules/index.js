// Consider modules to be the same as the JavaScript libraries. A set of function you want to include in your application

// Node JS has a set of built-in modules which you can use without any further installation.

// One such module is the 'http' module, it provides an HTTP server that we will be using to create our webserver.

const http = require("http"); // importing the HTTP module from node_modules/nodejs library

// Create an HTTP server and listen on port 3000
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
