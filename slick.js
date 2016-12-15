$(document).ready(function(){
$('.fade').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 30000,
  fade: true,
  cssEase: 'linear',
  arrows: true
});
});

$(document).ready(function(){
  $('.promo').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  fade: true,
  cssEase: 'linear',
  arrows: false
});
});
