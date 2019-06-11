var $ = require('jquery');

$(document).ready(function(){
  $('.right ul li.background_hover').mouseenter(function() {
    $(this).toggleClass('active').css('color', 'white');
  })
  $('.right ul li.background_hover').mouseleave(function() {
    $(this).toggleClass('active').css('color', '#30488f');
  })

  $('.section1_left .signup button').mouseenter(function() {
    $(this).css('background', '#000763');
  })
  $('.section1_left .signup button').mouseleave(function() {
    $(this).css('background', '#30488f');
  })
})
