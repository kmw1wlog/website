// Hero slider
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicators button');
let current = 0;
let autoplay = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  indicators.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function prevSlide() {
  showSlide((current - 1 + slides.length) % slides.length);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
indicators.forEach(btn => {
  btn.addEventListener('click', e => {
    showSlide(parseInt(e.target.dataset.slide, 10));
  });
});

const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', () => clearInterval(autoplay));
hero.addEventListener('mouseleave', () => autoplay = setInterval(nextSlide, 5000));
hero.addEventListener('focusin', () => clearInterval(autoplay));
hero.addEventListener('focusout', () => autoplay = setInterval(nextSlide, 5000));

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Quick reservation form
const reservationForm = document.getElementById('quick-reservation-form');
reservationForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(reservationForm);
  console.log('Reservation form data:', Object.fromEntries(data.entries()));
  // TODO: API 연동 지점
});
