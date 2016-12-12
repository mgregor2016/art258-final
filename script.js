// put all your JS in here
$('.fade').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2500,
  fade: true,
  cssEase: 'linear',
  arrows: false
});

window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');
