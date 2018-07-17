$(document).ready(function() {
   
    $(".hello").delay(500).animate({
        "top": "0px",
        "opacity": "1"
    }, 1500);
    $(".name").delay(500).animate({
        "bottom": "0px",
        "opacity": "1"
    }, 1500);
    
    
var siteTop = 0;

$(window).scroll(function () {
    
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > siteTop) {
      $("#site-header").addClass("nav-down").removeClass("nav-up");
    } else {
      $("#site-header").removeClass("nav-down").addClass("nav-up");
    }
    siteTop = scrollPosition;
    
    $(".bottom-right").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".bottom-left").css("opacity", 1 - $(window).scrollTop() / 250);
      
});
    
var changeWhite = $('#second').offset().top;
var changeRed = $('#third').offset().top;

$(window).on( 'scroll', function() {
  if ($(window).scrollTop() >= changeWhite)  { 
    $("#site-header").addClass("white");
    $("#site-header a").css("color", "black");
  } else {
    $("#site-header").removeClass("white");
    $("#site-header").removeClass("red");
    $("#site-header a").css("color", "white");
  }
  if ($(window).scrollTop() >= changeRed) {
    $("#site-header").removeClass("white");
    $("#site-header").addClass("red");
    $("#site-header a").css("color", "white");
  } else {
    $("#site-header").removeClass("red");
  }
});
    
            
});
    
    
 