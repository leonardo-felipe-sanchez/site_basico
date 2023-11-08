'use strict';	
/*
window.onload = function(){
  var slides = document.getElementsByClassName('carousel-item'),
      addActive = function(slide) {slide.classList.add('active')},
      removeActive = function(slide) {slide.classList.remove('active')};
  addActive(slides[0]);
  
  setInterval(function (){
    for (var i = 0; i < slides.length; i++){
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        break;
      }
      if (slides[i].classList.contains('active')) { 
        slides[i].removeAttribute('style');
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        addActive(slides[i + 1]);
        break;
      }
    } 
  }, 4000);
}
*/

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

const lista = ['frente', 'canto', 'folhinha', 'letrinha'];
const collection = document.getElementsByClassName("text-box");

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    // do this
    console.log('Checked');
    document.body.style.backgroundColor= `var(--primary-color)`;
//console.log(document.getElementsByClassName("fa-solid").length);

    for (let i= 0; i< 4; i++) {

      if (i < 2) {
      document.getElementsByClassName("navcolor")[i].style.color  = `var(--light-color)`;
      }
  
      if (i < 3) {
        document.getElementsByClassName("fa-brands")[i].style.color = `var(--light-color)`;
        document.getElementsByTagName("h1")[i].style.color = `var(--light-color)`;  
      }
      if(i<4){
        document.getElementsByTagName("h4")[i].style.color = `var(--light-color)`;
      }

      
if(document.body.offsetWidth < 701)
{
  if (i>1) {
    document.getElementsByClassName("fa-solid")[i].style.color = `var(--light-color)`;
  }
}
    }
    
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "var(--light-color)";
    }

    for (let index = 0; index < lista.length; index++) {
      
      document.getElementById(`${lista[index]}`).classList.remove("filter-green");
      document.getElementById(`${lista[index]}`).classList.add("filter-white");
    }
    } else {
      // do that
      console.log('Not checked');
      document.body.style.backgroundColor= `var(--light-color)`;

      for (let i= 0; i< 4; i++) {

        if (i < 2) {
          document.getElementsByClassName("navcolor")[i].style.color  = `var(--dark-color)`;
        }
        
        if(i < 3){
          document.getElementsByClassName("fa-brands")[i].style.color = `var(--dark-color)`;
          document.getElementsByTagName("h1")[i].style.color = `var(--dark-color)`;
  
        }

        if(i < 4){
          document.getElementsByTagName("h4")[i].style.color = `var(--dark-color)`;
        }
  
        if(document.body.offsetWidth < 701)
        {
          if (i>1) {
            document.getElementsByClassName("fa-solid")[i].style.color = `var(--secondary-color)`;
          }
        }

      }

      for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "var(--dark-color)";
      }

      for (let index = 0; index < lista.length; index++) {
      
        document.getElementById(`${lista[index]}`).classList.add("filter-green");
        document.getElementById(`${lista[index]}`).classList.remove("filter-white");
      }
    }
  });
});

var onTop = false;
$(window).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    
    if(scrollPosition < 10 && !onTop) {
      onTop = true;
      $('.navbar').addClass('onTop');
      
      if($('.switch').attr('checked')){

      $( '.navcolor').css('color', 'var(--dark-color)');
      } else{
        $( '.navcolor').css('color', 'var(--light-color)');
      }
    }
    
    if(scrollPosition > 10 && onTop) {
      onTop = false;
      $('.navbar').removeClass('onTop');
      if($('.switch').attr('checked')){
         $( '.navcolor').css('color', 'var(--light-color)');
        } else{
          $( '.navcolor').css('color', 'var(--dark-color)');
        }
    }
  });