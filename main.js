let hr = min = sec = ms = "0" + 0,
starTimer,
isTimerRunning = false;

const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    if (!isTimerRunning) {
        startBtn.classList.add("active");
        stopBtn.classList.remove("stopActive");
        isTimerRunning = true;

        starTimer = setInterval(() => {
            ms++;
            ms = ms < 10 ? "0" + ms : ms;

            if (ms == 100) {
                sec++;
                sec = sec < 10 ? "0" + sec : sec;
                ms = "0" + 0;
            }
            if (sec == 60) {
                min++;
                min = min < 10 ? "0" + min : min;
                sec = "0" + 0;
            }
            if (min == 60) {
                hr++;
                hr = hr < 10 ? "0" + hr : hr;
                min = "0" + 0;
            }

            putValue();
        }, 10);
    }
}

function stop() {
    if (isTimerRunning) {
        startBtn.classList.remove("active");
        stopBtn.classList.add("stopActive");
        clearInterval(starTimer);
        isTimerRunning = false;
    }
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(starTimer);
    isTimerRunning = false;
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector(".melisecond").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hours").innerText = hr;
}
