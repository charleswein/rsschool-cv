const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close')
const percents = document.querySelectorAll('.skills__item-percent');
const fillProgress = document.querySelectorAll('.skills__item-progress span');
const promoBtnsCont = document.querySelector('.promo__btns');
const promoBtns = document.querySelectorAll('.promo__link');


hamburger.addEventListener('click',()=>{
 menu.classList.add('active');
});
close.addEventListener('click',()=>{
 menu.classList.remove('active');
});


percents.forEach((elem, i) => {
 if(elem.textContent.includes('%') || elem.textContent.length > 2){
  fillProgress[i].style.width = elem.textContent;
 } 
})

promoBtnsCont.addEventListener('mouseover', function (e) {
 promoBtns.forEach(elem => {
  elem.classList.remove('btn');
 })
 if(e.target.classList.contains('promo__link')){
  e.target.classList.toggle('btn');
 }
})