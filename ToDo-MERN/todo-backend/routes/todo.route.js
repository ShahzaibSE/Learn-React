const mongoose = require('mongoose');
const todoController = require('./../controllers/todo.controller');
const router = require('express').Router();

router.post('/add',todoController.add);
router.put('/update/:id',todoController.update);
router.get('/list',todoController.selectall);
router.delete('/delete',todoController.delete);
router.post('/test',function testfun(req,res) {
    res.send({
        status : true, 
        resCode : 200,
        isError : false,
        message  : "Test response"
    });    
});
router.post('/test/entry', todoController.test);

module.exports = router;