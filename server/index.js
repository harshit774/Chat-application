const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./route');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Socket.io conection and disconnection
io.on('connection', socket => {
    console.log("New User entered");
    socket.on('disconnect', ()=>{
        console.log("User had left");
    });
});
app.use(router);

app.listen( PORT, () => console.log(`Server is running on port ${5000}`));