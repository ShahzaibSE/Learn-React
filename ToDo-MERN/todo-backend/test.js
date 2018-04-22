'use strict'

const assert = require('assert');
const ToDo = require('./controllers/dbInjector').dataModels.todoModel;
var chai = require('chai');
var expect = chai.expect;

describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1,2,3].indexOf(4), -1);
      });
    });
});

describe('Get all todos', function() {
    it('should return all todos', function() {
        ToDo.find({}).exec(function todolist(err, data) {
            expect(data).to.be.a('array');
            done();
        })
    })
})

describe('Add a todos', function() {
    it ('should insert a new todo', function() {
        var newToDo = new ToDo({
            name: 'post test todo',
            createdAt: new Date().getTime()
        });
        newToDo.save(function(err, data){
            if (data) {
                expect(data).to.be.true;
                done();
            }
        });
    })
});


