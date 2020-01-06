let leftArrow = document.querySelector(".client-card_slider-arrow");
let rightArrow = document.querySelector(".client-card_slider-arrow_right");
let wraperSliderBox = document.querySelector(".wraper-client-card");
let mainClientCard = document.querySelector(".main-client-card");
let boxDotsSlider = document.getElementById("box-dots_slider");
let dotSlider = document.querySelectorAll(".slider-line");
let positionSliderCard = 0;
let positionSliderCardDots = 0;
let n = 0;

rightArrow.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    if (positionSliderCard == -mainClientCard.offsetWidth * 3) {
      return;
    }
  } else if (positionSliderCard == -mainClientCard.offsetWidth * 2) {
    return;
  }
  positionSliderCard += -mainClientCard.offsetWidth;
  wraperSliderBox.style.transform = "translateX(" + positionSliderCard + "px)";
  n++;
  dotActive(n);
  this.classList.add("client-card_slider-arrow-active");
  leftArrow.classList.remove("client-card_slider-arrow-active");
});
leftArrow.addEventListener("click", function() {
  if (positionSliderCard == 0) {
    return;
  }
  positionSliderCard += mainClientCard.offsetWidth;
  wraperSliderBox.style.transform = "translateX(" + positionSliderCard + "px)";
  --n;
  dotActive(n);
  this.classList.add("client-card_slider-arrow-active");
  rightArrow.classList.remove("client-card_slider-arrow-active");
});
boxDotsSlider.addEventListener("click", function() {
  let target = event.target;
  if (this == target) {
    return;
  }
  if (target.getAttribute("value") == 1) {
    positionSliderCardDots += 0;
    n = 0;
  } else if (target.getAttribute("value") == 2) {
    positionSliderCardDots += -mainClientCard.offsetWidth;
    n = 1;
  } else if (target.getAttribute("value") == 3) {
    positionSliderCardDots += -mainClientCard.offsetWidth * 2;
    n = 2;
  } else {
    positionSliderCardDots += -mainClientCard.offsetWidth * 3;
    n = 3;
  }
  wraperSliderBox.style.transform =
    "translateX(" + positionSliderCardDots + "px)";
  positionSliderCard = positionSliderCardDots;
  positionSliderCardDots = 0;
  dotActive(n);
  leftArrow.classList.remove("client-card_slider-arrow-active");
  rightArrow.classList.remove("client-card_slider-arrow-active");
});

function dotActive(n) {
  for (let i = 0; i <= dotSlider.length; i++) {
    if (i == n) {
      dotSlider[i].classList.add("active");
    } else {
      dotSlider[i].classList.remove("active");
    }
  }
}

let menuBtn = document.querySelector(".menu-btn");
let dropMenu = document.querySelector(".drop-menu");
let span = document.querySelector(".menu-line");
menuBtn.addEventListener("click", function() {
  span.classList.toggle("menu-btn_active");
  dropMenu.classList.toggle("dropMenu");
});

const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
