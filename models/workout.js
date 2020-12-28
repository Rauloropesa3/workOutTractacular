const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    exercises: [
      {
        name: {
          type: String,
          required: "Enter the name of the exercise.",
          trim: true,
        },
        type: {
          type: String,
          required: "Enter an the type of exercise performed.",
          trim: true,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        duration: {
          type: Number,
          required: "In minutes, enter the duration of the exercise.",
        },
        distance: {
          type: Number,
        },
      },
    ],
    day: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
