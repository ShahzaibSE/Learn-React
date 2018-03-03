'use strict'

const mongoose = require('mongoose');
const dbModels = require('./../models/todo.model').models;

exports.dataModels = {
    todoModel : dbModels.ToDo()
};
