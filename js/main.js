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
            }, 800);
    });

    $('.navbar-nav .nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.navbar-nav .nav-item .nav-link').click(function (e) {
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
        $("html,body").animate({ scrollTop: 0 }, 700);
    });


    $(".navbar .navbar-toggler").click(function () {
        $(".navbar-toggler i").toggleClass("fa-bars fa-times");
    });


    $(window).scroll(function () {
        //sync nav links with sections
        $('section').each(function () {
            var heightNav = $('.navbar').innerHeight();

            if ($(window).scrollTop() >= $(this).offset().top - (heightNav + 2)) {

                var bebo = $(this).attr('id');
                $(".navbar-nav .nav-item").removeClass('active');
                $('.navbar-nav .nav-item a[data-target = "' + bebo + '"]').parent().addClass('active')

            }
        });
    });


    // show more button 

    $('.expand-faq button').click(function () {
        $('.hidden-question').slideDown();
        $(this).fadeOut()
    })




    // sliding feat 

    var lis_count = $('.sliding-feat ul li').length;
    var active_li_index = 0;

    setInterval(function () {
        if ($('.sliding-feat ul li.active-step-li').index() == lis_count - 1) {
            active_li_index = 0;
        }

        else {
            active_li_index++;
        }


        $('.sliding-feat ul li.active-step-li').removeClass('active-step-li');
        $('.sliding-feat ul li').eq(active_li_index).addClass('active-step-li');
    }, 5000);
});






// current image 

var slidingImg = document.getElementById("slidingImage");


// array of sliding images 
var images = new Array(
    "imgs/feat.png",
    "imgs/feat2.png",
    "imgs/feat3.png",
    "imgs/feat4.png",
    "imgs/feat5.png",
    "imgs/feat6.png"

);


var myLength = images.length;

var i = 0;

function slideMyImage(){
    if(i > myLength - 1){
        i=0
    }
    slidingImg.src =  images[i];
    i++;
    setTimeout('slideMyImage()',4600)
}
