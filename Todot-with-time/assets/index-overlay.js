// overlay
$('.overlay').click(function(){
    $(this).removeClass('show_overlay')

    if($('.viewDetail').hasClass('show_detail')){
        $('.viewDetail').removeClass('show_detail');
        setTimeout(() => {
            clearInterval(rem_interval)
            $('#detailBox').children().remove()
        }, 400)
    }

    if($('.field_sidebar').hasClass('show_sidebar')){
        $('.field_sidebar').removeClass('show_sidebar');
    }
})