$(function () {
    var blockTop = $('.other_countries .want_iqra_button').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function () {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });

    function CountUp() {
        $('.other_countries').addClass('logo_effect');
    }
});
$('.change_region_trigger').click(function () {
    $('.change_region_modal').addClass('active')
})
$(".location").hover(function () {
    if ($('.country_guess').hasClass("active")) {
        $('.country_guess').fadeOut().removeClass("active");
        $('.location .icon-arrow-down').removeClass("active");
    } else {
        $('.country_guess').fadeIn().addClass("active");
        $('.location .icon-arrow-down').addClass("active");
    }
})
$(document).mouseup(function (e) {
    var container = $(".change_region_modal");
    if (container.has(e.target).length === 0) {
        container.removeClass('active');
    }
});

var k = 0;
var slow_rate = 14;

function back() {
    k--;
    $('.background').css('backgroundPosition-y', k / slow_rate);
}

setInterval(back, 10)
