//================JQuery Start==================
$(function () {

    //================banner slider start here===================

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left prvarr"></i>',
        nextArrow: '<i class="fas fa-angle-right nxtarr"></i>',
    });

    //==================venobox video start here===============

    $('.venobox').venobox();

    //==================venobox photo start here===============

    $('.venobox_img').venobox();

    //===================Team Slider==============================

    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        prevArrow: '<i class="fas fa-angle-left tm_nxt"></i>',
        nextArrow: '<i class="fas fa-angle-right tm_prv"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
    }
  ]
    });


    //===================Text  banner==========================

    $('.txt_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //==================Counter up=================================

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //===================logo  banner==========================

    $('.logo_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        prevArrow: '<i class="fas fa-angle-left logo_prvarr"></i>',
        nextArrow: '<i class="fas fa-angle-right logo_nxtarr"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //=====================botton-top==============================

    $(window).scroll(function () {

        if ($(this).scrollTop() > 150) {
            $('.btn_top').fadeIn();


        } else {
            $('.btn_top').fadeOut();
        }
    });

    $('.btn_top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });

    });

    //====================menu-fix===================

    $(window).on('scroll', function () {

        if ($(window).scrollTop()) {
            $('.main_menu').addClass('menu_fix');

        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
    //=====================preloader=====================

    $(window).load(function () {
        $('.preloader').delay(500).fadeOut(500);
    });


    //==============================active====================
    $(document).on('click', 'ul li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
