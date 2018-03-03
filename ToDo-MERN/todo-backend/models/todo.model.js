'use strict'

const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

exports.models = {
    ToDo : function() {
        let schema = mongoose.Schema({
            name: String,
            createdAt : new Date().getTime(),
            updatedAt : new Date().getTime(),
        }); 
    
        return mongoose.model('todos', schema);
    }
};
