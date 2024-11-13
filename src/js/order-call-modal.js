const footerAsideOrderCallButton = document.querySelector(
  '.footer-aside__order-call'
)
const orderCall = document.querySelector('.order-call')
const closeButton = document.querySelector('.order-call__button')
const overlay = document.querySelector('.order-call-dialog-overlay')

footerAsideOrderCallButton.addEventListener('click', function () {
  orderCall.setAttribute('open', true)
  overlay.classList.add('overlay')
  overlay.classList.add('overlay__dialogs')
})

closeButton.addEventListener('click', function (event) {
  orderCall.removeAttribute('open')
  overlay.classList.remove('overlay')
  overlay.classList.remove('overlay__dialogs')
  event.preventDefault()
})

document.addEventListener('click', function (event) {
  if (event.target.classList[1] === 'overlay') {
    orderCall.removeAttribute('open')
    overlay.classList.remove('overlay')
    overlay.classList.remove('overlay__dialogs')
  }
})
