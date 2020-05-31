const path = require('path');
const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const socketIO = require('socket.io');

var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new User connected...!');

  socket.on('disconnect', () => {
    console.log('User disconnected...!');
  });

  socket.on('createMessage', function (message) {
    console.log('createMessage', message);
  });

  socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createdAt: 123,
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
