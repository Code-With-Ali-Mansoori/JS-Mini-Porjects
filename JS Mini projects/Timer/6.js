let StartBtn = document.getElementById('Start');
let StopBtn = document.getElementById('End');
let ResetBtn = document.getElementById('Reset');
let display = document.getElementById('timer');

let min = 0;
let sec = 0;
let msec = 0;

let timerId = null;

function timer(){
    msec++;
        if(msec == 60){
            sec++;
            msec = 0;
        } else if(sec == 60){
            min++;
            sec = 0;
        } else if(min == 60){
            msec++;
            min = min + 1;
        }

let msecStr = msec<10 ? `0${msec}` : msec;    
let secStr = sec<10 ? `0${sec}` : sec;
let mincStr = min<10 ? `0${min}` : min;       

display.innerHTML = ` ${mincStr}:${secStr}:${msecStr} `;
}

StartBtn.addEventListener('click', ()=>{
    if(timerId !== null){
    clearInterval(timerId)}
    timerId =  setInterval(timer,10);
})


ResetBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    display.innerHTML = ` 00:00:00 `;
    alert('You have to Re-set the Timer?');
    msec = sec =  min = 0;
})


StopBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    alert('You have to stop the Timer?');
})

