const TodoModel = require('../models/todo.model');

const addTodo = async (req, res) => {

    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send({ message: 'All fields are mandatory' })
    }
    try {
        const newTodo = new TodoModel({
            title,
            description,
            status: 'Pending',
            user: req.user.id
        })

        const resp = await newTodo.save();
        return res.status(201).send({ message: 'Todo added successfully' })
    } catch (error) {
        return res.status(400).send({message:"Error occured while adding todo",error})
    }
}
const getAllTodo = async (req, res) => {
    try {
        const resp= await TodoModel.find({user:req.user.id});
        return res.status(200).send(resp);
    } catch (error) {
        return res.status(500).send({message:"Error Ocurred"})
    }
}
const updateById = async (req, res) => {

}
const deleteById = async (req, res) => {

}
module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    deleteById
}