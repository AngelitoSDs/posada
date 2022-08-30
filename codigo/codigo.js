var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
  


document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
  accordion.onclick = () =>{
      accordion.classList.toggle('active');
  }
});
  