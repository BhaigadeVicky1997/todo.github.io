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