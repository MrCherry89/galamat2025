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

  $('.popup').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade'
})
  

  const designHallsSlider = new Swiper(".design-halls", {
    slidesPerView: "auto", // чтобы работала фикс. ширина
    spaceBetween: 10,      // отступ между слайдами
    grabCursor: true,      // курсор "рука"
    freeMode: true         // свободная прокрутка без фиксации
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fon-left", {
  x: "-20%",
  y: "20%", 
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section1",
    start: "top-=200 top",
    end: "bottom top",
    scrub: true,
  }
});

gsap.to(".fon-right", {
  x: "20%",
  y: "20%", 
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section1",
    start: "top-=200 top",
    end: "bottom top",
    scrub: true,
  }
});

gsap.to(".section1 .info", {
  y: "-200px",      
  opacity: 0,       
  ease: "sine.out", 
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "center top", 
    scrub: true        
  }
});

if (window.innerWidth >= 768) {
  gsap.fromTo(".section2 .texts",
    {
      opacity: 0,
      y: "20%",
    },
    {
      opacity: 1,
      y: "0%",
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 65%",
        end: "top 50%",
        scrub: true
      }
    }
  );
}

gsap.fromTo(".section3 .texts",
  {
    opacity: 0,
    scale: 0.5, // появляется чуть сжатым
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,   // возвращается к обычному размеру
    ease: "expo.out", // более плавный и кинематографичный
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%",
      end: "top botom",
      scrub: true
    }
  }
);

gsap.to(".section2 .bg1", {
  x: "10%",
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

gsap.to(".section2 .bg2", {
  x: "-10%",
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

gsap.to(".section3 .bg", {
  x: "-10%",
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section3",
    start: "top bottom",   // когда верх section3 ДОКАСАЕТСЯ низа экрана
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".section4 .bg", {
  x: "-10%",
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".section4",
    start: "top bottom",   // когда верх section3 ДОКАСАЕТСЯ низа экрана
    end: "bottom top",
    scrub: true
  }
});



gsap.fromTo(".section4 .leave-request-wrap",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section4",
      start: "top 50%",     
      end: "top 40%",       
      scrub: true
    }
  }
);

gsap.fromTo(".section-end .leave-request-wrap",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section-end",
      start: "top 90%",     
      end: "top 40%",       
      scrub: true
    }
  }
);

gsap.fromTo(".section5 .tour360",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section5",
      start: "top 90%",     
      end: "top 40%",       
      scrub: true
    }
  }
);

gsap.fromTo(".section6 .title-wrap",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section6",
      start: "top 90%",     
      end: "top 40%",      
      scrub: true
    }
  }
);

gsap.utils.toArray(".improvement-item").forEach((item, index) => {
  gsap.fromTo(item,
    {
      y: 150,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true // включи для отладки
      }
    }
  );
});


gsap.fromTo(".section-halls .info .texts",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section-halls",
      start: "top 20%",      // начнёт чуть раньше
      end: "top 10%",        // закончится до полной прокрутки
      scrub: true
    }
  }
);

gsap.fromTo(".section-halls .info .tags",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center"
  },
  {
    opacity: 1,
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section-halls",
      start: "top 0%",      // начнёт чуть раньше
      end: "top 10%",        // закончится до полной прокрутки
      scrub: true
    }
  }
);

$(".cards-wrap .show").on("click", function(){
  $(".cards .card").removeClass("hide");
})


const buttons2 = document.querySelectorAll('.tab2 .tab-button');
const contents2 = document.querySelectorAll('.tab2 .tab-content2');

buttons2.forEach(button => {
  button.addEventListener('click', () => {
    // Активируем текущую кнопку
    buttons2.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tabId = button.getAttribute('data-tab');

    // Переключаем контент
    contents2.forEach(content => {
      content.classList.toggle(
        'active',
        content.getAttribute('data-content') === tabId
      );
    });
  });
});



});
