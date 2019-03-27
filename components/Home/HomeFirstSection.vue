<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <h5 class="mb-5">{{ title }}</h5>
          <b-button
            class="h-25"
            variant="primary"
            href="/burning-now"
            size="sm"
            type="button">
            Burning now
          </b-button>
        </div>
        <div v-html="descriptionHtml" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        title: {
          type: String,
          default: ''
        },
        descriptionHtml: {
          type: String,
          default: '<template />'
        }
      }
    }
</script>

<style scoped>

</style>
