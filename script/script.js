//.go-to-gallery height
$(document).ready( adaptiveHeight );
$(window).resize( adaptiveHeight );
function adaptiveHeight(){
  var a = $('.go-to-gallery');
  var height = $('#img-container1').height();
  a.css("height", height);
}

//NAVIGATION

//display-hide navigaiton onresize
$(window).resize (function () {
  if ($(window).width() >= 1024) {
    $('.nav').css("display", "block");
  } else {
      $('.nav').css("display", "none");
  }
});
//Navigation toggle
function navToggle () {
  if($(window).width() < 1024) {
    $('.nav').slideToggle();
    }
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle') && $(window).width() < 1024) {
        $('.nav').hide();
      }
    });
}

