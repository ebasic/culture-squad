<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <div v-html="event.cooked" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      event: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
  }
</script>

<style scoped>

</style>
