init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workoutTracker_db) {
      location.search = "?id=" + workoutTracker_db._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}
