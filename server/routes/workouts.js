import express from "express"
import { getAllWorkouts, createWorkouts } from "../controllers/workoutsController.js";
const router = express.Router()

// get all workouts
router.get("/", getAllWorkouts);

// create/post workout
router.post("/", createWorkouts);

// get a single workout
router.get("/:id", (req, res) => {
    // res.json(req.body);
    res.json({msg: "getting a workout"})
});

// update workout
router.patch("/:id", (req, res) => {
    res.json(req.body);
});

// delete workout
router.delete("/:id", (req, res) => {
    res.json(req.body);
});

export default router;