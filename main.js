// Set the actual start date (July 18, 2024, 11:41 PM UTC)
const anniversaryDate = new Date(Date.UTC(2024, 6, 18, 23, 41, 0)); // Month is zero-indexed

function updateCounter() {
  const now = new Date();

  // Calculate the total difference in milliseconds
  const diff = now - anniversaryDate;

  if (diff < 0) {
    console.log("Start date is in the future. Please check the date.");
    return;
  }

  // Debugging: Print both current time and anniversary date
  console.log("Current time:", now);
  console.log("Anniversary time:", anniversaryDate);
  console.log("Time difference (ms):", diff);

  // Calculate years, months, days, hours, minutes, seconds
  const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  // Update the HTML elements
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Initial update and set interval to update every second
updateCounter();
setInterval(updateCounter, 1000);
