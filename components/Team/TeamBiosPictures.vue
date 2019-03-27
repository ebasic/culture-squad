<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
        <div class="cards-container d-flex">
          <b-card
            v-for="member of members"
            :key="member.id"
            :title="member.title"
            :img-src="member.image_url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem; margin: 0 1rem 1rem 0"
            class="mb-2"
          >
            <b-card-text
              :id="member.id"
              class="b-card-text"
              v-html="truncate(removeBeginningSquareBracketsTag(member.excerpt), 50, '...')" />
          </b-card>
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
