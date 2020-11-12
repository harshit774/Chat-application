const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const router = require("./route");
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const { addUser, removeUser, getUser, userRoom } = require("./users");
const io = socketio(server);
app.use(router);
app.use(cors());

//Socket.io conection and disconnection
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    socket.emit("message", {
      user: "admin",
      text: `Welcome ${user.name} to the room ${user.room}`,
    });
    /*
        Broadcasting method - Sets the 'broadcast' flag when emitting an event. Broadcasting an event will send it to all the other sockets in the namespace except for yourself
        */
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined` });

    socket.join(user.room);
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: userRoom(user.room),
    });
    callback();
  });
  // user generated message
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: userRoom(user.room),
    });
    callback();
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    //show the message that specific user had left!!
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left!`,
      });
    }
  });
});

// server.listen( PORT, () => console.log(`Server is running on port`));

server.listen(PORT);
