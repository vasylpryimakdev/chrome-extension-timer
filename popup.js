const timeElement = document.getElementById("time");
const timerElement = document.getElementById("timer");
const nameElement = document.getElementById("name");

function updateTimeElement() {
  const currentTime = new Date().toLocaleTimeString();

  timeElement.textContent = `The time is: ${currentTime}`;

  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;

    timerElement.textContent = `The timer is at: ${time} seconds`;
  });
}

updateTimeElement();

setInterval(() => {
  updateTimeElement();
}, 1000);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";

  nameElement.textContent = `Your name is ${name}`;
});

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  console.log("clicked");

  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  console.log("clicked");

  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  console.log("clicked");
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
});
