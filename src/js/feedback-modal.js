const footerAsideFeedbackButton = document.querySelector(
  '.footer-aside__feedback'
)
const feedback = document.querySelector('.feedback')
const closeButton = document.querySelector('.form__button .burger-quit')
const overlay = document.querySelector('.feedback-dialog-overlay')
const body = document.querySelector('body')

footerAsideFeedbackButton.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    body.style.position = 'relative'
  } else {
    feedback.style.position = 'fixed'
  }
  body.style.height = '100vh'
  body.style.overflow = 'hidden'
  feedback.setAttribute('open', true)
  overlay.classList.add('overlay')
  overlay.classList.add('overlay__dialogs')
})

closeButton.addEventListener('click', function (event) {
  feedback.removeAttribute('open')
  overlay.classList.remove('overlay')
  overlay.classList.remove('overlay__dialogs')
  if (window.innerWidth <= 1120) {
    body.style.position = 'fixed'
  }
  body.style.height = 'auto'
  body.style.overflow = 'visible'
  event.preventDefault()
})

document.addEventListener('click', function (event) {
  if (event.target.classList[1] === 'overlay') {
    feedback.removeAttribute('open')
    overlay.classList.remove('overlay')
    overlay.classList.remove('overlay__dialogs')
    if (window.innerWidth <= 1120) {
      body.style.position = 'fixed'
    }
    body.style.height = 'auto'
    body.style.overflow = 'visible'
  }
})
