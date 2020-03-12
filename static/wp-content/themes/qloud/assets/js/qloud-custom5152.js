/*
Template: Qloud  - Qloud Landing Page WordPress Theme
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Isotope
3.Masonry
4.Slick
5.Swiper
6.Progress Bar
7.Counter
8.Coming soon
6.Timer
7.Back To Top
8.Accordion
9.Magnific Popup
10.Owl Carousel
11.Wow Animation
12.Skrollr
13.Tab

------------------------------------------------
Index Of Script
----------------------------------------------*/
(function(jQuery) {

    "use strict";
    jQuery(document).ready(function() {

        jQuery(window).on('load', function(e) {

            jQuery('ul.page-numbers').addClass('justify-content-center');


            /*------------------------
            Page Loader
            --------------------------*/
            jQuery("#load").fadeOut();
            jQuery("#loading").delay(0).fadeOut("slow");


            /*------------------------
            Back To Top
            --------------------------*/
            jQuery('#back-to-top').fadeOut();
            jQuery(window).on("scroll", function() {
                if (jQuery(this).scrollTop() > 250) {
                    jQuery('#back-to-top').fadeIn(1400);
                } else {
                    jQuery('#back-to-top').fadeOut(400);
                }
            });

            // scroll body to 0px on click
            jQuery('#top').on('click', function() {
                jQuery('top').tooltip('hide');
                jQuery('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            function headerHeight() {
                var height = jQuery(".header1").height();
                jQuery('.iq-height').css('height', height + 'px');
            }

            jQuery(function() {
                var header = jQuery(".header1"),
                    yOffset = 0,
                    triggerPoint = 80;
                headerHeight();

                jQuery(window).resize(headerHeight);
                jQuery(window).on('scroll', function() {

                    yOffset = jQuery(window).scrollTop();

                    if (yOffset >= triggerPoint) {
                        header.addClass("menu-sticky animated slideInDown");
                    } else {
                        header.removeClass("menu-sticky animated slideInDown");
                    }

                });
            });

            if (jQuery('header').hasClass('has-sticky')) {
                jQuery(window).on('scroll', function() {

                    var height = jQuery('.navbar').outerHeight();
                    if (jQuery(this).scrollTop() > height) {
                        jQuery('.has-sticky .logo').addClass('logo-display');
                    } else if (jQuery(this).scrollTop() <= height) {
                        jQuery('.has-sticky .logo').removeClass('logo-display');
                    }
                });



            }





            jQuery('.sub-menu').css('display', 'none');
            jQuery('.sub-menu').prev().addClass('isubmenu');
            jQuery(".sub-menu").before('<i class="fa fa-angle-down toggledrop" aria-hidden="true"></i>');


            jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });

            jQuery("#top-menu .menu-item .toggledrop").off("click");
            if (jQuery(window).width() < 992) {
                jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).next('.children, .sub-menu').slideToggle();
                });
            }
        });

        jQuery(window).on('resize', function() {
            "use strict";
            jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });

            jQuery("#top-menu .menu-item .toggledrop").off("click");
            if (jQuery(window).width() < 992) {
                jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).next('.children, .sub-menu').slideToggle();
                });
            }
        });






        /*------------------------
        Isotope
        --------------------------*/
        jQuery('.isotope').isotope({
            itemSelector: '.iq-grid-item',
        });

        /*------------------------------
        filter items on button click
        -------------------------------*/
        jQuery('.isotope-filters').on('click', 'button', function() {
            var filterValue = jQuery(this).attr('data-filter');
            jQuery('.isotope').isotope({
                resizable: true,
                filter: filterValue
            });
            jQuery('.isotope-filters button').removeClass('show active');
            jQuery(this).addClass('show active');
        });


        /*------------------------
        Masonry
        --------------------------*/
        var jQuerymsnry = jQuery('.iq-masonry-block .iq-masonry');
        if (jQuerymsnry) {
            var jQueryfilter = jQuery('.iq-masonry-block .isotope-filters');
            jQuerymsnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            // bind filter button click
            jQueryfilter.on('click', 'button', function() {
                var filterValue = jQuery(this).attr('data-filter');
                jQuerymsnry.isotope({
                    filter: filterValue
                });
            });

            jQueryfilter.each(function(i, buttonGroup) {
                var jQuerybuttonGroup = jQuery(buttonGroup);
                jQuerybuttonGroup.on('click', 'button', function() {
                    jQuerybuttonGroup.find('.active').removeClass('active');
                    jQuery(this).addClass('active');
                });
            });
        }

        jQuery(".effect-box .effect-btn").click(function() {
            jQuery(this).parent().toggleClass("main");
        });


        /*------------------------
        Magnific Popup
        --------------------------*/
        jQuery('.popup-gallery').magnificPopup({
            delegate: 'a.popup-img',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });


        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*------------------------
        Owl Carousel
        --------------------------*/
        jQuery('.owl-carousel').each(function() {

            var jQuerycarousel = jQuery(this);
            jQuerycarousel.owlCarousel({
                items: jQuerycarousel.data("items"),
                loop: jQuerycarousel.data("loop"),
                margin: jQuerycarousel.data("margin"),
                nav: jQuerycarousel.data("nav"),
                dots: jQuerycarousel.data("dots"),
                autoplay: jQuerycarousel.data("autoplay"),
                autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
                navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: jQuerycarousel.data("items-mobile-sm"),
                        nav: false,
                        dots: true
                    },
                    // breakpoint from 480 up
                    480: {
                        items: jQuerycarousel.data("items-mobile"),
                        nav: false,
                        dots: true
                    },
                    // breakpoint from 786 up
                    786: {
                        items: jQuerycarousel.data("items-tab")
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: jQuerycarousel.data("items-laptop")
                    },
                    1199: {
                        items: jQuerycarousel.data("items")
                    }
                }
            });
        });


        /*------------------------
        Wow Animation
        --------------------------*/
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();







        /*------------------------
        Tabs
        --------------------------*/
        jQuery(window).on('scroll', function(e) {
            var nav = jQuery('#features');
            if (nav.length) {
                var contentNav = nav.offset().top - window.outerHeight;
                if (jQuery(window).scrollTop() >= (contentNav)) {
                    e.preventDefault();
                    jQuery('#features .row li a').removeClass('active');
                    jQuery('#features .row li a[aria-selected=true]').addClass('active');
                }
            }
        });




    });
})(jQuery);
