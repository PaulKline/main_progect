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
      if ($(this).scrollTop() >= 2300) {
        $(".steps").css("animation-name", "hiddenSteps"),
        $(".steps").css("animation-duration", "5s")
        $(".steps").css("animation-fill-mode:", "forwards")
      }; 
    };
  });
  $(window).scroll(function () {
    if ($(this).width() > 1200) {
      if ($(this).scrollTop() >= 3200) {
        $(".helpful").css("animation-name", "helpfullBack"),
        $(".helpful").css("animation-duration", "3s")
        $(".helpful").css("animation-fill-mode:", "forwards")
      };
    };
  });
  $(window).scroll(function () {
    if ($(this).width() > 1200) {
      if ($(this).scrollTop() >= 500) {
        $(".portfolio__title").css("animation-name", "titleRight"),
        $(".portfolio__title").css("animation-duration", "3s")
        $(".portfolio__title").css("animation-fill-mode:", "forwards")
      };
    };
  });
});