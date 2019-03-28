<template>
  <div>
    <hero>
      <h2>{{ pageHeaderTitle }}</h2>
      <p>Lorem justo in tellus aenean lacinia felis.</p>
    </hero>

    <!--Meetup dates homepage section-->
    <white-section>
      <burning-now-content :content-html="burningNowHtml"/>
    </white-section>
  </div>
</template>

<script>
import Hero from '../components/Layout/Hero'
import WhiteSection from '../components/Shared/WhiteSection'
import BurningNowContent from '../components/BurningNow/BurningNowContent'
import {getLatestByDate} from '../modules/utils'

export default {
  layout: 'default',
  components: {
    Hero,
    WhiteSection,
    BurningNowContent
  },
  head: {
      title: 'Burning now',
      titleTemplate: '%s | WIP'
  },
  data() {
    return {
      pageHeaderTitle: 'Burning now'
    }
  },
  async asyncData({ $axios }) {
    // Burning now page @ Text + photos
    const burningNow = await $axios.get('https://edgeryders.eu/tags/webcontent-culturessquad-burning');
    const lastTopic = getLatestByDate(burningNow.data.topic_list.topics, 'created_at');
    const burningNowContent = await $axios.get(`https://edgeryders.eu/t/${lastTopic.slug}/${lastTopic.id}`);
    const burningNowPost = getLatestByDate(burningNowContent.data.post_stream.posts, 'updated_at');
    const burningNowHtml = burningNowPost.cooked;

    return {
      burningNowHtml
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

