$(document).ready(function() {
  function browser_name(){
    var browser_id = navigator.userAgent;
    if (browser_id.search(/Firefox/) != -1) return 'Firefox';
  }
  var browser = browser_name();
  if (browser == "Firefox") {
    document.write('<link rel="stylesheet" href="../css/mozila-style.css">')
  }
})
