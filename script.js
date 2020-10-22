$(document).ready(function () {

    $(".menu-hamburger").click(function () {
        $(this).toggleClass("change");
        $(".mean-nav").slideToggle("slow");
    });

    
        $('.menu .menu-items').click(function(){
          $('.menu-items').removeClass("active");
          $(this).addClass("active");
       
      });
   

   
        $('.main-logo').click(function(){
          $('.menu-items').removeClass("active");
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scrollToTop").fadeIn(100);
        } else {
            $(".scrollToTop").fadeOut(100);
        }
    });

    $(".scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

});



