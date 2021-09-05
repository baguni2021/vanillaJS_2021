const clock = document.querySelector('.clock_digit');

function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const parseHours = parseInt(hours);
  if (parseHours > 12) {
    hours = parseHours - 12;
    hours = String(hours).padStart(2, '0');
    clock.innerText = `PM ${hours}:${minutes}:${seconds}`;
  } else {
    clock.innerText = `AM ${hours}:${minutes}:${seconds}`;
  }
}

getClock();
setInterval(getClock, 1000);
