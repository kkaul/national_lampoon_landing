$(document).ready(function() {
    $('.press-slider').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });
});

$(document).ready(function() {

    // var elem = document.getElementById('video');
    // elem.style.height = 30 + "vw";

    $('.gallery-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="btn btn-link" type="button" data-role="none" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="btn btn-link" type="button" data-role="none" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });
});

// $(window).resize(function() {
//     var elem = document.getElementById('video');
//     elem.style.height = 30 + "vw";
// });