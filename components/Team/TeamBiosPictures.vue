<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
        <div
          v-for="member of members"
          :key="member.id"
          class="d-flex mb-3 border-bottom pb-3">
          <div class="col-4">
            <img
              :src="member.image_url"
              class="img-fluid rounded"
              alt="image">
          </div>
          <div class="col-8 align-self-center">
            <h5 class="mb-4">{{ member.title }}</h5>
            <p v-html="removeBeginningSquareBracketsTag(member.excerpt)"/>
          </div>
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
