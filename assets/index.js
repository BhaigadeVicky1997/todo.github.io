$('#addbutton').click(function () {
    $('.overlay').addClass('show_overlay');
    $('.field_sidebar').addClass('show_sidebar');
    $('.viewDetail').removeClass('show_detail')
    setTimeout(() => {
        clearInterval(rem_interval)
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

$('.currentDate').click(function () {
    // alert('Hello');
    today = new Date()
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
    $('#startDate').val(fullDate)
})