const path = require('path');
const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const socketIO = require('socket.io');
const { generateMessage } = require('./utils/message');

var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new User connected...!');

  socket.on('disconnect', () => {
    console.log('User disconnected...!');
  });

  socket.emit(
    'newMessage',
    generateMessage('Admin', 'Welcome to the chat app')
  );

  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New user joined')
  );

  socket.on('createMessage', function (message) {
    console.log('createMessage', message);
    io.emit('newMessage', {
      ...message,
    });
    // socket.broadcast.emit('newMessage', {
    //   ...message,
    // });
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
