$('.mob--filter-btn').click(function () {
   $('.main-content--filter-item-block').fadeIn();
   $('body').css('overflow','hidden');
});
$('.mob-filter--exit-btn-block').click(function () {
    $('.main-content--filter-item-block').fadeOut();
    $('body').css('overflow','auto');

});


$('.info-block--description-open-btn').click(function () {
    $(this).removeClass('active');
    $('.info-block--description-close-btn').addClass('active');
    $('.info-block--description-text').addClass('active');
})
$('.info-block--description-close-btn').click(function () {
    $(this).removeClass('active');
    $('.info-block--description-open-btn').addClass('active');
    $('.info-block--description-text').removeClass('active');
})


$(".pay-type-btn").on("click", function () {
    $(".card-pay").slideDown().addClass('active');
});
$(".card-close").on("click", function () {
    $(".card-pay").slideUp().removeClass('active');
});


$("body").on("change",".cninp",function(){
    let bid = $(this).attr("data-bid");
    $.get("/cart/api.php",{"updBasket":bid,"cnt":$(this).val(),"bMode":$(this).attr("data-bmode")},function(d){
        d = $.parseJSON(d);

        if(d.bitotal){
            basketTotal = d.summ;
            calcBasketTotal()
            $("#bitotal"+bid).html(d.bitotal);
        }


        $(".bcnt").html(d.cnt);
        $(".bsumm").html(d.summ);


    });
})

$("body").on("click",".cnminus",function(){

    let inp = $(".cninp",$(this).parents(".jsCounter"));
    let step = 1;
    if(inp.attr("data-step"))
        step = parseFloat(inp.attr("data-step"));

    let v = parseFloat(inp.val());
    if(v>step)
        inp.val(v-step);
    inp.change();


})
$("body").on("click",".cnplus",function(){
    let inp = $(".cninp",$(this).parents(".jsCounter"));
    let step = 1;
    if(inp.attr("data-step"))
        step = parseFloat(inp.attr("data-step"));

    let v = parseFloat(inp.val());
    inp.val(v+step);
    inp.change();
})

theTime = new Date();
let hours = theTime.getHours();
if (hours == 7) {
    time = $('.t-10').removeClass('active');
    $('.t-10 > input').css('display', 'none');
    $('.t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 8) {
    time = $('.t-11, .t-10').removeClass('active');
    $('.t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 9) {
    time = $('.t-12, .t-11, .t-10').removeClass('active');
    $('.t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 10) {
    time = $('.t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 11) {
    time = $('.t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 12) {
    time = $('.t-15, .t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-15 > input, .t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-15 > .time-check, .t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 13) {
    time = $('.t-16, .t-15, .t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-16 > input, .t-15 > input, .t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-16 > .time-check, .t-15 > .time-check, .t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 14) {
    time = $('.t-17, .t-16, .t-15, .t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-17 > input, .t-16 > input, .t-15 > input, .t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-17 > .time-check, .t-16 > .time-check, .t-15 > .time-check, .t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 15) {
    time = $('.t-18, .t-17, .t-16, .t-15, .t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-18 > input, .t-17 > input, .t-16 > input, .t-15 > input, .t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-18 > .time-check, .t-17 > .time-check, .t-16 > .time-check, .t-15 > .time-check, .t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}
else if (hours == 0 || hours == 1 || hours == 2 || hours == 3 || hours == 4 || hours == 5 || hours == 6) {
    time = $('.t-18, .t-17, .t-16, .t-15, .t-14, .t-13, .t-12, .t-11, .t-10').addClass('active');
    $('.w-time-item input').css('display', 'block');
    $('.w-time-item .time-check').css('margin-left', '3px');
}
else {
    time = $('.t-18, .t-17, .t-16, .t-15, .t-14, .t-13, .t-12, .t-11, .t-10').removeClass('active');
    $('.t-18 > input, .t-17 > input, .t-16 > input, .t-15 > input, .t-14 > input, .t-13 > input, .t-12 > input, .t-11 > input, .t-10 > input').css('display', 'none');
    $('.t-18 > .time-check, .t-17 > .time-check, .t-16 > .time-check, .t-15 > .time-check, .t-14 > .time-check, .t-13 > .time-check, .t-12 > .time-check, .t-11 > .time-check, .t-10 > .time-check').css('margin-left', '16px');
}

function getTimeString(num) {
    let time;
    switch(num) {
        case 0:
            time = "10:00 - 12:00";
            break;
        case 1:
            time = "10:00 - 12:00";
            break;
        case 2:
            time = "10:00 - 12:00";
            break;
        case 3:
            time = "10:00 - 12:00";
            break;
        case 4:
            time = "10:00 - 12:00";
            break;
        case 5:
            time = "10:00 - 12:00";
            break;
        case 6:
            time = "10:00 - 12:00";
            break;
        case 7:
            time = "11:00 - 13:00";
            break;
        case 8:
            time = "12:00 - 14:00";
            break;
        case 9:
            time = "13:00 - 15:00";
            break;
        case 10:
            time = "14:00 - 16:00";
            break;
        case 11:
            time = "15:00 - 17:00";
            break;
        case 12:
            time = "16:00 - 18:00";
            break;
        case 13:
            time = "17:00 - 19:00";
            break;
        case 14:
            time = "18:00 - 20:00";
            break;
        default:
            time = 'завтра 10:00 - 12:00';
    }
    return time;
}
theDate = new Date();

let dayOne = new Date;
let timeMoth = new Date().toLocaleString('ru', { month: 'long' });
let w_time1 = dayOne.getDate();
let w_time2 = dayOne.getDate() + 1;
let w_time3 = dayOne.getDate() + 2;

$('.main-time--text').text('Ближайшее время доставки: ' + getTimeString(theDate.getHours()));
$('.w-time-date-title1').text('Сегодня: ' + w_time1 + ' ' + timeMoth);
$('.w-time-date-title2').text('Завтра: ' + w_time2 + ' ' + timeMoth);
$('.w-time-date-title3').text('Послезавтра: ' + w_time3 + ' ' + timeMoth);


$('.makePhone').mask('+ZZB (99)-999-99-99', {
    translation: {
        'Z': {
            pattern: /[9-9]/, optional: true
        },
        'B': {
            pattern: /[8-8]/, optional: true
        }
    }
});

$('.product-item--del-btn').click(function () {
    $(this).parent().parent().remove();
})

$('.map-btn--show').click(function () {
    $('#mapLocator').fadeIn();
})

$('.map-header span.material-icons').click(function () {
    $('#mapLocator').fadeOut();
})


