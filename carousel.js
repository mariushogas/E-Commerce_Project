let slidePosition = 0;
const slides = document.getElementsByClassName("carouselItem");
const totalSlides = slides.length;

document.getElementById("carouselBtnPrev").addEventListener("click", () => {
  moveToPrevSlide();
});
document.getElementById("carouselBtnNext").addEventListener("click", () => {
  moveToNextSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carouselItemVisible");
    slide.classList.add("carouselItemHiden");
  }

  slides[slidePosition].classList.add("carouselItemVisible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
