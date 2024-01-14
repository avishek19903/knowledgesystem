import mongoose from "mongoose";

import { workoutSchema } from "./schemas/workouts.js";

export default mongoose.model("workouts", workoutSchema);