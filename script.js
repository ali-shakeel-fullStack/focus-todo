let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");

let focusTime = document.querySelector("#focusTime");
let focusTime2 = document.querySelector("#focusTime2");

let time25 = document.querySelector("#time");
let time5 = document.querySelector("#time2");

let startBtn = document.querySelector("#startBtn");
let startBtn2 = document.querySelector("#startBtn2");

let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");

let sound = document.querySelector("#alarmTone")

// Mouse Effect
let body = document.querySelector("body");
let mouse = document.querySelector(".mouse");
body.addEventListener('mousemove', (e) => {
    mouse.style.left = e.x + "px"
    mouse.style.top = e.y + "px"
})

// 25 Minutes Function
function func25() {
    container.classList.add("true")
    startBtn.addEventListener('click', function () {
        let interval25 = setInterval(focusTimer, 1000)
        let startMinutes = 25;
        let time = startMinutes * 60;
        function focusTimer() {
            let minutes = Math.floor(time / 60)
            let seconds = time % 60;
            seconds < 10 ? "0" + seconds : seconds;
            span1.innerHTML = minutes;
            span2.innerHTML = seconds;
            if (span1.innerHTML < 10) {
                span1.innerHTML = "0" + minutes
            }
            if (span2.innerHTML < 10) {
                span2.innerHTML = "0" + seconds
            }
            time--;
            if (span1.innerHTML + span2.innerHTML == 0) {
                clearInterval(interval25)
                container.classList.remove("true")
                sound.play()
                func5()
            }
        }
    })
}
func25()
// 5 Minutes Function
function func5() {
    container2.classList.add("true")
    startBtn2.addEventListener('click', function () {
        let interval5 = setInterval(focusTimer2, 1000)
        let startMinutes = 5;
        let time = startMinutes * 60;
        function focusTimer2() {
            let minutes = Math.floor(time / 60)
            let seconds = time % 60;
            seconds < 10 ? "0" + seconds : seconds;
            span3.innerHTML = minutes;
            span4.innerHTML = seconds;
            if (span3.innerHTML < 10) {
                span3.innerHTML = "0" + minutes
            }
            if (span4.innerHTML < 10) {
                span4.innerHTML = "0" + seconds
            }
            time--;
            if (span3.innerHTML + span4.innerHTML == 0) {
                clearInterval(interval5)
                container2.classList.remove("true")
                sound.play()
                func25()
            }
        }
    })
}