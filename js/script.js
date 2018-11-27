$(function() {
    var blockTop = $('.other_countries').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });
    function CountUp() {
        $('.other_countries').addClass('back_effect');
    }
});
$(function() {
    var blockTop = $('.want_iqra_button').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
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