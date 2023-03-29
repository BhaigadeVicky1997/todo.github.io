
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

    currentseconds = clockTime.getSeconds()
    if (currentseconds < 10){
        currentseconds = "0"+currentseconds
    }


    document.getElementById("time").innerHTML = `${currenthour}:${currentminute}<span>:<font color="yellow">${currentseconds}</font></span> ${timeformat}`
}

clockFunction()

const clock = setInterval(() => {
    clockFunction()
}, 1000);