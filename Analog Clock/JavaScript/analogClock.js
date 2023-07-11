let a = new Date().toTimeString();
let h = Number.parseInt(a.slice(0, 2));
let m = Number.parseInt(a.slice(3, 5));
let s = Number.parseInt(a.slice(6, 8));
let sec = 90 + (6 * s);
let min = 90 + (6 * m);
let hour = 0
if (h < 12) {
    hour = 90 + (30 * h);
}
else {
    hour = 90 + (30 * (h - 12));
}
document.getElementById("sec").style.transform = `rotate(${sec}deg)`;
document.getElementById("min").style.transform = `rotate(${min}deg)`;
document.getElementById("hr").style.transform = `rotate(${hour}deg)`;
setInterval(function () {
    sec += 6;
    document.getElementById("sec").style.transform = `rotate(${sec}deg)`;
    if (sec === 450 || sec === 90) {
        sec = 90;
        min += 6;
        document.getElementById("min").style.transform = `rotate(${min}deg)`;
        if (min === 450 || min === 90) {
            min = 90;
            hour += 30;
            document.getElementById("hr").style.transform = `rotate(${hour}deg)`;
            if (hour === 450) {
                hour = 90;
            }
        }
    }
}, 1000);
// setInterval(function () {
//     console.log("1 minute");
//     min += 6;
//     document.getElementById("min").style.transform = `rotate(${min}deg)`;
//     if (min === 450) {
//         min = 90;
//     }
// }, 60000);
// setInterval(function () {
//     console.log("1 hour");
//     hour += 15;
//     document.getElementById("hr").style.transform = `rotate(${hour}deg)`;
//     if (hour === 450) {
//         hour = 90;
//     }
// }, 3600000);
