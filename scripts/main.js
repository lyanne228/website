function main() {
  window.setTimeout(arrowScrollChange, 500);
  arrowScrollChange();
  $(window).scroll(arrowScrollChange);
  $('.upDownArrows').click(function(){
    var imageNum = Math.round($(window).scrollTop()/$(window).height());
    var down = $(document).height() - ($(document).height()/$(window).height()-1-imageNum)*$(window).height()+1;
    if (~$(this).css('background-image').indexOf('down')){
      $('html, body').animate({ scrollTop: down }, 800);
    } else {
      $('html, body').animate({ scrollTop: 0 }, 800);
    }
  });
}

function arrowScrollChange() {
  if(Math.ceil($(window).scrollTop() + $(window).height()) == $(document).height()) {
    $('.upDownArrows').css('background-image', $('.upDownArrows').css('background-image').replace('down', 'up'));
  } else {
    $('.upDownArrows').css('background-image', $('.upDownArrows').css('background-image').replace('up', 'down'));
  }
}

$(document).ready(main);
