let text = document.querySelector('.description__text--additional-third');
let readMoreButton = document.querySelector('.description__button .button-show__button');
readMoreButton.textContent = 'Читать далее'
let showed = false;

readMoreButton.addEventListener('click', function () {
  if (!showed) {
      readMoreButton.textContent = "Скрыть";
      readMoreButton.classList.remove('button-show__button--show');
      readMoreButton.classList.add('button-show__button--hide');

      text.classList.remove('disable')
      showed = true;
  } else {
      readMoreButton.textContent = "Читать далее";
      readMoreButton.classList.remove('button-show__button--hide');
      readMoreButton.classList.add('button-show__button--show');

      text.classList.add('disable')
      showed = false;
  }
});
