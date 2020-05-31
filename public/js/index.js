var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server...!');
});

socket.emit('createMessage', {
  from: 'hello@gmail.com',
  text: 'hello, how are you...!'
});

socket.on('newMessage', function (message){
    console.log('newMessage', message)
})
