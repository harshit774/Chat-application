const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const router = require('./route');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(router);


//Socket.io conection and disconnection
io.on('connection', socket => {
    console.log("New User entered");

    socket.on('join', ({ name, room })=>{
        console.log(name,room);
    })
    socket.on('disconnect', ()=>{
        console.log("User had left");
    })
});


server.listen( PORT, () => console.log(`Server is running on port ${PORT}`));