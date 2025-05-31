document.addEventListener("DOMContentLoaded", function () {
  const dropMenu = document.querySelector(".drop-menu");
  const menuWrap = document.querySelector(".menu-wrap");
  const body = document.body;
  const html = document.documentElement;

  if (dropMenu) {
    dropMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      dropMenu.classList.toggle("is-active");
      if (menuWrap) {
        menuWrap.classList.toggle("open");
      }
      body.classList.toggle("overflow");
      html.classList.toggle("overflow");
    });
  }

  const swiper = new Swiper(".info-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600, // плавность анимации (мс)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

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

    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Активные кнопки и контенты
        buttons.forEach((b) => b.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        const tabId = btn.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  

});