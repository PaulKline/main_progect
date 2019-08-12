$(document).ready(function(){
  new WOW().init();
  var offer = $("#offer-form");
  var popup = $("#popup");
  var close = $("#close");
  var left = $("#arrow-left");
  var form = $("#offer-form");
  $("#brif-form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      email: {
        required: "Заполните E-mail",
        email: "Укажите корректный email адрес"
      },
      phone: "укажите номер вашего телефона"
    },
    submitHandler: function (form) {
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $("#brif-form").serialize(),
        success: function (data) {
          $(".success-brif").text(data + ", ваша форма отправлена");
          $('input').val('');
          $(popup).addClass("popup_active");
          close.on("click", function () {
            popup.removeClass("popup_active");
          });
        }
      });
    }
  });
  $("#offer-form").validate({
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      phone: "укажите номер вашего телефона"
    },
    submitHandler: function (form) {
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $("#offer-form").serialize(),
        success: function (data) {
          $(".success").text(data + ", ваша форма отправлена");
          $('input').val('');
          $(popup).addClass("popup_active");
          close.on("click", function () {
            popup.removeClass("popup_active");
          });
        }
      });
    }
  });
  $("#modal__form").validate({
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Обязательно укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов: {0}"),
        maxlength: "максимальное число символов - 15"
      },
      phone: {
        required: "укажите номер вашего телефона"
      },
    },
    submitHandler: function (form) {
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $("#modal__form").serialize(),
        success: function (data) {
          $(".success-modal").text(data + ", ваша форма отправлена");
          $('input').val('');
          $(popup).addClass("popup_active");
          close.on("click", function () {
            popup.removeClass("popup_active");
          });
        }
      });
    }
  });
  $("#phone").mask("8(999) 999-9999");
  $("#phone-modal").mask("8(999) 999-9999");
  $("#phone-offer").mask("8(999) 999-9999");
  /* $("#offer-form").on("submit", function (event) {
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
  }); */
 /* сова карусель */
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


