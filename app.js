var app = require('express')(),
    server = require('http').Server(app),
    session = require('express-session'),
    mongoStore = require('connect-mongostore')({
        session: session
    }),
    mongoose = require('mongoose'),
    io = require('socket.io')(server);

    server.listen(8000,function(){
        console.log('Socket.io Running');
    });


// Express MongoDB session storage
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
        db: 'newTest',
        url: 'mongodb://localhost/newTest'
    })
}));

////Mongoose stuff
mongoose.connect('mongodb://localhost/newTest');

//Schemas
require('./modules/user.server.model.js');
require('./modules/question.server.model.js');

//Socket stuff
require('./socket.controller')(io);

//io.on('connection', function(socket){
//    socket.on('event:new:image',function(data){
//    });
//});
//
