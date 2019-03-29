<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
        <b-list-group>
          <b-list-group-item
            v-for="post of featuredContent"
            :key="post.id">
            <div class="d-md-flex w-100 justify-content-between">
              <a :href="`${edgerydersUrl}/t/${post.slug}/${post.id}`"><h5 class="mb-1">{{ post.title }}</h5></a>
              <small>{{ formatDate(post.created_at, 'lll') }}</small>
            </div>

            <p
              class="mb-1 mt-3 mt-md-0"
              v-html="truncate(post.excerpt, 100, '...')"/>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
  import {truncate, formatDate} from '../../modules/utils'

  export default {
    props: {
      featuredContent: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        edgerydersUrl: process.env.edgerydersUrl,
        sectionTitle: 'Featured content',
        truncate,
        formatDate
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list-group-item {
    margin-bottom: 1rem;
    padding-left: 0 !important;
    padding-right: 0 !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
  }
</style>
