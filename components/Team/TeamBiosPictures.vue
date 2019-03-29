<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <div
        v-for="member of members"
        :key="member.id"
        class="d-flex mb-3 border-bottom pb-3 flex-wrap">
        <div class="col-md-4 col-12 mb-4 mb-md-0">
          <img
            :src="member.image_url"
            class="img-fluid rounded"
            alt="image">
        </div>
        <div class="col-md-8 col-12 align-self-center">
          <h5 class="mb-4">{{ member.title }}</h5>
          <p v-html="removeBeginningSquareBracketsTag(member.excerpt)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {removeBeginningSquareBracketsTag, truncate} from '../../modules/utils'

  export default {
    props: {
      members: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Members',
        truncate,
        removeBeginningSquareBracketsTag
      }
    },
  }
</script>

<style scoped>

</style>
