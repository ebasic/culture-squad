import Vue from 'vue'

// check if an element is in viewport (ex: used to trigger some actions if element enters/leaves viewport)
Vue.prototype.$isElementInViewport = (el) => {
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

// check if an element is contained in desired element (ex: used for checking clickoutside)
Vue.prototype.$childOf = (node, ancestor) => {
  let child = node
  while (child !== null) {
    if (child === ancestor) return true
    child = child.parentNode
  }
  return false
}
