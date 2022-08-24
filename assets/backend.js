// localStorage.removeItem("reminders")
// Fetch
if (localStorage.length != 0) {
    let data = JSON.parse(localStorage.getItem('reminders'))
    // console.log(data.length)
    if (data.length != 0) {
        for (i in data) {
            current_reminder = data[i]
            document.getElementById('remidersList').innerHTML +=
                `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div class="reminderBox">
                                <strong>${current_reminder.name}</strong>
                                <span class="actions">
                                    <button type="button" class="btn btn-link p-0" onclick="editRem(${i})"><i class="fa fa-pencil"></i></button>
                                    <button type="button" class="btn btn-link p-0" onclick="deleteRem(${i})"><i class="fa fa-trash"></i></button>
                                </span>
                                <button type="button" class="btn btn-danger mt-3" onclick="viewRem(${i})">View</button>
                            </div>
                        </div>`
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

// create
$('.btn_submit').click(function () {
    let rem_Name = $('#remName').val();
    let start_Date = $('#startDate').val();
    let end_Date = $('#endDate').val();

    if (rem_Name == '' && start_Date == '' && end_Date == '') {
        alert('Please fill all fields')
    }
    else if (rem_Name == '') {
        alert('Please fill reminder name')
    }
    else if (start_Date == '') {
        alert('Please fill start date')
    }
    else if (end_Date == '') {
        alert('Please fill end date')
    }
    else {
        currentItemArr = {
            "name": rem_Name,
            "startDate": start_Date,
            "endDate": end_Date
        }

        if (localStorage.length != 0) {
            already_data = JSON.parse(localStorage.getItem('reminders'))
            already_data.push(currentItemArr)
            console.log(already_data)
            localStorage.setItem("reminders", JSON.stringify(already_data))
            window.location.reload();
        }
        else {
            console.log(localStorage.length)
            remArr = []
            remArr.push(currentItemArr)
            localStorage.setItem("reminders", JSON.stringify(remArr))
            window.location.reload();
        }
    }

})

// delete
function deleteRem(index) {
    //alert(index)
    let data = JSON.parse(localStorage.getItem('reminders'))
    data.splice(index, 1)
    console.log(data)
    localStorage.setItem("reminders", JSON.stringify(data))
    window.location.reload();
}



// single section view
function showReminder(reminder_name, endDate) {
    let date_1 = new Date(endDate);
    console.log(date_1)
    let date_2 = new Date();
    console.log(date_2)

    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let remaining_days = TotalDays - 1;
    let remaining_hours = (23 - date_2.getHours());
    let remaining_minutes = (59 - date_2.getMinutes());
    let remaining_seconds = (59 - date_2.getSeconds());
    if (remaining_seconds<10){
        remaining_seconds = "0" + remaining_seconds 
    }

    if (remaining_minutes<10){
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
    $('.field_sidebar').removeClass('show_sidebar update_sidebar')
    let data = JSON.parse(localStorage.getItem('reminders'))
    let current_data = data[index]
    console.log(current_data)

    let rem_name = current_data.name
    let reminder_endDate = current_data.endDate

    showReminder(rem_name, reminder_endDate)

    rem_interval = setInterval(() => {
        showReminder(rem_name, reminder_endDate)
    }, 1000)

    $('.viewDetail').addClass('show_detail')
}

$('#detailClose').click(function () {
    $('.viewDetail').removeClass('show_detail');

    setTimeout(() => {
        clearInterval(rem_interval)
        $('#detailBox').children().remove()
    }, 1000)
})

// Edit Reminder

function editRem(index) {
    $('.field_sidebar').addClass('show_sidebar update_sidebar')
    $('.viewDetail').removeClass('show_detail')
    setTimeout(() => {
        clearInterval(rem_interval)
        $('#detailBox').children().remove()
    }, 400)
    let data = JSON.parse(localStorage.getItem('reminders'))
    let current_data = data[index]

    $('#remName').val(current_data.name)
    $('#startDate').val(current_data.startDate)
    $('#endDate').val(current_data.endDate)


    $('#hiddenremName').val(current_data.name)
    $('#hiddenstartDate').val(current_data.startDate)
    $('#hiddenendDate').val(current_data.endDate)
}

function updateReminder() {
    let data = JSON.parse(localStorage.getItem('reminders'))



    let remName = $('#remName').val()
    let startDate = $('#startDate').val()
    let endDate = $('#endDate').val()

    let hidden_remName = $('#hiddenremName').val()
    let hidden_startDate = $('#hiddenstartDate').val()
    let hidden_endDate = $('#hiddenendDate').val()

    // alert(remName)
    indexPos = 0

    for (i in data) {
        if ((hidden_remName == data[i].name) && (hidden_startDate == data[i].startDate) && (hidden_endDate == data[i].endDate)) {
            console.log(i)
            indexPos += Number(i)
            console.log(indexPos)
            break
        }
    }

    console.log(indexPos)
    let current_data = data[indexPos]

    if ((current_data.name == remName) && (current_data.startDate == startDate) && (current_data.endDate == endDate)) {
        alert("Data is'nt changed")
    }
    else {
        if ((current_data.name != remName) && (current_data.startDate != startDate) && (current_data.endDate != endDate)) {
            alert('All fields changed')
            data[indexPos].name = remName
            data[indexPos].startDate = startDate
            data[indexPos].endDate = endDate
        }
        else if (current_data.name != remName) {
            alert('Reminder name changed')
            data[indexPos].name = remName
        }

        else if (current_data.startDate != startDate) {
            alert('Reminder start date changed')
            data[indexPos].startDate = startDate
        }
        else {
            alert('Reminder end date changed')
            data[indexPos].endDate = endDate
        }
        console.log(indexPos)
        console.log(current_data)
        console.log('--------------------------------------------------------')
        console.log(data)
        localStorage.setItem("reminders", JSON.stringify(data))
        window.location.reload();
    }


}