// expand / collapse menu

window.addEventListener('load', function () {
  document.querySelectorAll('#menu li').forEach(function (event) {
    event.addEventListener('click', function () {
      const expanded = document.getElementById('menu').classList.contains('visible')

      if (expanded) {
        document.getElementById('menu').classList.remove('visible')
      }
    })
  })

  document.getElementById('collapse-menu-btn').addEventListener('click', function () {
    const expanded = document.getElementById('menu').classList.contains('visible')

    if (expanded) {
      document.getElementById('menu').classList.remove('visible')
    }
  })

  document.getElementById('expand-menu-btn').addEventListener('click', function () {
    const expanded = document.getElementById('menu').classList.contains('visible')

    if (!expanded) {
      document.getElementById('menu').classList.add('visible')
    }
  })
})
