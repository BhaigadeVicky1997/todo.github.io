// Fetch
if (localStorage.length != 0) {
    let data = JSON.parse(localStorage.getItem('reminders'))
    // console.log(data.length)
    if (data.length != 0) {
        for (i in data) {
            current_reminder = data[i]
            today_date = new Date()
            ending_date = new Date(current_reminder.endDate)
            // reminder_out = new Date()
            timediffernce = ending_date.getTime() - today_date.getTime();
            // console.log(timediffernce)
            let remainingDays = Math.ceil(timediffernce / (1000 * 3600 * 24));
            // console.log(remainingDays < 0)
    
            if (remainingDays < 0) {
                document.getElementById('remidersList').innerHTML = ""
                document.getElementById('remidersList').innerHTML +=
                    `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div class="reminderBox">
                                <strong>${current_reminder.name}</strong>
                                <p>Start Date :- <i class="fa fa-calendar"></i> ${current_reminder.startDate}</p>
                                <p>End Date :- <i class="fa fa-calendar"></i> ${current_reminder.endDate}</p>
                                <p>Expired <b style="color: red;font-size: 1.5rem">${-(remainingDays)}</b> days before</p>
                            </div>
                        </div>`
            }
        }

    }
    else {
        $('#remidersList').html(
            `<div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="jumbotron text-center" style="max-width: 400px;margin: 0 auto;">Reminders Not Create Yet</div>
                    </div>`
        )
    }
}
else {
    $('#remidersList').html(
        `<div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="jumbotron text-center" style="max-width: 400px;margin: 0 auto;">Reminders Not Create Yet</div>
                </div>`
    )
}