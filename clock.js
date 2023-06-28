const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minute");
const secondsElement = document.querySelector(".seconds");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const hourDeg = (hour / 12) * 360;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minute / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (second / 60) * 360;
  secondsElement.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
