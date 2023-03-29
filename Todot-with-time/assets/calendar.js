// week and month string
const getMonthStr = [
    { full: "January", short: "Jan", key: 0 },
    { full: "February", short: "Feb", key: 1 },
    { full: "March", short: "Mar", key: 2 },
    { full: "April", short: "Apr", key: 3 },
    { full: "May", short: "May", key: 4 },
    { full: "June", short: "Jun", key: 5 },
    { full: "July", short: "Jul", key: 6 },
    { full: "August", short: "Aug", key: 7 },
    { full: "September", short: "Sept", key: 8 },
    { full: "October", short: "Oct", key: 9 },
    { full: "November", short: "Nov", key: 10 },
    { full: "December", short: "Dec", key: 11 }
]

const weekStr = [
    { full: "Sunday", short: "Sun", key: 0 },
    { full: "Monday", short: "Mon", key: 1 },
    { full: "Tuesday", short: "Tue", key: 2 },
    { full: "Wednesday", short: "Wed", key: 3 },
    { full: "Thursday", short: "Thu", key: 4 },
    { full: "Friday", short: "Fri", key: 5 },
    { full: "Saturday", short: "Sat", key: 6 },
]


// get monthly calendar data
const dates = new Date();
let year = dates.getFullYear();
let month = dates.getMonth();


// getting dates from calendar
function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

// calendar function
const calendar = (y,m) => {
    document.getElementById('calendar').innerHTML = ""
    const monthStr = getMonthStr.find(p => p.key === m)
    document.getElementById("month").textContent = monthStr.full;
    document.getElementById("year").textContent = y;

    const today_date = new Date();

    for (i in weekStr) {
        document.getElementById('calendar').innerHTML += `<li class="list-inline-item week_names text-center">${weekStr[i].short}</li>`
    }


    const dateList = getAllDaysInMonth(y, m);
    for (let i in dateList) {
        weekNum = dateList[i].getDay()
        if (i == 0) {
            if (weekNum > 0) {
                for (let k = 0; k <= weekNum - 1; k++) {
                    document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center">&nbsp;</li>`
                }
            }
            // console.log(`Week num :- ${weekNum} ,  ${dateList[i]}`)
            // console.log('---------------------------------')
            if(`${today_date.getDate()} ${today_date.getMonth()} ${today_date.getFullYear()}}` == `${dateList[i].getDate()} ${dateList[i].getMonth()} ${dateList[i].getFullYear()}}`) {
                document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center today"><button class="btn btn-link">${dateList[i].getDate()}</button><input type="hidden" value="${dateList[i]}" /></li>`
            }
            else{
                document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center"><button class="btn btn-link">${dateList[i].getDate()}</button><input type="hidden" value="${dateList[i]}" /></li>`
            }
        }
        else {
            // console.log(`${weekNum} ,${dateList[i]}`)
            if(`${today_date.getDate()} ${today_date.getMonth()} ${today_date.getFullYear()}}` == `${dateList[i].getDate()} ${dateList[i].getMonth()} ${dateList[i].getFullYear()}}`){
                document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center today"><button class="btn btn-link">${dateList[i].getDate()}</button><input type="hidden" value="${dateList[i]}" /></li>`
            }
            else{
                document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center"><button class="btn btn-link">${dateList[i].getDate()}</button><input type="hidden" value="${dateList[i]}" /></li>`
            }
            
            if(i == dateList.length - 1){
                weekNum = dateList[i].getDay()
                // console.log(weekNum)
                if(weekNum < 6){
                    for(i=weekNum+1; i<=6;i++){
                        document.getElementById('calendar').innerHTML += `<li class="list-inline-item dates text-center next-month-dates">${i - weekNum}</li>`
                    }
                }
            }
        }
    }
    return 'Total dates available :- '+ dateList.length;
}

calendar(year,month);



$('.btn-next').click(function(){
    let next_month = month+1;
    let current_year = year;
    if(next_month > 11){
        next_month = 0;
        current_year += 1;
        year = current_year
    }
    month = next_month;
    calendar(current_year,next_month);
})

$('.btn-prev').click(function(){
    let prev_month = month-1;
    console.log(prev_month)
    let prev_year = year;
    if(prev_month < 0){
        prev_month = 11;
        prev_year -= 1;
        year = prev_year
    }
    month = prev_month;
    calendar(prev_year,prev_month);
})