$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      if ($('#scrolling').is(':hidden')) {
        $('#scrolling').css({ opacity: 1 }).fadeIn('slow');
      }
    } else { $('#scrolling').stop(true, false).fadeOut('fast'); }
  });
  
  $('#scrolling').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});