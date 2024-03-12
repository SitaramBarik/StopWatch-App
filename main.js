let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateStopwatch();
}

function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('stopwatch').innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}