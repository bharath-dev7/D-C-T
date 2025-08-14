let start = document.querySelector('#start');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');
let timerDisplay = document.querySelector('.time');

let[hour,minute,seconds] = [0,0,0];
let timeInterval = null;

let stopWatch = () => {
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minute++;
        if(minute === 60){
            minute = 0;
            hour++;
        }
    }
    displayTime();
}

let displayTime = () => {
    let h = hour < 10 ? "0" + hour : hour; 
    let m = minute < 10 ? "0" + minute :minute;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerDisplay.innerHTML=h+ ":" + m + ":" + s;
}

start.addEventListener('click', () => {
    if(timeInterval !== null){
        clearInterval(timeInterval);
    }
    timeInterval = setInterval(stopWatch,1000);
});
pause.addEventListener('click',() => {
    if (timeInterval !==null){
        clearInterval(timeInterval);
    }
});
reset.addEventListener('click', () =>{
    clearInterval(timeInterval);
    [hour,minute,seconds] = [0,0,0];
    displayTime();
});
