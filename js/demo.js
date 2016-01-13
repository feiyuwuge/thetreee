/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#b4b4da',
    lineColor: '#b4b4da'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});