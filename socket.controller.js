module.exports = function (io) {
    'use strict';
var mongoose = require('mongoose'),
	User = mongoose.model('User'),
    Question = mongoose.model('Question');

    io.on('connection', function(socket){


        socket.on('test msg', function(input){
            console.log(input);
            io.emit('test back', input);
        });    
        
        
        socket.on('getAllQuestions', function(){
//            Question.findById(input.ownerId).exec(function(err, owner) {
            Question.find().sort('-created').exec(function(err, questions) {
                if (err) {
                    console.log(err);
                } else {                    
                    io.emit('allQuestions', questions);                                                                            
                }
            });                           
        });
        
        
        

    });    
};


//            Owner.findById(input.ownerId).exec(function(err, owner) {
//                if (err) {
//                    console.log(err);
//                } else {
//                    //toggle the player in the roster
//                    
//                    owner.save();
//                    console.log('after\n' + owner);
//                    var output={};
//                    output.owner=owner;
//                    io.emit('playerChosen', output);                                                                            
//                }
//            });     