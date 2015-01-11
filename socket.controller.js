module.exports = function (io) {
    'use strict';

    io.on('connection', function(socket){
        socket.on('event:new:image',function(data){
            socket.broadcast.emit('event:incoming:image',data);
        });


        socket.on('test msg', function(input){
            console.log(input);
            io.emit('test back', input);
        });    
        
        

    });    
};