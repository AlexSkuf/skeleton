let myImageSlider = new Swiper('.slider-image');


let myTextSlider = new Swiper('.slider-text', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },);

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;