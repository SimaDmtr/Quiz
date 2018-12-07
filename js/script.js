wow = new WOW(
    {
        offset: 100,          // default
    }
)
wow.init();

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
    var i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
}

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
    $('.background').css('backgroundPosition-y', k / slow_rate);
}

setInterval(back, 10)

