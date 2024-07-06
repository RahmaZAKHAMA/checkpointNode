const http = require("http");
let port = 4000;
const server = http
  .createServer((request, response) => {
    response.end("hello js");
  })
  .listen(port);
console.log(`Server listening on port ${port}`);
console.log(`Server running on http://localhost:${port}`);
