import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

import workouts from "./routes/workouts.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// middle ware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workouts);
app.use("/api/users", userRoutes);

// connect to database
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    app.listen(4000, () => {
      console.log("connected to MongoDB $ listening to port 4000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });