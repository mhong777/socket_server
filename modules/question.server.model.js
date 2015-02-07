'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Owner Schema
 */
var QuestionSchema = new Schema({
	question: {
		type: String,
		default: ''
	},
    answers:[
        {type:String, default:''}
    ],
    majorcategory:{
        type:String,
        default:''
    },
    subcategory:{
        type:String,
        default:''
    }
    
    
});

mongoose.model('Question', QuestionSchema);