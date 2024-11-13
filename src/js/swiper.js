var pricesSlider = null
var brandsSlider = null
var techniqueSlider = null
var mediaQuerySize = 650
var mediaQueryAdditional = 500

let brandLinks = document.querySelector('.brand-links')
let typesOfTechnique = document.querySelector('.types-of-technique')
let prices = document.querySelector('.prices')
let brandLinksList = brandLinks.querySelector('.brand-links__list')
let typesOfTechniqueList = typesOfTechnique.querySelector('.types-of-technique__list')
let pricesWrapper = prices.querySelector('.prices__wrapper')

slidersCheck();

function pricesSliderInit() {
  if (!pricesSlider) {
    pricesSlider = new Swiper('.prices.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.prices__pagination.swiper-pagination',
        clickable: true
      }
    })
  }
}

function brandsAndTechniqueSliderInit() {
  if (!brandsSlider && !techniqueSlider) {
    brandsSlider = new Swiper('.brand-links.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    techniqueSlider = new Swiper('.types-of-technique.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

function pricesSliderDestroy() {
  if (pricesSlider) {
    pricesSlider.destroy()
    pricesSlider = null
  }
}
function brandsAndTechniqueSliderDestroy() {
  if (brandsSlider && techniqueSlider) {
    brandsSlider.destroy()
    techniqueSlider.destroy()
    brandsSlider = null
    techniqueSlider = null
  }
}

function slidersCheck() {
  if (window.innerWidth <= mediaQuerySize) {
    prices.classList.add('swiper')
    pricesWrapper.classList.add('swiper-wrapper')
    pricesSliderInit()
  } else {
    prices.classList.remove('swiper')
    pricesWrapper.classList.remove('swiper-wrapper')
    pricesSliderDestroy()
  }
  if (window.innerWidth <= mediaQueryAdditional) {
    brandLinks.classList.add('swiper')
    typesOfTechnique.classList.add('swiper')
    brandLinksList.classList.add('swiper-wrapper')
    typesOfTechniqueList.classList.add('swiper-wrapper')
    brandsAndTechniqueSliderInit()
  } else {
    brandLinks.classList.remove('swiper')
    typesOfTechnique.classList.remove('swiper')
    brandLinksList.classList.remove('swiper-wrapper')
    typesOfTechniqueList.classList.remove('swiper-wrapper')
    brandsAndTechniqueSliderDestroy()
  }
}

window.addEventListener('resize', function () {
  slidersCheck()
})