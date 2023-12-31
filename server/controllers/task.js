const taskServices = require('../services/task.js');

exports.getTaskById = async (req, res) =>{
    try{
        const {taskId} = req.body;
        const task = await taskServices.getTaskById(taskId);
        if(task){
            res.status(200).json({message: "get task success", task});
        }
        else{
            res.status(404).json({message: "task not found!"})
        }
    }
    catch(error){
        res.status(500).json({message: "internal server error!"})
    }
}

exports.getAllUserTask = async (req, res) =>{
    try{
        const userId = req.id;
        const taskList = await taskServices.getTaskByUserId(userId);
        if(taskList){
            res.status(200).json({message: "get task success", taskList});
        }
        else{
            res.status(404).json({message: "task not found!"})
        }
    }
    catch(error){
        res.status(500).json({message: "internal server error!"});
    }
}

exports.createTask = async (req, res)=>{
    try{
        const userId = req.id;
        const createAt = new Date ();
        const modifiedAt = new Date ();
        const {taskTitle, taskImages, taskNote, taskComment, deadlineTime, category, taskIndex } = req.body;
        const newData = {userId, taskTitle, taskImages, taskNote, taskComment, createAt, modifiedAt, deadlineTime, category, taskIndex};
        const newTask = await taskServices.createNewTask(newData);
        if(newTask){
            res.status(200).json({message: "task created success", newTask})
        }
        else{
           res.status(503).json({message: "task cannot create!"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "internal server error!"});
    }
}
