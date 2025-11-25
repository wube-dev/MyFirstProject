// //how to know current file path
// const mik = require("path");
// console.log("current file path:", __filename);
//console.log("current dir path:", __dirname);
// ==============================================================================
// 1. Create a simple web server using http module
// creat simple web server using http module
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   // ✅ Make "/" the default route
//   if (req.url === "/" || req.url === "/home") {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     // Serve your default HTML page
//     const filePath1 = path.join(__dirname, "day1.html");
//     fs.readFile(filePath1, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end("<h1>Internal Server Error</h1>");
//         return;
//       }
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Welcome to About Page</h1>");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("<h1>404 Page Not Found</h1>");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`✅ Server running at: http://localhost:${PORT}`);
// });

// ==============================================================================
// 2. Create a simple web server using css and html file
