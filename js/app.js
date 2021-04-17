$(document).ready(function() {
    // navigation scroll
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $(".header").addClass("nav-fixed");
        } else {
            $(".header").removeClass("nav-fixed");
        }
    });

    // navigation toggle
    $('.toggler').click(function() {
        $('.toggler').toggleClass('active')
        $('.nav').toggleClass('open')
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        // tabx

});