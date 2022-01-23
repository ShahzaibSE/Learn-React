'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.Model;

exports.UserModel = function() {
    var UserSchema = new Schema({
        _id: mongoose.Types._ObjectId,
        fullname: String,
        email: String, 
        password: String, 
        createdAt: Date,
        updatedAt: Date
    });

    return Model('user', UserSchema)
}

exports.ToDoModel = function() {
    var ToDo = new Schema({
        title: String, 
        createdAt: Date,
        updatedAt: Date
    });

    return Model('user', ToDo)
}