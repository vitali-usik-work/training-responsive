//.go-to-gallery height
$(document).ready( adaptiveHeight );
$(window).resize( adaptiveHeight );

function adaptiveHeight(){
  var galleryButton = $('.go-to-gallery');
  var height = $('#img-container1').height();
  galleryButton.css("height", height);
}

//NAVIGATION

var minWidth = 1024;
var navSelector = ".nav";
var dropdownToggleSelector = ".dropdown-toggle";

//display-hide navigaiton onresize

$(window).resize (function () {
  if ($(window).width() >= minWidth) {
    $(navSelector).css("display", "block");
  } else {
      $(navSelector).css("display", "none");
  }
});

//Navigation toggle

function navToggle () {
  var nav = $('.nav');
  var minWidth = 1024;
  if($(window).width() < minWidth) {
    $(navSelector).slideToggle();
    }
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is(dropdownToggleSelector) && !$(target).parents().is(dropdownToggleSelector) && $(window).width() < 1024) {
        $(navSelector).hide();
      }
    });
}

