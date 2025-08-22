// === script.js ===
// 슬라이더, 햄버거 토글, 스무스 스크롤, 폼 검증

// 상단 CTA 바 스크롤 시 축소
const ctaBar = document.querySelector('.cta-bar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) ctaBar.classList.add('cta-bar--shrink');
  else ctaBar.classList.remove('cta-bar--shrink');
});

// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('show');
});
document.addEventListener('click', e => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// 스무스 스크롤 to reservation
function scrollToReservation() {
  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
  if (window.gtag) gtag('event', 'cta_click');
}

// Hero 슬라이더
class Slider {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.slides = this.container.querySelectorAll('.hero__slide');
    this.current = 0;
    this.interval = null;
    this.navButtons = this.container.querySelectorAll('.hero__nav button');
    this.init();
  }
  init() {
    this.showSlide(0);
    this.container.querySelector('.hero__next').addEventListener('click', () => this.next());
    this.container.querySelector('.hero__prev').addEventListener('click', () => this.prev());
    this.navButtons.forEach((btn, idx) => btn.addEventListener('click', () => this.goTo(idx)));
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === ' ') { e.preventDefault(); this.toggleAuto(); }
    });
    this.autoPlay();
  }
  showSlide(index) {
    this.slides.forEach(s => s.classList.remove('hero__slide--active'));
    this.navButtons.forEach(b => b.classList.remove('active'));
    this.slides[index].classList.add('hero__slide--active');
    this.navButtons[index].classList.add('active');
    this.current = index;
  }
  next() { this.goTo((this.current + 1) % this.slides.length); }
  prev() { this.goTo((this.current - 1 + this.slides.length) % this.slides.length); }
  goTo(i) { this.showSlide(i); if (window.gtag) gtag('event', 'menu_view'); }
  autoPlay() { this.interval = setInterval(() => this.next(), 5000); }
  pause() { clearInterval(this.interval); }
  toggleAuto() { this.interval ? (this.pause(), this.interval = null) : this.autoPlay(); }
}

window.addEventListener('DOMContentLoaded', () => {
  new Slider('.hero');
});

// 예약 폼 검증 및 전송
const reservationForm = document.querySelector('#reservation-form');
reservationForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!reservationForm.checkValidity()) {
    reservationForm.reportValidity();
    return;
  }
  const params = new URLSearchParams(new FormData(reservationForm)).toString();
  if (window.gtag) gtag('event', 'reservation_submit');
  window.location.href = `{{카카오오픈채팅URL}}?${params}`;
});

