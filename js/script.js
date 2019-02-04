function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: new google.maps.LatLng(55.1896363, 30.2748985),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    });

    var brest = {lat: 52.0873776, lng: 23.6377467};
    var bar = {lat: 52.9159423, lng: 25.2228568};
    var moskow = {lat: 55.902707, lng: 37.614874};
    var tver = {lat: 56.914908, lng: 35.913904};
    var positions = [brest, bar, moskow, tver]
    for (var i = 0; i < positions.length; i++) {
        var marker = new google.maps.Marker({
            position: positions[i],
            map: map,
            icon: {
                url: "images/logo.png",
                scaledSize: new google.maps.Size(48, 48)
            }
        });
    }

}


(function ($) {
    wow = new WOW(
        {
            offset: 100,          // default
        }
    )
    wow.init();


    $('.fotorama__img').click()
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
//табы франшизы
    $(".franch_tabs_content").not(":first").hide(300)
    $(".franch_tabs_content:first").addClass("active");
    $(".franch_tabs_nav_item").click(function () {
        $(".franch_tabs_nav_item").eq($(this).index()).addClass("active");
        $(".franch_tabs_content").hide().eq($(this).index()).fadeIn().addClass('active').siblings().removeClass('active');
        $(this).siblings().removeClass('active  ')
    }).eq(0).addClass("active");


//движение фона
    var k = 0;
    var slow_rate = 14;

    function back() {
        k--;
        $('.background:not(.black)').css('backgroundPosition-y', k / slow_rate);
    }

    setInterval(back, 10)

    var n = 0;
    var slow_rate_top = 14;

    function up() {
        n++;
        $('.black').css('backgroundPosition-y', n / slow_rate_top);
    }

    setInterval(up, 10)


    $(".peace").hover(function () {
        $('.hover_hell').fadeIn();
        $('.hover_peace').fadeOut();
        $('.flip_effect_horizontal').removeClass('active')
    });
    $(".hell").hover(function () {
        $('.hover_peace').fadeIn();
        $('.hover_hell').fadeOut();
        $('.flip_effect_horizontal').addClass('active')
    });

    $('.blue_orange_corp_left a').mouseover(function () {
        $('.blue_orange_corp_left').css("transform", "scale(1.07)");
    });
    $('.blue_orange_corp_left a').mouseleave(function () {
        $('.blue_orange_corp_left').css("transform", "unset");
    });
    $('.blue_orange_corp_right a').mouseover(function () {
        $('.blue_orange_corp_right').css("transform", "scale(1.07)");
    })
    $('.blue_orange_corp_right a').mouseleave(function () {
        $('.blue_orange_corp_right').css("transform", "unset");
    })
    window.onscroll = function show_header() {
        var header = document.querySelector('header');
        if (window.pageYOffset > 70) {
            header.classList.add('fixed')
        }
        else {
            header.classList.remove('fixed')
        }
    }
    $(".tab-content").not(":first").hide(300);
    $(".ratings_content_upper_nav span").click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $(".tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");




    $('.register_choose_item').click(function () {
        if ($(this).hasClass("active")) {

        } else {
            if ($(this).hasClass('peace_choose')) {
                $('.register_game .background,.register_game_inner p,.register_game_inner span,.custom-select-trigger').removeClass('black')
            }
            else{ $('.register_game .background,.register_game_inner p,.register_game_inner span,.custom-select-trigger').addClass('black')}
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    })
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.nav_menu').toggleClass('active')
        $('.nav_menu_item').toggleClass('active')
    });
}(jQuery));

