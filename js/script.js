$(document).ready(function(){


  $(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 50;

    if ($heightScrolled > $defaultHeight) {
        $('.navbar').removeClass("navbar-top")
        $('.navbar').addClass("navbar-scroll")
    }
    else {
        $('.navbar').addClass("navbar-top")
        $('.navbar').removeClass("navbar-scroll")
    }

    });
      
    $('.brandlogo').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                
                  slidesToShow: 4
                }
              },
            {
                breakpoint: 992,
                settings: {
                
                  slidesToShow: 3
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2
              }
            }
          ]
   
    });

    // news slider
    $('.newslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                
                  slidesToShow: 3
                }
              },
            {
                breakpoint: 992,
                settings: {
                
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
          ]
   
    });
    // price slider
    $('.priceslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                
                  slidesToShow: 3
                }
              },
            {
                breakpoint: 992,
                settings: {
                
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
          ]
   
    });



  });







