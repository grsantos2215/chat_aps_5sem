const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("UM NOVO USUÁRIO SE CONECTOU");

  socket.on("disconnect", () => {
    console.log("O USUÁRIO SE DESCONECTOU");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`SERVIDOR INICIADO NA PORTA ${PORT}`));
