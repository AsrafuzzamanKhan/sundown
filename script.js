const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function page3Animation() {
  const fixed = document.querySelector("#fixed-image");
  const elemContainer = document.querySelector("#elem-container");
  console.log(fixed);
  elemContainer.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemContainer.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  const elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      const image = e.getAttribute("data-image");
      console.log(image);
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
page3Animation();
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperAnimation();

var full = document.querySelector("#full-scr");
var menu = document.querySelector("#nav h3");
var navImg = document.querySelector("#nav img");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    navImg.style.opacity = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
    navImg.style.opacity = 1;
    flag = 0;
  }
});
