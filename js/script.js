document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });

  const bar = document.querySelector('.fixed-reservation-bar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 80) bar.classList.add('show'); else bar.classList.remove('show');
  });

  // slider
  const slider = document.querySelector('.hero-slider');
  if(slider){
    const slides = slider.querySelectorAll('.slide');
    const indicators = document.querySelector('.slider-indicators');
    let current = 0; let timer;
    slides.forEach((s,i)=>{
      const btn = document.createElement('button');
      btn.addEventListener('click',()=>{go(i);reset();});
      indicators.appendChild(btn);
    });
    const indicatorBtns = indicators.querySelectorAll('button');
    function go(i){
      slides[current].classList.remove('active');
      indicatorBtns[current].classList.remove('active');
      current = (i+slides.length)%slides.length;
      slides[current].classList.add('active');
      indicatorBtns[current].classList.add('active');
    }
    function next(){go(current+1);} function prev(){go(current-1);}
    document.querySelector('.slider-nav .next').addEventListener('click',()=>{next();reset();});
    document.querySelector('.slider-nav .prev').addEventListener('click',()=>{prev();reset();});
    function reset(){clearInterval(timer); timer=setInterval(next,5000);} reset();
    go(0);
  }

  const form = document.getElementById('quickReservationForm');
  if(form){
    form.addEventListener('submit', function(e){
      const checkin = new Date(form.checkin.value);
      const checkout = new Date(form.checkout.value);
      const error = form.querySelector('.form-error');
      if(!form.checkin.value || !form.checkout.value || checkout <= checkin){
        e.preventDefault();
        error.textContent = '날짜를 올바르게 선택해 주세요.';
      } else if((checkout - checkin) / (1000*60*60*24) < 1){
        e.preventDefault();
        error.textContent = '최소 1박 이상 예약 가능합니다.';
      } else {
        error.textContent = '';
      }
    });
  }
});

function scrollToReservation(){
  const el = document.getElementById('reservation');
  if(el) el.scrollIntoView({behavior:'smooth'});
}
