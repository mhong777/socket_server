'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Owner Schema
 */
var UserSchema = new Schema({
	name: {
		type: String,
		default: ''
	}
});

mongoose.model('User', UserSchema);