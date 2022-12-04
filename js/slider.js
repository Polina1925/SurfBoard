const slider = $('.products').bxSlider({
  pager: false,
  controls: false,
  wrapperClass: false
});

$(".slider__arrow-left").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".slider__arrow-right").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});
