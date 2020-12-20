const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const workoutTracker_dbSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },
    exercises: [
      {
        type: {
          type: String,
          required: "Exercise Type is Required",
        },
        name: {
          type: String,
          trim: true,
          required: " Exercise Name is Required",
        },
        duration: {
          type: Number,
          required: "Duration of session is Required",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  opts
);

workoutTracker_dbSchema.virtual("totalDuration").get(() => {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutTracker_dbSchema);

module.exports = Workout;
