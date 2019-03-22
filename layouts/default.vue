<template>
  <div>
    <website-header />
    <website-menu />
    <nuxt />
    <website-footer />
  </div>
</template>

<script>
import WebsiteHeader from '../components/Header'
import WebsiteMenu from '../components/Menu'
import WebsiteFooter from '../components/Footer'

export default {
  components: {
    WebsiteHeader,
    WebsiteMenu,
    WebsiteFooter
  },
  head: {
    bodyAttrs: {
      class: 'is-preload'
    }
  }
}
</script>
