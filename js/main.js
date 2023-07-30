const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const newYears = '1 Jan 2024';

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    
    const allSecounds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(allSecounds / 3600 /24);
    const hours = Math.floor(allSecounds / 3600) % 24;
    const minuts = Math.floor(allSecounds / 60) % 60;
    const secounds = Math.floor(allSecounds) % 60;
    // console.log(hours);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minuts)
    secondsEl.innerHTML = formatTime(secounds)

};

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

setInterval(countDown,1000)

