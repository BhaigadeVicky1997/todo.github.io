
function clockFunction(){
    clockTime = new Date()
    currenthour = clockTime.getHours()
    timeformat = ""
    if (currenthour > 12){
        currenthour = currenthour - 12
        timeformat = "PM"
    }
    else{
        timeformat = "AM"
    }

    currentminute = clockTime.getMinutes()
    if (currentminute < 10){
        currentminute = "0"+currentminute
    }
    document.getElementById("time").innerHTML = `${currenthour}:${currentminute} ${timeformat}`
}

clockFunction()

const clock = setInterval(() => {
    clockFunction()
}, 1000);