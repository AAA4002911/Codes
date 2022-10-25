let hour = 0;
let minute = 0;
let second = 0;
const display = document.getElementById('display');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const stop_btn = document.getElementById('stop');
pause_btn.disabled = "true";
stop_btn.disabled = 'true';
let timer;
let milisec = 0;

function stopwatch() {
    milisec += 100;
    if (milisec == 1000) {
        milisec = 0;
        second += 1;
        if (second == 60) {
            second = 0;
            minute += 1;
            if (minute == 60) {
                minute = 0;
                hour += 1;
            }
        }
    }
    let hh = hour < 10 ? "0" + hour : hour;
    let mm = minute < 10 ? "0" + minute : minute;
    let ss = second < 10 ? "0" + second : second;
    display.innerText = `${hh}:${mm}:${ss}`;
}


start_btn.addEventListener('click', () => {
    pause_btn.disabled = false;
    stop_btn.disabled = false;
    start_btn.disabled = true;
    timer = setInterval(stopwatch, 100);
})

let contine = true;
pause_btn.addEventListener('click', () => {
    if (contine == true) {
        clearInterval(timer);
        pause_btn.innerText = 'Continue';
        contine = false;
    }
    else {
        timer = setInterval(stopwatch, 100);
        pause_btn.innerText = 'Pause';
        contine = true;
    }
});

stop_btn.addEventListener('click', () => {
    clearInterval(timer);
    hour = 0, minute = 0, second = 0, milisec = 0;
    contine = true;
    display.innerText = '00:00:00';
    pause_btn.innerText = 'Pause';
    pause_btn.disabled = true;
    stop_btn.disabled = true;
    start_btn.disabled = false;
});