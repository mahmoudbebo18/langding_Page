// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function () {

    "use strict";


     // navbar toggle class 
    
     $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.navbar').addClass('scrolled-nav')
        } else {
            $('.navbar').removeClass('scrolled-nav')
        }
    });

    // create smooth scroll
    $(".navbar-nav .nav-link").click(function () {
        //$(this).parent().addClass("act").siblings().removeClass("act");
        $("body, html").animate(
            {
                // scrollTop = divId.offset().top
                scrollTop:
                    $("#" + $(this).data("target")).offset().top -
                    $(".navbar").innerHeight(),
            }, 400);
    });

    $('.navbar-nav .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
     $('.navbar-nav .nav-item .nav-link').click(function(e){
        e.preventDefault()
    })

    // scroll to top button 
    var scrolling = $("#scroll");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrolling.slideDown();
        } else {
            scrolling.slideUp();
        }
    });
    scrolling.click(function () {
        "use strict";
        $("html,body").animate({ scrollTop: 0 }, 500);
    });


    $(".navbar .navbar-toggler").click(function () {
        $(".navbar-toggler i").toggleClass("fa-bars fa-times");
    });


    $(window).scroll(function () {
        //sync nav links with sections
        $('section').each(function () {

            if ($(window).scrollTop() >= $(this).offset().top - $('.navbar').innerHeight()) {

                var bebo = $(this).attr('id');
                $(".navbar-nav .nav-item").removeClass('active');
                $('.navbar-nav .nav-item a[data-target = "' + bebo + '"]').parent().addClass('active')

            }
        });
    });
});