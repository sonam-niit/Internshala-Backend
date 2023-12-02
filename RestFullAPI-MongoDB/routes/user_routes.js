const express= require('express');
const { getAllUsers, getUserById, addUser, updateUser, deleteUser }
 = require('../controllers/user_controller');

const router= express.Router();

router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.post('/',addUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports= router;