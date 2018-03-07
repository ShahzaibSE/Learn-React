const mongoose = require('mongoose');
const ToDo = require('./dbInjector').dataModels.todoModel;

// Response
const success_response = require('./../response/success.response');
const error_response = require('./../response/error.response');

// CRUD.
exports.add = function (req, res) {
    let body = req.body; // request params. 
    console.log('Request params');
    console.log(body);
    ToDo.findOne({ name: body.name }).exec( function checkTodo(err, data) {
        if (err) {
            res.send(error_response.select);
        } else if (data) {
            res.send(success_response.select_exist);
        } else {
            // New Todo.
            let insertObj = {
                name : body.name,
                createdAt : new Date().getTime()
            };
            let newTodo = new ToDo(insertObj);
            newTodo.save(newTodo, function newReceordCheck(err, data) {
                if (err) {
                    res.send(error_response.insert);
                } else if (data) {
                    res.send(success_response.insert);
                }
            });
        }
    })
}

exports.update = function (req,res) {
    let body = req.body; // request params.
    let urlParams = req.params // Url params.
    let update =  {name : body.name, updatedAt: new Date().getTime() }
    ToDo.update({_id: urlParams.id}, {$set : update})
        .exec(function updateTodo(err, data) {
            if (err) {
                res.send(error_response.update);
            } else  if (data) {
                res.send(success_response.update);
            }
        })
}

exports.delete = function (req,res) {
    let body = req.body;
    let urlParams = req.params;
    ToDo.remove({_id: urlParams._id}).exec(function removeResponse(err, data) {
        if (err) {
            res.send(error_response.delete);
        } else if (data) {
            res.send(success_response.delete);
        }
    })
}

exports.selectall = function (req,res) {
    ToDo.find({}).exec(function datalist(err, data) {
        if (err) {
            res.send(error_response.select);
        }else if (data) {
            success_response.select.data = data; // Overriding object.
            res.send(success_response.select);
        }
    });
}

exports.test  = function (req,res) {
    let test = {
        name : req.body.name
    }
    console.log('Test entry');
    console.log(test);
    let newDocument = new ToDo(test);
    newDocument.save(function testResponse(err,data) {
        res.send({
            status : true,
            resCode : 200,
            isError: false,
            message  : "Test response"
        });
    })
}