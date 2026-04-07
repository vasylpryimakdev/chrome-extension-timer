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
