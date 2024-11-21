// Adding the Timer class for all the timer functionality

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started");
  },
  onTick() {
    console.log("Ticking");
  },
  onComplete() {
    console.log("Timer is done");
  },
});
