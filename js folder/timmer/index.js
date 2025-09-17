
function update(){
var date = new Date("feburary 20, 2026 00:00:00").getTime();
let time = setInterval(function (){})
let now = new Date().getTime()
let dis = date - now;
let months = Math.floor(dis / (1000 * 60 * 60 * 24 * 30))
let days = Math.floor((dis %(1000 * 60 * 60 * 24 * 30))/(1000 * 60  * 24))
let sec = Math.floor((dis %(1000 * 60)/1000));
let min = Math.floor((dis %(1000 * 60 * 60 ))/(1000 * 60 ));
let hours = Math.floor(dis %(1000 * 60 * 60 * 24 * 30)/(1000 * 60 * 60))





document.getElementById("months").innerHTML =  months;
document.getElementById("days").innerHTML =  days;
document.getElementById("sec").innerHTML =  sec;
document.getElementById("mins").innerHTML = min;
document.getElementById("hours").innerHTML = hours;
}
setInterval(update , 1000);
