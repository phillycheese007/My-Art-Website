"use strict";

$('.image-block').click(function () {
  $('.image-block').not(this).removeClass('mystyle');
  $(this).toggleClass('mystyle');
});