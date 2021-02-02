var swiper = new Swiper('.swiper-container', {
    
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 1000,
    },
    
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    
    coverflowEffect: {
     rotate: 15,
     stretch: 1,
     depth: 300,
     modifier: 1,
     slideShadows: true,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  });