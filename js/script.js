document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.gallery .slide');
  if (slides.length) {
    let index = 0;
    const slidesContainer = document.querySelector('.gallery .slides');
    const prev = document.querySelector('.gallery .prev');
    const next = document.querySelector('.gallery .next');

    function showSlide(i) {
      index = (i + slides.length) % slides.length;
      const offset = -index * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener('click', function(){ showSlide(index - 1); });
    next.addEventListener('click', function(){ showSlide(index + 1); });
  }
});
