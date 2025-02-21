document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".swiper");
  if (!swiperContainer) return;

  const swiper = new Swiper(swiperContainer, {
    direction: "horizontal",
    loop: false,
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
});
