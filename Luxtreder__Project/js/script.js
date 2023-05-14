
'use strict';
const userIcon = document.querySelector('.actions__header__region');
const headerMenu = document.querySelector('.user__header__menu');
const gamburger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const activateUserIcon = function(e) {
    e.preventDefault()
    if(!menuBody.classList.contains('menu__body--active')){
        headerMenu.classList.toggle('user__header--active');
    } return; 
}

userIcon.addEventListener('click', activateUserIcon);

window.addEventListener('keydown', function(e){
    e.key === 'Escape' && headerMenu.classList.toggle('user__header--active');
    
});

gamburger.addEventListener('click', function(e) {
    if(headerMenu.classList.contains('user__header--active')) return;
    menuBody.classList.toggle('menu__body--active');
})

const obsCallBack = function(entries) {
    [entry] = entries;

    console.log(entry);
}

const obsOptions = {
    root: null,
    threshold: 0.1,
}



// window.addEventListener('click', activateUserIcon);

















