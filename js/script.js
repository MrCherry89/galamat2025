document.addEventListener("DOMContentLoaded", function () {
  // Swiper 1
  const swiper = new Swiper(".info-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const swiper5 = new Swiper(".images-swiper", {
    slidesPerView: "auto",            
    spaceBetween: 20,
    loop: true,
    speed: 600,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  const prevArrow = document.querySelector(".planning-wrap .slider-navigation .slick-prev");
  const nextArrow = document.querySelector(".planning-wrap .slider-navigation .slick-next");

  // Инициализация основного слайдера
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: prevArrow,
    nextArrow: nextArrow,
  });

  // Инициализация навигационного слайдера
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });
  

  const designHallsSlider = new Swiper(".design-halls", {
    slidesPerView: "auto", // чтобы работала фикс. ширина
    spaceBetween: 10,      // отступ между слайдами
    grabCursor: true,      // курсор "рука"
    freeMode: true         // свободная прокрутка без фиксации
  });

  // Swiper 2
  const swiper2 = new Swiper(".office-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Tab switching
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  

  function syncRange(minInputId, maxInputId, minOutputId, maxOutputId, formatter) {
    const minInput = document.getElementById(minInputId);
    const maxInput = document.getElementById(maxInputId);
    const minOut = document.getElementById(minOutputId);
    const maxOut = document.getElementById(maxOutputId);
  
    // Проверка наличия всех элементов
    if (!minInput || !maxInput || !minOut || !maxOut) return;
  
    function update() {
      let min = parseFloat(minInput.value);
      let max = parseFloat(maxInput.value);
  
      if (isNaN(min)) min = 0;
      if (isNaN(max)) max = 0;
  
      if (min > max) [min, max] = [max, min];
  
      minOut.textContent = formatter(min);
      maxOut.textContent = formatter(max);
    }
  
    minInput.addEventListener("input", update);
    maxInput.addEventListener("input", update);
    update();
  }
  syncRange("price-min", "price-max", "price-min-val", "price-max-val", formatNumber);
  syncRange("area-min", "area-max", "area-min-val", "area-max-val", (v) => v.toFixed(1).replace(".", ","));  
  

  document.querySelectorAll('.tab-button2').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
  
      // Удаляем активные классы у кнопок и табов
      document.querySelectorAll('.tab-button2').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content2').forEach(tab => tab.classList.remove('active'));
  
      // Добавляем активный класс к нажатой кнопке и соответствующему табу
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.filters').forEach(el => {
      el.classList.toggle('open');
    });
  });
});

document.querySelectorAll('.show-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.product-items .product-item').forEach(item => {
      item.classList.remove('hide');
    });
  });
});

document.querySelectorAll('.drop-menu').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('is-active');
    document.querySelector('.menu-wrap')?.classList.toggle('open');
    document.body.classList.toggle('overflow');
    document.documentElement.classList.toggle('overflow');
  });
});
});
