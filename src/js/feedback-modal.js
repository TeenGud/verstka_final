const footerAsideFeedbackButton = document.querySelector(
  '.footer-aside__feedback'
)
const feedback = document.querySelector('.feedback')
const closeButton = document.querySelector('.form__button .burger-quit')
const overlay = document.querySelector('.feedback-dialog-overlay')

footerAsideFeedbackButton.addEventListener('click', function () {
  feedback.setAttribute('open', true)
  overlay.classList.add('overlay')
  overlay.classList.add('overlay__dialogs')
})

closeButton.addEventListener('click', function (event) {
  feedback.removeAttribute('open')
  overlay.classList.remove('overlay')
  overlay.classList.remove('overlay__dialogs')
  event.preventDefault()
})

document.addEventListener('click', function (event) {
  if (event.target.classList[1] === 'overlay') {
    feedback.removeAttribute('open')
    overlay.classList.remove('overlay')
    overlay.classList.remove('overlay__dialogs')
  }
})
