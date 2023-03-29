// Edit Reminder

function editRem(index) {
    $('.overlay').addClass('show_overlay')
    $('.field_sidebar').addClass('show_sidebar update_sidebar')
    $('.viewDetail').removeClass('show_detail')
    // setTimeout(() => {
    //     clearInterval(rem_interval)
    //     $('#detailBox').children().remove()
    // }, 400)
    let data = JSON.parse(localStorage.getItem('reminders'))
    let current_data = data[index]
    console.log(current_data)
    if (
        current_data['startHours'] != '' &&
        current_data['startMinutes'] != '' &&
        current_data['startSeconds'] != '' &&
        current_data['startMeredim'] != '' &&
        current_data['endHours'] != '' &&
        current_data['endMinutes'] != '' &&
        current_data['endSeconds'] != '' &&
        current_data['endMeredim'] != ''
    ) {
        $('#setTime').parents('.toggle').css({ 'display': 'none' })
        $('.date_box').addClass('big-date')
        $('.time_box').toggleClass('hide-current');

        $('#endSetTime').parents('.toggle').css({ 'display': 'none' })
        $('.end-date-box').addClass('big-date')
        $('.end_time_box').toggleClass('hide-current');
    }
    else if (
        current_data['startHours'] != '' &&
        current_data['startMinutes'] != '' &&
        current_data['startSeconds'] != '' &&
        current_data['startMeredim'] != ''
    ) {
        $('#setTime').parents('.toggle').css({ 'display': 'none' })
        $('.date_box').addClass('big-date')
        $('.time_box').toggleClass('hide-current');
    }
    else if (
        current_data['endHours'] != '' &&
        current_data['endMinutes'] != '' &&
        current_data['endSeconds'] != '' &&
        current_data['endMeredim'] != ''
    ) {
        $('#endSetTime').parents('.toggle').css({ 'display': 'none' })
        $('.end-date-box').addClass('big-date')
        $('.end_time_box').toggleClass('hide-current');
    }

    $('#remName').val(current_data.name)
    
    $('#startDate').val(current_data.startDate)
    $('#startHour').val(current_data.startHours)
    $('#startMinute').val(current_data.startMinutes)
    $('#startSecond').val(current_data.startSeconds)
    $('#startMeredim').val(current_data.startMeredim)

    $('#endDate').val(current_data.endDate)
    $('#endHour').val(current_data.endHours)
    $('#endMinute').val(current_data.endMinutes)
    $('#endSecond').val(current_data.endSeconds)
    $('#endMeredim').val(current_data.endMeredim)


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