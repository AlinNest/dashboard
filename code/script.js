const burger = document.querySelector(".header-burger");
const container =  document.querySelector(".container");
const left =  document.querySelector(".left");
const leftMain =  document.querySelector(".left-main");
const leftFooter =  document.querySelector(".left-footer");
const leftFooterImg =  document.querySelector(".left-footer-img");
const body =  document.querySelector("body");
const menuItem = document.querySelectorAll(".left-main-item");
const menu = document.querySelector(".left-main-items");
const pagination = document.querySelector(".right-pagination-pages");
const pagItem = document.querySelectorAll(".right-pagination-item");

burger.addEventListener('click', burgerActive);
menu.addEventListener('click', menuActive);
pagination.addEventListener('click', pageActive);



//активація бургера
function burgerActive(e) {
  burger.classList.toggle('burger-active');
  container.classList.toggle('burger-active');
  left.classList.toggle('burger-active');
  leftMain.classList.toggle('left-main-active');
  leftFooter.classList.toggle('burger-active');
  leftFooterImg.classList.toggle('burger-active');
  body.classList.toggle('lock');
}

//виділення вибраного пункту меню
function menuActive(e) {
  console.log(e.target);
   let active = document.querySelector('.item-active');
 
    if(active){
          active.classList.remove('item-active')
         }

    menuItem.forEach(item => {
      if(item === e.target || item === e.target.parentElement || item === e.target.parentElement.parentElement)
      item.classList.add('item-active');
})
}

//виділення вибраної сторінки
function pageActive(e) {
  
  let active = document.querySelector('.pag-active');

   if(active){
         active.classList.remove('pag-active')
        }

      pagItem.forEach(item => {
     if(item === e.target)
     item.classList.add('pag-active');
})
}