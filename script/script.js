var MIN_WIDTH = 1024;
var NAV_SELECTOR = ".nav";
var DROPDOWN_TOGGLE_SELECTOR = ".dropdown-toggle";
//.go-to-gallery height
$(document).ready( adaptiveHeight );
$(window).resize( adaptiveHeight );

function adaptiveHeight(){
  var galleryButton = $('.go-to-gallery');
  var height = $('#img-container1').height();
  galleryButton.css("height", height);
}

//NAVIGATION
//display-hide navigaiton onresize
$(window).resize (function () {
  if ($(window).width() >= MIN_WIDTH) {
    $(NAV_SELECTOR).css("display", "block");
  } else {
      $(NAV_SELECTOR).css("display", "none");
  }
});

//Navigation toggle
function navToggle () {
  if($(window).width() < MIN_WIDTH) {
    $(NAV_SELECTOR).slideToggle();
    }
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is(DROPDOWN_TOGGLE_SELECTOR) && !$(target).parents().is(DROPDOWN_TOGGLE_SELECTOR) && $(window).width() < MIN_WIDTH) {
        $(NAV_SELECTOR).hide();
      }
    });
}

