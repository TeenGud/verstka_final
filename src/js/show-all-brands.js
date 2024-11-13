let list = document.querySelector('.brand-links__list');
let show_or_hide_button = document.querySelector('.brand-links__list + .button-show .button-show__button');
show_or_hide_button.textContent = 'Показать всё'
let showed = false;

show_or_hide_button.addEventListener('click', function () {
  if (!showed) {
      show_or_hide_button.textContent = "Скрыть";
      show_or_hide_button.classList.remove('button-show__button--show');
      show_or_hide_button.classList.add('button-show__button--hide');

      list.classList.add('brand-links__list--height-auto')
      showed = true;
  } else {
      show_or_hide_button.textContent = "Показать всё";
      show_or_hide_button.classList.remove('button-show__button--hide');
      show_or_hide_button.classList.add('button-show__button--show');

      list.classList.remove('brand-links__list--height-auto')
      showed = false;
  }
});
