<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <div
        v-for="work of featuredWork"
        :key="work.id"
        class="d-flex mb-lg-3 mb-sm-5 border-bottom pb-3 flex-wrap">
        <div class="col-lg-6 col-sm-12 mb-3">
          <img
            :src="work.image_url"
            class="img-fluid rounded"
            alt="image">
        </div>
        <div class="col-lg-6 col-sm-12">
          <h5 class="mb-4">{{ work.title }}</h5>
          <p v-html="removeSquareBracketsTag(work.excerpt)"/>
          <a :href="`${edgerydersUrl}/t/${work.slug}/${work.id}`"><small>Read more...</small></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {removeSquareBracketsTag, formatDate, truncate} from '../../modules/utils'

  export default {
    props: {
      featuredWork: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Featured work',
        edgerydersUrl: process.env.edgerydersUrl,
        removeSquareBracketsTag,
        formatDate,
        truncate
      }
    }
  }
</script>

<style lang=scss scoped>

</style>
