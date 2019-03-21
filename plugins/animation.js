import Vue from 'vue'

Vue.prototype.$startBannerAnimation = () => {
  window.setTimeout(function () {
    document.querySelector('body').classList.remove('is-preload')
  }, 100)
}

Vue.prototype.$startHeaderAnimation = () => {
  const banner = document.getElementById('banner')
  const header = document.getElementById('header')

  const isElementInViewport = (el) => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight
    }

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  }

  window.addEventListener('scroll', function () {
    if (isElementInViewport(banner)) {
      header.classList.add('alt')
      header.classList.remove('reveal')
    } else {
      header.classList.add('reveal')
      header.classList.remove('alt')
    }
  })
}
