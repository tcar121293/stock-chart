const controller = require('./controller')

exports = module.exports = function(io) {  

    io.on('connection', (socket) => {
        socket.on('sendData',)


      socket.on('disconnect', () => {
        //console.log('user disconnected');
      });
    });
  }