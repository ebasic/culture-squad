<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <h5 class="mb-5">{{ sectionTitle }}</h5>

        <div class="events-container d-flex">
          <div
            v-for="event of events"
            :key="event.id"
            class="col-4 p-0 m-1">
            <div class="card bg-light m-1">
              <div class="card-header">{{ event.title }}</div>
              <div class="card-body">
                <div><small><strong>Time:</strong> {{ event.time }}</small></div>
                <div><small v-html="event.location"/></div>
                <p class="card-text mt-3"> {{ truncate(event.content, 100, '...') }}</p>
              </div>
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
