function emptyFields(){
    $('#remName').val('');
    $('#startDate').val('');
    $('#startHour').val('');
    $('#startMinute').val('');
    $('#startSecond').val('');
    $('#startMeredim').val('');
    $('#endDate').val('');
    $('#endHour').val('');
    $('#endMinute').val('');
    $('#endSecond').val('');
    $('#endMeredim').val('');
}

$('#addbutton').click(function () {
    emptyFields();
    $('#setTime').parents('.toggle').css({ 'display': 'flex' })
    $('.date_box').removeClass('big-date')
    $('.time_box').addClass('hide-current');

    $('#endSetTime').parents('.toggle').css({ 'display': 'flex' })
    $('.end-date-box').removeClass('big-date')
    $('.end_time_box').addClass('hide-current');

    $('.overlay').addClass('show_overlay');
    $('.field_sidebar').addClass('show_sidebar');
    $('.viewDetail').removeClass('show_detail')
    setTimeout(() => {
        //clearInterval(rem_interval)
        $('#detailBox').children().remove()
    }, 400)
})
$('#sidebarClose').click(function () { 
    $('.overlay').removeClass('show_overlay')
    $('.field_sidebar').removeClass('show_sidebar')

})

$('.datepicker').datepicker(
    {
        format: "mm/dd/yyyy",
        startDate: new Date(),
        todayHighlight: true
    }
);

$('.datepicker').change(function () {
    $('.datepicker.datepicker-dropdown').remove()
})

function startTimeFunc() {
    $('.time_box').addClass('time-checked')
    if(current_date_time.getHours() > 12 ){
        set_hour = current_date_time.getHours() - 12;
        $('#startHour').val(set_hour)
    }
    else{
        $('#startHour').val(current_date_time.getHours())
    }
    $('#startMinute').val(current_date_time.getMinutes())
    $('#startSecond').val(current_date_time.getSeconds())
    if (current_date_time.getHours() > 12) {
        $('#startMeredim').val('pm').trigger('change')
    }
    else {
        $('#startMeredim').val('am').trigger('change')
    }
}

const currentDate = () => {
    today = new Date();
    current_date_time = new Date(Date.now())
    console.log(current_date_time);
    dayis = String(today.getDate())
    if (dayis < 10) {
        monthis = "0" + dayis
    }

    monthis = String(today.getMonth() + 1)
    if (monthis < 10) {
        monthis = "0" + monthis
    }

    yearis = String(today.getFullYear())

    fullDate = `${monthis}/${dayis}/${yearis}`
    $('#startDate').val(fullDate);

    witTime = document.getElementById('setTime');
    if (witTime.checked == true) {
        startTimeFunc()
    }
    else {
        $('.time_box').removeClass('time-checked')
        $('#startHour').val('')
        $('#startMinute').val('')
        $('#startSecond').val('')
        if (current_date_time.getHours() > 12) {
            $('#startMeredim').val('--').trigger('change')
        }
        else {
            $('#startMeredim').val('--').trigger('change')
        }
    }
}

$('#setTime').change(function () {
    currentDate()
    $('.currentDate').toggleClass('hide-current')
})

$('#endSetTime').change(function () {
    $('.end_time_box').toggleClass('hide-current')
})