//================JQuery Start==================
$(function () {

    //================banner slider start here===================

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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

    //===================Menu Fix==============================

    //===================Text  banner==========================

    $('.txt_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
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
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left logo_prvarr"></i>',
        nextArrow: '<i class="fas fa-angle-right logo_nxtarr"></i>',
    });

    //=====================botton-top==============================

    $(window).scroll(function () {
        var buttontop = $(this).scrollTop();

        if (buttontop > 150) {
            $('.btn_top').fadeIn();


        } else {
            $('.btn_top').fadeOut();
        }
    });

    $('.btn_top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    //====================menu-fix===================

    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 600) {
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
    $('.home').click(function () {
        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.about').click(function () {
        $('.about').addClass('active');
        $('.home').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.glry').click(function () {
        $('.glry').addClass('active');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.team').click(function () {
        $('.team').addClass('active');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.testi').click(function () {
        $('.testi').addClass('active');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.plans').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.plans').click(function () {
        $('.plans').addClass('active');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.contct').removeClass('active');
    });

    $('.contct').click(function () {
        $('.contct').addClass('active');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.glry').removeClass('active');
        $('.team').removeClass('active');
        $('.testi').removeClass('active');
        $('.plans').removeClass('active');
    });

});
