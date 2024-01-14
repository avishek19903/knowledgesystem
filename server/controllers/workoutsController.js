// import mongoose from "mongoose";
import workoutModel from "../models/workoutModel.js";

const getAllWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

const createWorkouts = async (req, res) => {
  const data = {
    title: req.body.title,
    reps: req.body.reps,
    load: req.body.load,
  };

  try {
    const workoutItem = await workoutModel.create(data);
    res.status(200).json(workoutItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createWorkouts, getAllWorkouts };
