let valid_date = document.getElementById("date");
let time = document.getElementById("timer");
let id_date = document.getElementById("id_date");
let date = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let today_day = date.getDate();
let today_month = months[date.getMonth()];
let today_year = date.getFullYear();

valid_date.innerHTML = today_day + " " + today_month + " " + today_year;

let newDate = new Date();
let t;

// Get formatted time as HH:MM
function formatTime(hours, minutes) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

let gethours = newDate.getHours();
let getminutes = newDate.getMinutes();
time.innerHTML = formatTime(gethours, getminutes);

next_week = newDate.setDate(newDate.getDate() + 6);
var countDownDate = new Date(next_week).getTime();

const id_year = date.getFullYear() * 1e4; 
const id_month = (date.getMonth() + 1) * 100; 
const id_day = date.getDate();
const result = id_year + id_month + id_day; 
id_date.innerHTML = result;

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days > 0) {
        timer.innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s "; 
    } else {
        timer.innerHTML = hours + "h : " + minutes + "m : " + seconds + "s "; 
    }

    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);
