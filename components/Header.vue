<template>
  <header id="header" style="" class="alt">
    <h1><a href="/">{{ headerText }}</a></h1>
    <a id="expand-menu-btn" href="#menu">Menu</a>
  </header>
</template>

<script>
import config from '../config'

export default {
  data() {
    return {
      headerText: config.siteName
    }
  }
}
</script>

<style lang="css" scoped>
  h1 a:hover {
    color: inherit;
    text-underline: none;
  }
</style>
