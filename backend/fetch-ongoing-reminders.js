// localStorage.removeItem("reminders")
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

            if ($('#remidersList').children().length == 0) {
                $('#expiredBtn').hide();
                $('#remidersList').html(
                    `<div class="col-lg-12 col-md-12 col-sm-12" id="expiredRemindersMessage">
                                <div class="jumbotron text-center" style="max-width: 400px;margin: 0 auto;">All reminder expired</div>
                                <div class="text-center mt-5"><a href="expired.html" class="btn btn-danger">View Expired</a></div>
                            </div>`
                )
            }
            else {
                if (remainingDays >= 0) {
                    $('#expiredBtn').show();
                    $('#expiredRemindersMessage').remove();
                    if (remainingDays <= 5) {
                        document.getElementById('remidersList').innerHTML +=
                            `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div class="reminderBox">
                                    <strong>${current_reminder.name}</strong>
                                    <span class="expireSoon enable"></span>
                                    <span class="actions">
                                        <button type="button" class="btn btn-link p-0" onclick="editRem(${i})"><i class="fa fa-pencil"></i></button>
                                        <button type="button" class="btn btn-link p-0" onclick="deleteRem(${i})"><i class="fa fa-trash"></i></button>
                                    </span>
                                    <button type="button" class="btn btn-info mt-3" onclick="viewRem(${i})">View</button>
                                </div>
                            </div>`
                    }
                    else {
                        document.getElementById('remidersList').innerHTML +=
                            `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div class="reminderBox">
                                    <strong>${current_reminder.name}</strong>
                                    <span class="expireSoon"></span>
                                    <span class="actions">
                                        <button type="button" class="btn btn-link p-0" onclick="editRem(${i})"><i class="fa fa-pencil"></i></button>
                                        <button type="button" class="btn btn-link p-0" onclick="deleteRem(${i})"><i class="fa fa-trash"></i></button>
                                    </span>
                                    <button type="button" class="btn btn-info mt-3" onclick="viewRem(${i})">View</button>
                                </div>
                            </div>`
                    }

                }
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