let myImageSlider = new Swiper('.slider-image', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let myTextSlider = new Swiper('.slider-text');

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;