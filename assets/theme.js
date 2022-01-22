let myImageSlider = new Swiper('.slider-image');


let myTextSlider = new Swiper('.slider-text', {
  navigation: {
    nextel: '.swipper-button-next',
    prevEl: '.swipper button-prev'
  },
});

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;