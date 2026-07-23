const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let players = [];

io.on('connection', (socket) => {
    if (players.length < 2) {
        players.push(socket.id);
        const playerNum = players.length;
        socket.emit('assigned-player', playerNum);
        console.log(`Joueur ${playerNum} connecté : ${socket.id}`);
    } else {
        socket.emit('full');
    }

    socket.on('player-action', (data) => {
        socket.broadcast.emit('update-game', data);
    });

    socket.on('disconnect', () => {
        players = players.filter(id => id !== socket.id);
        console.log('Un joueur s\'est déconnecté.');
    });
});

server.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});