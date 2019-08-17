var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");
button.addEventListener("click", function() {
  modal.classList.add("modal_active");
} );
close.addEventListener("click", function(){
  modal.classList.remove("modal_active");
});
/* setInterval(function () {
  modal.classList.remove("modal_active");
}, 5000); */
$(document).ready(function(){
  var brif = $(".brif");
  var brifTop = brif.offset().top;
  $(window).bind("scroll", function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > brifTop) {
      $("#map").html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3f9720b07b10c5938fef7b66f6db94883f318679bd73ff12a565f5620341c40f&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind("scroll")
    }
  });
});
  


