import { initNavObserver } from './animation/intersectionObservers.js'
import isMobileDevice from './helpers/checkMobile.js'
import Swiper from '/node_modules/swiper/swiper-bundle.js'
import formValidation from './helpers/formValidation.js'

new Swiper('.swiperA', {
  pagination: {
    el: '.paginationA',
    clickable: true,
    type: 'bullets'
  },
  spaceBetween: 25,
  speed: 800,
  navigation: {
    nextEl: '.nextA',
    prevEl: '.prevA'
  }
})

new Swiper('.swiperB', {
  pagination: {
    el: '.paginationB',
    clickable: true,
    type: 'bullets'
  },
  spaceBetween: 25,
  speed: 800,
  navigation: {
    nextEl: '.nextB',
    prevEl: '.prevB'
  }
})

new Swiper('.swiperC', {
  pagination: {
    el: '.paginationC',
    clickable: true,
    type: 'bullets'
  },
  spaceBetween: 25,
  speed: 800,
  navigation: {
    nextEl: '.nextC',
    prevEl: '.prevC'
  }
})

new Swiper('.swiperD', {
  slidesPerView: 3,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 70
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    100: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.paginationD',
    clickable: true,
    dynamicBullets: true
  },
  speed: 800,
  navigation: {
    nextEl: '.nextD',
    prevEl: '.prevD'
  }
})

const swiperExtraVisualNotes = new Swiper('.swiperE', {
  allowTouchMove: false,
  pagination: {
    el: '.paginationE',
    clickable: true,
    type: 'bullets'
  },
  spaceBetween: 25,
  speed: 800,
  navigation: {
    nextEl: '.nextE',
    prevEl: '.prevE'
  }
})

emailjs.init('v0KTQg5IjAXxIAaoU')
const formBody = document.querySelector('#form')
const formInputs = formBody.elements
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()

  if (!formValidation(formBody)) return

  const serviceID = 'default_service'
  const templateID = 'template_4jq3g9g'
  document.querySelector('.formSpinnerOverlay').classList.add('showFormSpinner')
  emailjs
    .sendForm(serviceID, templateID, '.formBlockBody')
    .then((response) => {
      if (response.status === 200) {
        document
          .querySelector('.sk-form-cube-grid')
          .classList.add('hideFormSpinner')
        document
          .querySelector('.formSuccessBox')
          .classList.add('showFormSuccessBox')
        for (let i = 0; i < formInputs.length; i++) {
          if (
            formInputs[i].nodeName === 'INPUT' &&
            formInputs[i].type === 'text'
          ) {
            formInputs[i].classList.remove('validationSuccess')
            formInputs[i].value = ''
          }
        }
        setTimeout(() => {
          document
            .querySelector('.sk-form-cube-grid')
            .classList.remove('hideFormSpinner')
          document
            .querySelector('.formSuccessBox')
            .classList.remove('showFormSuccessBox')
          document
            .querySelector('.formSpinnerOverlay')
            .classList.remove('showFormSpinner')
        }, 2000)
      } else {
        document
          .querySelector('.formSpinnerOverlay')
          .classList.remove('showFormSpinner')
      }
    })
    .catch((e) => {
      console.dir(`Status code: ${e.status}`)
      document
        .querySelector('.sk-form-cube-grid')
        .classList.add('hideFormSpinner')
      document.querySelector('.formErrorBox').classList.add('showFormErrorBox')
      document.querySelector(
        '.formErrorText'
      ).innerText = `Произошла ошибка, код статуса: ${e.status}`
      setTimeout(() => {
        document
          .querySelector('.sk-form-cube-grid')
          .classList.remove('hideFormSpinner')
        document
          .querySelector('.formErrorBox')
          .classList.remove('showFormErrorBox')
        document
          .querySelector('.formSpinnerOverlay')
          .classList.remove('showFormSpinner')
      }, 5000)
    })
})

const servicesGalleryFrame = document.querySelector('.servicesGalleryFrame')
const overlayBody = document.querySelector('.servicesOverlay')
const overlayCloseBtn = document.querySelector('.overlayCloseBtn')
overlayBody.addEventListener('click', function (e) {
  if (e.target === overlayCloseBtn || e.target === overlayBody) {
    overlayBody.classList.remove('showServicesOverlay')
    document.querySelector('body').classList.remove('blockBodyScroll')
  }
})

servicesGalleryFrame.addEventListener('click', function (e) {
  if (e.target.dataset.slide) {
    document.querySelector('body').classList.add('blockBodyScroll')
    overlayBody.classList.add('showServicesOverlay')
    swiperExtraVisualNotes.slideTo(Number(e.target.dataset.slide), 100, false)
  }
})

if (isMobileDevice()) {
  document.querySelector('.spinnerBackground').remove()
  document.body.tabIndex = 0 // fix for IOS hover effect on tap
} else {
  const content = document.querySelector('.loadingContentWrapper')
  const spinner = document.querySelector('.spinnerBackground')
  const body = document.querySelector('body')

  spinner.style.display = 'flex'
  body.classList.add('blockBodyScroll')
  content.classList.add('hideContentWhileLoading')

  function contentReady() {
    spinner.style.display = 'none'
    body.classList.remove('blockBodyScroll')
    content.classList.remove('hideContentWhileLoading')
    content.classList.add('showContentWhenLoaded')

    initNavObserver()
  }
  window.onload = contentReady
}
