import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllTask } from '../apis/taskApi.js'

const HomePage = () => {
    const navigate = useNavigate();
    const [tasks, setTask] = useState([]);
    const [dailyTask, setDailyTask] = useState([]);
    const [startingTask, setStartingTask] = useState([]);
    const [doingTask, setDoingTask] = useState([]);
    const [warningTask, setWarningTask] = useState([]);
    const [doneTask, setDoneTask] = useState([]);

    const checkLogin = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!(isLoggedIn === true || isLoggedIn === 'true')) {
            navigate("/login");
        }
    }

    const fetchTask = async () => {
        try {
            const taskList = await getAllTask();
            if (taskList) {
                setTask(taskList);
                const dailyTasks = taskList.filter((task) => {
                    return task.category === "daily";
                })
                setDailyTask(dailyTasks);

                const startingTasks = taskList.filter((task) => {
                    return task.category === "starting";
                })
                setStartingTask(startingTasks);

                const doingTasks = taskList.filter((task) => {
                    return task.category === "doing";
                })
                setDoingTask(doingTasks);

                const warningTasks = taskList.filter((task) => {
                    return task.category === "warn";
                })
                setWarningTask(warningTasks);

                const doneTasks = taskList.filter((task) => {
                    return task.category === "done";
                })
                setDoneTask(doneTasks);
            }
        }
        catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        checkLogin();
        fetchTask();
    }, []);

    return (
        <div className="home-body">
            <h1 className="home-title">Here we go again</h1>
            {tasks && tasks.length > 0 && (
                <div className="all-task">
                    <div className="task-col">
                        <div className="col-head daily-head">
                            <h2>Daily</h2>
                            <button type="button"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="task-list daily-list">
                            {dailyTask && dailyTask.length > 0 &&
                                dailyTask.map((task) => (
                                    <div key={task._id} className="task-card daily-card">
                                        <h3>{task.taskTitle}</h3>
                                        <p>{task.taskNote}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="task-col">
                        <div className="col-head start-head">
                            <h2>Starting</h2>
                            <button type="button"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="task-list start-list">
                            {startingTask && startingTask.length > 0 &&
                                startingTask.map((task) => (
                                    <div key={task._id} className="task-card start-card">
                                        <h3>{task.taskTitle}</h3>
                                        <p>{task.taskNote}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="task-col">
                        <div className="col-head doing-head">
                            <h2>On process</h2>
                            <button type="button"><i className="fa-solid fa-plus"></i></button>
                        </div>

                        <div className="task-list doing-list">
                            {doingTask && doingTask.length > 0 &&
                                doingTask.map((task) => (
                                    <div key={task._id} className="task-card doing-card">
                                        <h3>{task.taskTitle}</h3>
                                        <p>{task.taskNote}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="task-col">
                        <div className="col-head warn-head">
                            <h2>Problems</h2>
                            <button type="button"><i className="fa-solid fa-plus"></i></button>
                        </div>

                        <div className="task-list warn-list">
                            {warningTask && warningTask.length > 0 &&
                                warningTask.map((task) => (
                                    <div key={task._id} className="task-card warn-card">
                                        <h3>{task.taskTitle}</h3>
                                        <p>{task.taskNote}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="task-col">
                        <div className="col-head done-head">
                            <h2>Done</h2>
                            <button type="button"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="task-list done-list">
                            {doneTask && doneTask.length > 0 &&
                                doneTask.map((task) => (
                                    <div key={task._id} className="task-card done-card">
                                        <h3>{task.taskTitle}</h3>
                                        <p>{task.taskNote}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage