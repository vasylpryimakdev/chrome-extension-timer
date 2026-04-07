const timeElement = document.getElementById("time");
const currentTIme = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTIme}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finished settin badge text.");
  },
);
