<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
        <div
          v-for="work of featuredWork"
          :key="work.id"
          class="d-flex mb-3 border-bottom pb-3">
          <div class="col-6">
            <img
              :src="work.image_url"
              class="img-fluid rounded"
              alt="image">
          </div>
          <div class="col-6">
            <h5 class="mb-4 featured-content-post-title">{{ work.title }}</h5>
            <p v-html="removeSquareBracketsTag(work.excerpt)"/>
            <h6><strong class="border-bottom">Latest post</strong></h6>
            <p><small>Created at: {{ formatDate(work.latestPost.created_at, 'lll') }}</small></p>
            <a :href="`${edgerydersUrl}/t/${work.latestPost.topic_slug}/${work.latestPost.topic_id}`"><small>Read more...</small></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {removeSquareBracketsTag, attachLatestFeatureWorkPost, formatDate, truncate} from '../../modules/utils'

  export default {
    props: {
      featuredWork: {
        type: Array,
        default: function () {
          return [];
        }
      },
      featuredWorkPosts: {
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
    },
    created() {
      this.featuredWork = attachLatestFeatureWorkPost(this.featuredWork, this.featuredWorkPosts, 'updated_at');
    }
  }
</script>

<style lang=scss scoped>

</style>
