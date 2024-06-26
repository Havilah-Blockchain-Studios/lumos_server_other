// "use strict"
// const fs = require('fs');
// const express = require("express")
// const { createServer } = require('node:https');
// const route = require("./src/routes/routes.js") 
// const app = express()
// const { Server } = require("socket.io");
// const { connect } = require("./src/controllers/socket.js");

// app.use("/", route)
// // Certificate
//  // const privateKey = fs.readFileSync('/etc/letsencrypt/live/backend.lumosdao.io/privkey.pem', 'utf8');
//  // const certificate = fs.readFileSync('/etc/letsencrypt/live/backend.lumosdao.io/fullchain.pem', 'utf8');
//  // const credentials = {
//  // 	key: privateKey,
//  // 	cert: certificate
//  // };

// const server = createServer(app);
// const io = new Server(server, {cors: {
//     origin: "*",
// }});

// // // Starting both http & https servers
//  // const httpsServer = https.createServer(credentials, app);
//  // httpsServer.listen(443, () => {
//  // 	console.log('HTTPS Server running on port 443');
//  // });

// let port = process.env.PORT || 4000
// server.listen(port,  () => {
//     console.log('server running at port ' + port);
// });
// io.on('connection', (socket) => {
//     connect(socket, io)
// });
"use strict";
const fs = require('fs');
const express = require("express");
const http = require('http'); // Import the http module
const route = require("./src/routes/routes.js");
const app = express();
const { Server } = require("socket.io");
const { connect } = require("./src/controllers/socket.js");

app.use("/", route);

// Create an HTTP server
const server = http.createServer(app); // Use createServer from the http module

const io = new Server(server, { cors: { origin: "*" } });

let port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('Server running at port ' + port);
});

io.on('connection', (socket) => {
    connect(socket, io);
});

 
