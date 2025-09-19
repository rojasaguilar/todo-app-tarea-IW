import mongoose from 'mongoose';
import taskModel from '../models/taskModel.js';

const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        return res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: { tasks },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error,
        });
    }
};

const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await taskModel.findById(id);
        return res.status(200).json({
            status: 'success',
            data: { task },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error,
        });
    }
};

const createTask = async (req, res) => {
    const data = req.body;

    try {
        const task = await taskModel.create(data);
        return res.status(201).json({
            status: 'success',
            data: { task },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error,
        });
    }
};

const completeTask = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const task = await taskModel.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        return res.status(201).json({
            status: 'success',
            data: { task },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: error,
        });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await taskModel.findByIdAndRemove(id);
        return res.status(200).json({
            status: 'sucess',
            data: task,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'sucess',
            message: error,
        });
    }
};

export default {
    getTasks,
    getTask,
    createTask,
    completeTask,
    deleteTask,
};
