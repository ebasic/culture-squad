<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <div class="events-container d-flex flex-wrap">
        <div
          v-for="event of events"
          :key="event.id"
          class="col-lg-4 col-sm-12 mb-3 mr-3 ml-3 p-0">
          <div class="card bg-light m-1">
            <div class="card-header">
              <a :href="`/event/${event.slug}/${event.id}`">
                <h5>{{ event.title }}</h5>
              </a>
            </div>
            <div class="card-body">
              <img
                :src="event.image"
                class="img-fluid rounded mb-3"
                alt="image">
              <div><small><strong>Time:</strong> {{ event.time }}</small></div>
              <div><small v-html="event.location"/></div>
              <p class="card-text mt-3"> {{ truncate(event.content, 100, '...') }}</p>
              <a :href="`/event?slug=${event.slug}&eventId=${event.id}`"><small>Event details...</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {truncate} from '../../modules/utils'

  export default {
    props: {
      events: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Events',
        truncate
      }
    },
  }
</script>

<style lang="scss" scoped>
  .events-container {
  .card {
    height: 100% !important;
    width: 100% !important;
  }
  }
</style>
