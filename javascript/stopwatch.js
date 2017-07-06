var START = document.getElementById("start");
var STOP = document.getElementById("stop");
var LOG = document.getElementById("log");
var RESET = document.getElementById("reset");
var WATCH = document.getElementById("stopWatch");

var timer = [0, 0, 0, 0];
var interval;
var time = 1
var currentTime;

// Add leading zero//

function leadingZero(time) {
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}


// Run the Stop Watch//


function startWatch() {
   currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    WATCH.innerHTML = currentTime;
    timer[3]++;
    
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - timer[0] * 6000);
}



// Start the Stop Watch//


function go() {
    interval = setInterval(startWatch, 10);
}


// Stop the Stop Watch//


function stopWatch() {
    clearInterval(interval);
}


// Log the Time//


function logTime() {
    var saveTime = document.getElementById("time" + time);
    if (time < 5) {
        saveTime.innerHTML = currentTime;
        time++;
    } else {
        saveTime.innerHTML = currentTime;
        time = 1
    }
}


// Reset the Stop Watch//

function resetWatch() {
    clearInterval(interval);
    interval = null;
    WATCH.innerHTML = "00:00:00";
    timer = [0, 0, 0, 0];
    time = 1;
    for(var i = 1; i <= 5; i++){
        var resetTime = document.getElementById("time" + i)
        resetTime.innerHTML = "00:00:00"
        }
    }




START.addEventListener("click", go);
STOP.addEventListener("click", stopWatch);
LOG.addEventListener("click", logTime);
RESET.addEventListener("click", resetWatch);