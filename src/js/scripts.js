$(document).ready(function(){
  new WOW().init();
  $("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      email: "Укажите корректный email адрес",
      phone: "укажите номер вашего телефона"
    }
  });
  $("#offer-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      phone: "укажите номер вашего телефона"
    }
  });
  $("#modal__form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      phone: "укажите номер вашего телефона"
    }
  });
  $("#phone").mask("8(999) 999-9999");
  $("#phone-modal").mask("8(999) 999-9999");
  $("#phone-offer").mask("8(999) 999-9999");
  var offer = $("#offer-form");
  var popup = $("#popup");
  var close = $("#close");
  var left = $("#arrow-left");
  // скрипт слайдера
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
  // валдиатор формы
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
});


