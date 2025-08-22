// Simple hero slider
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicators button');
let current = 0;
function showSlide(i){
  slides.forEach((s,idx)=>{s.classList.toggle('active',idx===i);});
  indicators.forEach((btn,idx)=>{btn.classList.toggle('active',idx===i);});
  document.querySelector('.slides').style.transform = `translateX(-${i*100}%)`;
  current = i;
}
function next(){ showSlide((current+1)%slides.length); }
function prev(){ showSlide((current-1+slides.length)%slides.length); }
let timer = setInterval(next,5000);

document.querySelector('.next').addEventListener('click',()=>{next();reset();});
document.querySelector('.prev').addEventListener('click',()=>{prev();reset();});
indicators.forEach((btn,idx)=>btn.addEventListener('click',()=>{showSlide(idx);reset();}));
function reset(){ clearInterval(timer); timer=setInterval(next,5000); }

// Quick enroll validation (dummy)
document.querySelectorAll('form').forEach(f=>{
  f.addEventListener('submit',e=>{
    // allow form to open in new tab; add basic validation message
    if(!f.checkValidity()){
      e.preventDefault();
      alert('필수 정보를 입력해주세요.');
    }
  });
});
