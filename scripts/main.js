function main() {
  arrowScrollChange();
  $(window).scroll(arrowScrollChange);
  $('.upDownArrows').click(function(){
    if (~$(this).css('background-image').indexOf('down')){
      window.location.href = "#design";
    } else {
      window.location.href = "#";
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
