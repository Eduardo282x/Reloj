let hourEl = document.querySelector('.hour')
let minuteEl = document.querySelector('.minute')
let secondEl = document.querySelector('.second')
let timeEl = document.querySelector('.time')
let dateEl = document.querySelector('.date')
let toggle = document.querySelector('.toggle')
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
toggle.addEventListener('click', (e)=>{
    const html = document.querySelector('html')
    if (html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime(){
    let time = new Date();
    let month = time.getMonth()
    let day = time.getDay()
    let date = time.getDate()
    let hours = time.getHours()
    let hoursForClock = hours >= 13 ? hours % 12 : hours;
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` :  minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    }

    const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime,1000)