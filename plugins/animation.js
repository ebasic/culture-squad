import Vue from 'vue'

// starts animation on Home page banner (after the page is loaded)
Vue.prototype.$startBannerAnimation = () => {
  window.setTimeout(function () {
    document.querySelector('body').classList.remove('is-preload')
  }, 100)
}

// triggers header-bar (header text + menu icon) animation on Home page when user scrolls down and banner leaves the viewport
Vue.prototype.$startHeaderAnimation = () => {
  const banner = document.getElementById('banner')
  const header = document.getElementById('header')

  window.addEventListener('scroll', function () {
    if (Vue.prototype.$isElementInViewport(banner)) {
      header.classList.add('alt')
      header.classList.remove('reveal')
    } else {
      header.classList.add('reveal')
      header.classList.remove('alt')
    }
  })
}
