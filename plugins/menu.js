import Vue from 'vue'

window.addEventListener('load', function () {
  // collapse menu on menu link-item click
  document.querySelectorAll('#menu li').forEach(function (event) {
    event.addEventListener('click', function () {
      const expanded = document.getElementById('menu').classList.contains('visible')

      if (expanded) {
        document.getElementById('menu').classList.remove('visible')
      }
    })
  })

  // collapse menu on menu 'X' button click
  document.getElementById('collapse-menu-btn').addEventListener('click', function () {
    const expanded = document.getElementById('menu').classList.contains('visible')

    if (expanded) {
      document.getElementById('menu').classList.remove('visible')
    }
  })

  // expand menu on header menu button click
  document.getElementById('expand-menu-btn').addEventListener('click', function () {
    const expanded = document.getElementById('menu').classList.contains('visible')

    if (!expanded) {
      document.getElementById('menu').classList.add('visible')
    }
  })

  // collapse menu on click outside menu area
  document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu')
    const expandMenuBtn = document.getElementById('expand-menu-btn')

    if (event.target !== expandMenuBtn && !Vue.prototype.$childOf(event.target, menu)) {
      document.getElementById('menu').classList.remove('visible')
    }
  })
})
