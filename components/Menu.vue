<template>
  <nav id="menu">
    <ul class="links">
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/burning-now">
          Burning now
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/team">
          Team
        </nuxt-link>
      </li>
    </ul>
    <ul class="actions stacked">
      <li><a :href="edgerydersUrl" class="button fit">Log In</a></li>
    </ul>
    <a id="collapse-menu-btn" class="close" />
  </nav>
</template>

<script>
import config from '../config'

export default {
  data() {
    return {
      edgerydersUrl: config.edgerydersUrl
    }
  }
}
</script>
