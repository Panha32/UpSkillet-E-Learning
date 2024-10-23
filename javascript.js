var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerslide: "true",
  fade: "true",
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerslide: "true",
  fade: "true",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper-2", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  fade: "true",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// object wow.js
new WOW().init();
