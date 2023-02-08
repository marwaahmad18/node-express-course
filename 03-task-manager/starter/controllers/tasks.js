const Task = require('../models/Task')//Looking for our model & assigning it a Task variable, then accessing its location.

const getAllTasks = (req, res) =>{
    res.send('get all tasks')
}

const createTask = async (req, res) =>{
    res.send= await Task.create (req.body)
    res.status(201).json({task})
}
const getTask = (req, res) =>{
    res.send('get single task')//To test it, replace res.send wz res.json({id:req.params.id}) --> It should print z last url tag/code 
}
const updateTask = (req, res) =>{
    res.send('update task')
}
const deleteTask = (req, res) =>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}