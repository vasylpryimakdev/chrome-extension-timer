const timeElement = document.getElementById("time");
const currentTIme = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");
timeElement.textContent = `The time is: ${currentTIme}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finished settin badge text.");
  },
);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";

  nameElement.textContent = `Your name is ${name}`;
});

console.log(this);
