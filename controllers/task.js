const Task = require('../model/taskmodel')

const getAlltasks = async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async(req, res) => {

    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
        //res.json(task)

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


const showTask = async(req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            return res.status(404).json({ msg: `Task with the id:${taskId} is not found` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async(req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `The task with the id:${taskId} does not exist` })
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async(req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })
        if (!task) {
            return res.status(404).json(`The task with the id:${taskId} is not found`)
        }
        res.status(200).json({ msg: `Task successfully deleted` })
    } catch (error) {
        res.status('500').json({ msg: error })
    }
}

module.exports = {
    getAlltasks,
    createTask,
    showTask,
    updateTask,
    deleteTask,
}