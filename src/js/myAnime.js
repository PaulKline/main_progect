$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).width() > 1200) {
      if ($(this).scrollTop() >= 0) {
        $(".hero-list").css("animation-name", "slideRight"),
        $(".hero-list").css("animation-iteration-count", 2),
        $(".hero-list").css("animation-duration", "1.2s")
      };
    };
  });
  $(window).scroll(function () {
    if ($(this).width() > 1200) {
      if ($(this).scrollTop() >= 1900) {
        $(".price__card").css("animation-name", "cardBattom"),
        $(".price__card").css("animation-timing-function", "easeInOutElastic"),
        $(".price__card").css("animation-duration", "1.2s")
        $(".pc2").css("animation-name", "cardBattom"),
        $(".pc2").css("animation-timing-function", "easeInOutElastic"),
        $(".pc2").css("animation-duration", "1.2s")
      };
    };
  });
});