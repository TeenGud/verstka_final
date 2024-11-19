const main = document.querySelector('.main')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const burgerButton = document.querySelector('.burger-button')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerQuit = document.querySelector('.burger-quit')
const body = document.querySelector('body');

const overlay = document.querySelector('.mobile-menu-overlay')

burgerButton.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu--show')
  overlay.classList.add('overlay')
  overlay.classList.add('overlay__menu')
  body.style.position = 'fixed';
  if (window.screen.width <= 440) {
    main.classList.add('main--disable')
    footer.classList.add('footer--disable')
    header.classList.add('header--disable')
    body.style.position = 'fixed';
  }
})

burgerQuit.addEventListener('click', function () {
  mobileMenu.classList.remove('mobile-menu--show')
  main.classList.remove('main--disable')
  footer.classList.remove('footer--disable')
  header.classList.remove('header--disable')
  overlay.classList.remove('overlay')
  overlay.classList.remove('overlay__menu')
  body.style.position = 'relative';
})

window.addEventListener('click', function (evt) {
  if (evt.target.classList[1] === 'overlay') {
    mobileMenu.classList.remove('mobile-menu--show')
    main.classList.remove('main--disable')
    footer.classList.remove('footer--disable')
    header.classList.remove('header--disable')
    overlay.classList.remove('overlay')
    overlay.classList.remove('overlay__menu')
    body.style.position = 'relative';
  }
})
