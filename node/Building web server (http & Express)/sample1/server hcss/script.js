// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const mt = require("mime-types");

// const server = http.createServer((req, res) => {
//   // Default file = index.html
//   const filePath = path.join(
//     __dirname,
//     "hcss",
//     req.url === "/" ? "index.html" : req.url
//   );

//   const mimeType = mt.lookup(filePath) || "text/plain";

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end("<h1>404 File Not Found</h1>");
//     } else {
//       res.writeHead(200, { "Content-Type": mimeType });
//       res.end(data);
//     }
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`✅ Server running at: http://localhost:${PORT}`);
// });

// Import the Express framework.
// Express is a fast, minimalist web framework for Node.js
// that simplifies handling HTTP requests and serving files.
const express = require("express");

// Create an instance of an Express application.
// The 'app' object represents your web server.
const app = express();

// Middleware to serve static files (HTML, CSS, JS, images, etc.)
// 'express.static("hcss")' tells Express to look inside the "hcss" folder
// and automatically serve any files requested by the browser.
//
// Example:
//  - Request:  GET /           → serves hcss/index.html (if exists)
//  - Request:  GET /style.css  → serves hcss/style.css
//  - Request:  GET /img/pic.jpg → serves hcss/img/pic.jpg
//
// Express automatically sets the correct 'Content-Type' header for each file
// (e.g., text/html, text/css, image/png, etc.)
// and returns a 404 error if the file does not exist.
app.use(express.static("hcss"));

// Define the port number your server will listen on.
// Port 3000 is commonly used for local development.
// You can also use process.env.PORT to allow dynamic port assignment.
const PORT = 3000;

// Start the server and make it listen on the defined port.
//
// 'app.listen' starts the HTTP server.
// Once it starts successfully, the callback function runs and logs a message.
//
// Note: The callback here doesn't actually receive an 'err' argument by default.
// To handle server errors properly, you'd typically use an 'error' event listener.
// But this code still works fine for basic usage.
app.listen(PORT, (err) => {
  if (err) console.log(err); // Logs an error if something unexpected happens.
  
  // Logs a message to confirm that the server is running successfully.
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
