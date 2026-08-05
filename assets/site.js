const menu=document.querySelector('.menu-btn');const panel=document.querySelector('.mobile-panel');
if(menu&&panel){menu.addEventListener('click',()=>panel.classList.toggle('open'));}
document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{const box=document.querySelector('.lightbox');const img=el.parentElement.querySelector('img');box.querySelector('img').src=img.src;box.classList.add('open');}));
const closeBox=()=>document.querySelector('.lightbox')?.classList.remove('open');
document.querySelector('.lightbox button')?.addEventListener('click',closeBox);
document.querySelector('.lightbox')?.addEventListener('click',e=>{if(e.target.classList.contains('lightbox'))closeBox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();});