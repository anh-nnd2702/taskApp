const Task = require('../models/taskNote.js');

exports.getTaskByUserId = async (Id) =>{
    try{
        const taskList = await Task.find({
            userId : Id
        })
        return taskList;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

exports.updateTask = async (newData) =>{
    try{
        const {_id, userId, taskTitle, oldImages, newImages, taskNote, taskComment, deadlineTime, isDaily, category} = newData;
        const oldData = await Task.findById(_id)
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

exports.getTaskById = async (taskId) =>{
    try{
        const taskData = await Task.findOne({
            _id: taskId
        })
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

exports.createNewTask = async (newData) =>{
    try{
        const newTask = await Task.create(newData);
        return newTask;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
