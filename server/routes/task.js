const express = require('express');
const router = express.Router();
const {authenToken} = require('../middlewares/auth.js');
const {getTaskById, getAllUserTask, createTask} = require('../controllers/task.js');

router.get('/', authenToken, getAllUserTask);
router.post('/', authenToken, createTask);

module.exports = router;