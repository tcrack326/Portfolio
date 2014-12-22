
$('.parallax').on('scroll', function () {

  if( $('#moveLeft1').offset().top > 50){
    $('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
    var rotator = -($('#moveLeft1').offset().top) / 2;
    $('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft1').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight1').offset().top > 50){
    $('#moveRight1').css({ right: -$('#moveRight1').offset().top - 220 });
    var rotator = ($('#moveRight1').offset().top) / 2;
    $('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight1').css("transform", "rotateY(0deg)");
  }

  if( $('#moveLeft2').offset().top > 50){
    $('#moveLeft2').css({ left: -$('#moveLeft2').offset().top + 70 });
    var rotator = -($('#moveLeft2').offset().top) / 2;
    $('#moveLeft2').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft2').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight2').offset().top > 50){
    $('#moveRight2').css({ right: -$('#moveRight2').offset().top - 220 });
    var rotator = -($('#moveRight2').offset().top) / 2;
    $('#moveRight2').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight2').css("transform", "rotateY(0deg)");
  }

  if( $('#moveLeft3').offset().top > 50){
    $('#moveLeft3').css({ left: -$('#moveLeft3').offset().top + 70 });
    var rotator = -($('#moveLeft3').offset().top) / 2;
    $('#moveLeft3').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft3').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight3').offset().top > 50){
    $('#moveRight3').css({ right: -$('#moveRight3').offset().top - 220 });
    var rotator = -($('#moveRight3').offset().top) / 2;
    $('#moveRight3').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight3').css("transform", "rotateY(0deg)");
  }

  if( $('#moveLeft4').offset().top > 50){
    $('#moveLeft4').css({ left: -$('#moveLeft4').offset().top + 70 });
    var rotator = -($('#moveLeft4').offset().top) / 2;
    $('#moveLeft4').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft4').css("transform", "rotateY(0deg)");
  }


});
