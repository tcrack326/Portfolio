(function(){
$('.parallax').on('scroll', function () {

  //Group 1 ==================================================
    if( $('#moveLeft1').offset().top > 50){
      var rotator = ($('#moveLeft1').offset().top) / 2;
      //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
      $('#moveLeft1').css("transform", "translateX(" + (-$('#moveLeft1').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

      //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
    }

    else {
      $('#moveLeft1').css("transform", "rotateY(0deg)");
    }

    if( $('#moveRight1').offset().top > 50) {
      //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
      var rotator = -($('#moveRight1').offset().top) / 2;
      $('#moveRight1').css("transform", "translateX(" + ($('#moveRight1').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
      //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
    }

    else {
      $('#moveRight1').css("transform", "rotateY(0deg)");
    }

  //Group 2 =================================================

  if( $('#moveLeft2').offset().top > 50){
    var rotator = ($('#moveLeft2').offset().top) / 2;
    //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
    $('#moveLeft2').css("transform", "translateX(" + (-$('#moveLeft2').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

    //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft2').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight2').offset().top > 50) {
    //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
    var rotator = -($('#moveRight2').offset().top) / 2;
    $('#moveRight2').css("transform", "translateX(" + ($('#moveRight2').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
    //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight2').css("transform", "rotateY(0deg)");
  }

  //Group 3 =================================================

    if( $('#moveLeft3').offset().top > 50){
      var rotator = ($('#moveLeft3').offset().top) / 2;
      //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
      $('#moveLeft3').css("transform", "translateX(" + (-$('#moveLeft3').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

      //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
    }

    else {
      $('#moveLeft3').css("transform", "rotateY(0deg)");
    }

    if( $('#moveRight3').offset().top > 50) {
      //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
      var rotator = -($('#moveRight3').offset().top) / 2;
      $('#moveRight3').css("transform", "translateX(" + ($('#moveRight3').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
      //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
    }

    else {
      $('#moveRight3').css("transform", "rotateY(0deg)");
    }


  // Group 4 ================================================

  if( $('#moveLeft4').offset().top > 50){
    var rotator = ($('#moveLeft4').offset().top) / 2;
    //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
    $('#moveLeft4').css("transform", "translateX(" + (-$('#moveLeft4').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

    //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft4').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight4').offset().top > 50) {
    //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
    var rotator = -($('#moveRight4').offset().top) / 2;
    $('#moveRight4').css("transform", "translateX(" + ($('#moveRight4').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
    //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight4').css("transform", "rotateY(0deg)");
  }


  //Group 5 =================================================

  if( $('#moveLeft5').offset().top > 50){
    var rotator = ($('#moveLeft5').offset().top) / 2;
    //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
    $('#moveLeft5').css("transform", "translateX(" + (-$('#moveLeft5').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

    //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft5').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight5').offset().top > 50) {
    //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
    var rotator = -($('#moveRight5').offset().top) / 2;
    $('#moveRight5').css("transform", "translateX(" + ($('#moveRight5').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
    //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight5').css("transform", "rotateY(0deg)");
  }

  //Group 6==================================================

  if( $('#moveLeft6').offset().top > 50){
    var rotator = ($('#moveLeft6').offset().top) / 2;
    //$('#moveLeft1').css({ left: -$('#moveLeft1').offset().top + 70 });
    $('#moveLeft6').css("transform", "translateX(" + (-$('#moveLeft6').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

    //$('#moveLeft1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveLeft6').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight6').offset().top > 50) {
    //$('#moveRight1').css({ right: $('#moveRight1').offset().top });
    var rotator = -($('#moveRight6').offset().top) / 2;
    $('#moveRight6').css("transform", "translateX(" + ($('#moveRight6').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");
    //$('#moveRight1').css("transform", "rotateY(" + rotator + "deg)");
  }

  else {
    $('#moveRight6').css("transform", "rotateY(0deg)");
  }

  //Group 7 =================================================

  if( $('#moveLeft7').offset().top > 50){
    var rotator = ($('#moveLeft7').offset().top) / 2;

    $('#moveLeft7').css("transform", "translateX(" + (-$('#moveLeft7').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveLeft7').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight7').offset().top > 50) {

    var rotator = -($('#moveRight7').offset().top) / 2;
    $('#moveRight7').css("transform", "translateX(" + ($('#moveRight7').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveRight7').css("transform", "rotateY(0deg)");
  }

  //Group 8==================================================

  if( $('#moveLeft8').offset().top > 50){
    var rotator = ($('#moveLeft8').offset().top) / 2;

    $('#moveLeft8').css("transform", "translateX(" + (-$('#moveLeft8').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveLeft8').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight8').offset().top > 50) {

    var rotator = -($('#moveRight8').offset().top) / 2;
    $('#moveRight8').css("transform", "translateX(" + ($('#moveRight8').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveRight8').css("transform", "rotateY(0deg)");
  }

  //Group 9 =================================================

  if( $('#moveLeft9').offset().top > 50){
    var rotator = ($('#moveLeft9').offset().top) / 2;

    $('#moveLeft9').css("transform", "translateX(" + (-$('#moveLeft9').offset().top + 59 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveLeft9').css("transform", "rotateY(0deg)");
  }

  if( $('#moveRight9').offset().top > 50) {

    var rotator = -($('#moveRight9').offset().top) / 2;
    $('#moveRight9').css("transform", "translateX(" + ($('#moveRight9').offset().top - 81 ) + "px) rotateY(" + rotator + "deg)");

  }

  else {
    $('#moveRight9').css("transform", "rotateY(0deg)");
  }



  });

})();
