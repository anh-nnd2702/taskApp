const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    taskTitle: { type: String, required: true },
    taskImages: [{ type: String }],
    taskNote: { type: String },
    taskComment: {type: String},
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date },
    deadlineTime: { type: Date },
    category: { type: String },
    taskIndex: {type: Number, require: true}
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;