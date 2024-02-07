

  let swiper = null; // Объявляем переменную swiper глобально

  // Функция для инициализации или отключения Swiper в зависимости от размера экрана
  function initSwiper() {
      if (window.innerWidth <= 1290) {
          // Проверяем ширину экрана (здесь 768px)
          // Инициализируем Swiper, если его еще нет
          if (!swiper) {
              swiper = new Swiper('.swiper', {
                  direction: 'horizontal',
                  loop: true,
                  pagination: {
                      el: '.swiper-pagination',
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
                  scrollbar: {
                      el: '.swiper-scrollbar',
                  },
                  
                      slidesPerView: 'auto',
                  
                      spaceBetween: 20,
                      
                      centeredSlides: true,
                  
                      slidesPerGroup: 1,
                  
                      initialSlide: 2, 
              });
          }
      } else {
          // Уничтожаем Swiper, если он был инициализирован и ширина экрана меньше 768px
          if (swiper) {
              swiper.destroy();
              swiper = null;
          }
      }

  }
  
  // Вызываем функцию при загрузке страницы и изменении размера окна
  window.onload = function () {
      initSwiper();
  };
  
  window.onresize = function () {
      initSwiper();
  };