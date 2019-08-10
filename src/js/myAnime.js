$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0) {
      $(".hero-list").css("animation-name", "slideRight"),
      $(".hero-list").css("animation-timing-function", "easeInOutElastic"),
      $(".hero-list").css("animation-duration", "1s")
    };
    /* if ($(this).scrollTop() > 50) {
      $(".offer__input").css("animation-name", "blincInput"),
      $(".offer__input").css("animation-iteration-count", 3),
      $(".offer__input").css("animation-duration", "1s")
    }; */
    /* if ($(this).scrollTop() > 2000) {
      $(".price__card").css("animation-name", "cardBattom"),
      $(".hero-list").css("animation-timing-function", "easeInOutElastic"),
      $(".price__card").css("animation-duration", "1.2s")
    }; */
    if ($(window).width() <= 549) {
      if ($(window).scrollTop() > 3500) {
        $(".price__card").css("animation-name", "cardBattom"),
        $(".hero-list").css("animation-timing-function", "easeInOutElastic"),
        $(".price__card").css("animation-duration", "1.2s")
      }
    } else if ($(window).width() > 549 & amp;& amp; $(window).width() <= 991) {
    if ($(window).scrollTop() > 2500) {
      $(".price__card").css("animation-name", "cardBattom"),
      $(".hero-list").css("animation-timing-function", "easeInOutElastic"),
      $(".price__card").css("animation-duration", "1.2s")
    }
  } else {
    if ($(window).scrollTop() > 2000) {
      $(".price__card").css("animation-name", "cardBattom"),
      $(".hero-list").css("animation-timing-function", "easeInOutElastic"),
      $(".price__card").css("animation-duration", "1.2s")
    }
  };
    if ($(window).width() <= 549) {
      if ($(window).scrollTop() > 100) {
        $(".offer__input").css("animation-name", "blincInput"),
        $(".offer__input").css("animation-iteration-count", 3),
        $(".offer__input").css("animation-duration", "1s")
      }
    } else if ($(window).width() > 549 & amp;& amp; $(window).width() <= 991) {
    if ($(window).scrollTop() > 50) {
      $(".offer__input").css("animation-name", "blincInput"),
      $(".offer__input").css("animation-iteration-count", 3),
      $(".offer__input").css("animation-duration", "1s")
    }
  } else {
    if ($(window).scrollTop() > 10) {
      $(".offer__input").css("animation-name", "blincInput"),
      $(".offer__input").css("animation-iteration-count", 3),
      $(".offer__input").css("animation-duration", "1s")
    }
  }
  });
});