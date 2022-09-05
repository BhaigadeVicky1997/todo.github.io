// Edit Reminder

function editRem(index) {
    $('.overlay').addClass('show_overlay')
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