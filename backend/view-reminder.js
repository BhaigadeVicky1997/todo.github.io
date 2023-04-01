// single section view
function showReminder(reminder_name, endDate) {
    let date_1 = new Date(endDate);
    //console.log(date_1)
    let date_2 = new Date();
    //console.log(date_2)

    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let remaining_days = TotalDays - 1;
    let remaining_hours = (23 - date_2.getHours());
    let remaining_minutes = (59 - date_2.getMinutes());
    let remaining_seconds = (59 - date_2.getSeconds());
    if (remaining_days < 0) {
        remaining_days = 0
    }
    if (remaining_seconds < 10) {
        remaining_seconds = "0" + remaining_seconds
    }

    if (remaining_minutes < 10) {
        remaining_minutes = "0" + remaining_minutes
    }

    $("#detailBox").html(`
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <strong>${reminder_name}</strong>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                    <span class="days_text">${remaining_days} Days</span>
                </div>
            </div>
            <p class="mb-0">
                <b class="timer">
                    <span>${remaining_hours}</span>:
                    <span>${remaining_minutes}</span>:
                    <span style="color: red;">${remaining_seconds}</span>
                </b>
            </p>
            `)
}

function viewRem(index) {
    $('.overlay').addClass('show_overlay')
    $('.field_sidebar').removeClass('show_sidebar update_sidebar')
    let data = JSON.parse(localStorage.getItem('reminders'))
    let current_data = data[index]
    console.log(current_data)

    let rem_name = current_data.name

    let today1 = new Date()
    let reminder_startDate = new Date(current_data.startDate)
    const event_time_rem = Math.abs(reminder_startDate - today1);
    const event_start = Math.ceil(event_time_rem / (1000 * 60 * 60 * 24)); 
    console.log(event_start + " days");

    let reminder_endDate = current_data.endDate

    if(today1>=reminder_startDate){
        showReminder(rem_name, reminder_endDate)

        rem_interval = setInterval(() => {
            showReminder(rem_name, reminder_endDate)
        }, 1000)
        console.log("yes")
    }
    else{

        starting_date_text = current_data.startDate
        spliting_date = starting_date_text.split("/")
        const start_day = spliting_date[1]
        const start_month = spliting_date[0]
        const start_year = spliting_date[2]

        if(event_start > 1){
            $("#detailBox").html(
                `
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <strong>${rem_name}</strong>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                        <span class="days_text">${event_start} Days Left</span>
                    </div>
                </div>
                <p class="mb-0">
                    <b class="timer">
                    <span class="not_start_yet">Reminder Not Started Yet</span>
                    </b>
                    <span class="d-block">Start on :- <font color="red">${start_day}/${start_month}/${start_year}</font></span>
                </p>
                `
            )
        }
        else{
            $("#detailBox").html(
                `
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <strong>${rem_name}</strong>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                        <span class="days_text">${event_start} Day Left</span>
                    </div>
                </div>
                <p class="mb-0">
                    <b class="timer">
                    <span class="not_start_yet">Reminder Not Started Yet</span>
                    </b>
                    <span class="d-block">Start on :- <font color="red">${start_day}/${start_month}/${start_year}</font></span>
                </p>
                `
            )
        }

        console.log("No")
    }

    $('.viewDetail').addClass('show_detail')
}

$('#detailClose').click(function () {
    $('.overlay').removeClass('show_overlay')
    $('.viewDetail').removeClass('show_detail');

    setTimeout(() => {
        clearInterval(rem_interval)
        $('#detailBox').children().remove()
    }, 1000)
})