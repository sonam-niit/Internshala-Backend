const express = require('express');
const { addTodo, getAllTodo, deleteById, updateById } = require('../controllers/todo.controller');
const authenticate = require('../middlewares/protectedRoute');

const router= express.Router(); //creating express Router
router.post('/',authenticate,addTodo)
router.get('/',authenticate,getAllTodo);
router.delete('/:id',deleteById);
router.put('/:id',updateById);

module.exports=router;