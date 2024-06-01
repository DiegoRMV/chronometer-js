const displayChronometer = document.getElementById("chronometer");
const btnStartPause = document.getElementById("start-pause");
const btnRestart = document.getElementById("restart");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timeInterval;
let isStart = true;

const formatter = (unit) => {
	return unit < 10 ? "0" + unit : unit;
};

const updateChronometer = () => {
	seconds++;
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	} else if (minutes === 60) {
		hours++;
		minutes = 0;
	}

	displayChronometer.innerText = `${formatter(hours)}:${formatter(
		minutes
	)}:${formatter(seconds)}`;
};

btnStartPause.addEventListener("click", () => {
	if (isStart) {
		timeInterval = window.setInterval(updateChronometer, 1000);
		btnStartPause.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
		btnStartPause.classList.remove("start");
		btnStartPause.classList.add("pause");
		isStart = false;
	} else {
		window.clearInterval(timeInterval);
		btnStartPause.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
		btnStartPause.classList.remove("pause");
		btnStartPause.classList.add("start");
		isStart = true;
	}
});

btnRestart.addEventListener("click", () => {
	window.clearInterval(timeInterval);
	hours = minutes = seconds = 0;
	displayChronometer.innerText = "00:00:00";
	btnStartPause.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
	btnStartPause.classList.remove("pause");
	btnStartPause.classList.add("start");
	isStart = true;
});
