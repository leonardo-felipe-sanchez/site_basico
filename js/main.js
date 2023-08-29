'use strict';	
var onTop = false;
$(window).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    
    if(scrollPosition < 10 && !onTop) {
      onTop = true;
      $('.navbar').addClass('onTop');
    }
    
    if(scrollPosition > 10 && onTop) {
      onTop = false;
      $('.navbar').removeClass('onTop');
    }
  });