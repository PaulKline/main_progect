$(document).ready(function(){
  new WOW().init();
  var offer = $("#offer-form");
  var popup = $("#popup");
  var close = $("#close");
  var left = $("#arrow-left");
  $("#offer-form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url:"mail.php",
      type: "POST",
      data: $(this).serialize(), 
      success: function(data) {
        $(".success").text(data + ", ваша форма отправлена");
        $('form :input').val('');
        $(popup).addClass("popup_active");
        close.on("click", function () {
          popup.removeClass("popup_active");
        });
      }
      
    });
  });
  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    dots: false,
    pagination: true,
    responsiveClass: true,
    navText: ['<img src="img/portfolio/left-arrow.png" width="45" alt="стрелка в лево">', '<img src="img/portfolio/right-arrow.png" width="45" alt="стрелка в право">'],
    responsive: {
      320: {
        items: 1,
        nav: true,
        margin: 0,
        Center: true
      },
      // breakpoint from 480 up
      840: {
        items: 2,
        nav: true,
        margin: 15,
        Center: true
      },
      // breakpoint from 768 up
      1200: {
        items: 3,
        nav: true
      }
    }
  });
  /* $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }); */
});


