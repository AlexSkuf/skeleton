let myImageSlider = new Swiper('.slider-image');


let myTextSlider = new Swiper('.slider-text');

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;