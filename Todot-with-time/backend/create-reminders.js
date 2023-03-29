// create
$('.btn_submit').click(function () {
    let rem_Name = $('#remName').val();

    let start_Date = $('#startDate').val();
    let start_Date_hour = $('#startHour').val();
    let start_Date_minutes = $('#startMinute').val();
    let start_Date_seconds = $('#startSecond').val();
    let start_Date_meredim = $('#startMeredim').val();

    let end_Date = $('#endDate').val();
    let end_Date_hour = $('#endHour').val();
    let end_Date_minutes = $('#endMinute').val();
    let end_Date_seconds = $('#endSecond').val();
    let end_Date_meredim = $('#endMeredim').val();

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
    else if (start_Date_hour != '' && start_Date_minutes != '' && start_Date_seconds != '' && start_Date_meredim != ''){
        currentItemArr = {
            "name": rem_Name,
            "startDate": start_Date,
            "startHours": start_Date_hour,
            "startMinutes": start_Date_minutes,
            "startSeconds": start_Date_seconds,
            "startMeredim": start_Date_meredim,
            "endDate": end_Date,
            "endHours": '',
            "endMinutes": '',
            "endSeconds": '',
            "endMeredim": '',
        }
        console.log(currentItemArr)
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
    else if (end_Date_hour != '' && end_Date_minutes != '' && end_Date_seconds != '' && end_Date_meredim !=''){
        currentItemArr = {
            "name": rem_Name,
            "startDate": start_Date,
            "startHours": '',
            "startMinutes": '',
            "startSeconds": '',
            "startMeredim": '',
            "endDate": end_Date,
            "endHours": end_Date_hour,
            "endMinutes": end_Date_minutes,
            "endSeconds": end_Date_seconds,
            "endMeredim": end_Date_meredim,
        }
        console.log(currentItemArr);
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
    else if (start_Date_hour != '' && start_Date_minutes != '' && start_Date_seconds != '' && start_Date_meredim != '' && end_Date_hour != '' && end_Date_minutes != '' && end_Date_seconds != '' && end_Date_meredim !=''){
        currentItemArr = {
            "name": rem_Name,
            "startDate": start_Date,
            "startHours": start_Date_hour,
            "startMinutes": start_Date_minutes,
            "startSeconds": start_Date_seconds,
            "startMeredim": start_Date_meredim,
            "endDate": end_Date,
            "endHours": end_Date_hour,
            "endMinutes": end_Date_minutes,
            "endSeconds": end_Date_seconds,
            "endMeredim": end_Date_meredim,
        }
        console.log(currentItemArr)
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
    else {
        currentItemArr = {
            "name": rem_Name,
            "startDate": start_Date,
            "startHours": '',
            "startMinutes": '',
            "startSeconds": '',
            "startMeredim": '',
            "endDate": end_Date,
            "endHours": '',
            "endMinutes": '',
            "endSeconds": '',
            "endMeredim": '',
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