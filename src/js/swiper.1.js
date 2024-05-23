let swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      initialSlide: 0,
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 8,
    },
  },
});
