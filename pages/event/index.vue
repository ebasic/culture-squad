<template>
  <div>
    <hero>
      <h2>{{ pageHeaderTitle }}</h2>
      <p>Lorem justo in tellus aenean lacinia felis.</p>
    </hero>

    <!--Event details-->
    <white-section>
      <event-details :event="event"/>
    </white-section>
  </div>
</template>

<script>
  import Hero from '../../components/Layout/Hero'
  import WhiteSection from '../../components/Shared/WhiteSection'
  import EventDetails from '../../components/Event/EventDetails'

  export default {
    layout: 'default',
    components: {
      Hero,
      WhiteSection,
      EventDetails
    },
    data () {
      return {
        pageHeaderTitle: 'Event details'
      }
    },
    head: {
      title: 'Event details',
      titleTemplate: '%s | WIP'
    },
    async asyncData(context) {
      const eventDetails = await context.$axios.get(`https://edgeryders.eu/t/${context.query.slug}/${context.query.eventId}`);
      const event = eventDetails.data.post_stream.posts[0];
      return {
        event
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

