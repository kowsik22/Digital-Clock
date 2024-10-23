const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const toggleBtn = document.getElementById("toggle-format");

let is24HourFormat = false;

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (!is24HourFormat) {
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    ampmEl.textContent = ampm;
  } else {
    ampmEl.textContent = ""; // No AM/PM for 24-hour format
  }

  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

toggleBtn.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleBtn.textContent = is24HourFormat
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";
});

// Update time every second
setInterval(updateTime, 1000);

// Initialize time on page load
updateTime();
