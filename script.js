
//Hamburger

$(document).ready(function(){

$(".hamburger").on('click', function(){
    $(".nav__menu").toggleClass("nav__menu--open");
})
    
  });

  //scrollReveal
 
  ScrollReveal().reveal('.reveal',{ distance: '100px', duration: 1500, easing: 'cubic-bezier(0.5, 0, 0, 1)', interval: 600, mobile: false});
  ScrollReveal().reveal('.zoom',{ duration: 1500, easing: 'cubic-bezier(0.5, 0, 0, 1)', interval: 200, scale: 0.65, mobile: false, });