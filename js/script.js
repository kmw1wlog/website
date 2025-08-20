const slides=document.querySelector('.slides');
const slideCount=document.querySelectorAll('.slide').length;
let index=0;
function update(){slides.style.transform=`translateX(-${index*100}%)`;}
document.querySelector('.next').addEventListener('click',()=>{index=(index+1)%slideCount;update();});
document.querySelector('.prev').addEventListener('click',()=>{index=(index-1+slideCount)%slideCount;update();});
const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');
hamburger.addEventListener('click',()=>{nav.classList.toggle('active');});
