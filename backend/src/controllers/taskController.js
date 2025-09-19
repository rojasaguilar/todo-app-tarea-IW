import mongoose from "mongoose";
import taskModel from "../models/taskModel";

export const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        return res.status(200).json({
            status: "success",
            results: tasks.length,
            data: { tasks },
        });
    } catch (error) {}
};
