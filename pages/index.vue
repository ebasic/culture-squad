<template>
  <div>
    <hero
      id="heroElement"
      :extend="true"
      class="hero">
      <div class="container">
        <div class="row mx-auto py-3 d-flex align-items-center hero__container">
          <div class="col-sm-12 col-lg-8 text-left hero__text">
            <div class="hero__text__inner">
              <h1> {{ pageHeaderTitle }} </h1>
              <p> Amet tincidunt arcu suspendisse consequat </p>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 hero__buttons pl-lg-5">
            <div class="hero__buttons__inner">
              <b-button
                class="w-100 mb-4"
                variant="primary"
                href="/burning-now"
                size="lg"
                type="link">
                Burning now
              </b-button>

              <b-button
                class="w-100"
                variant="outline-light"
                href="/team"
                size="lg"
                type="link">
                Team
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </hero>

    <!--First homepage section-->
    <white-section>
      <home-first-section
        :title="firstSectionTitle"
        :description-html="firstSectionParagraphDescription"/>
      <google-map />
    </white-section>

    <!--Team homepage section-->
    <grey-section>
      <home-team-section
        :title="teamSectionTitle"
        :description-html="teamSectionParagraphDescription"/>
    </grey-section>

    <!--Meetup dates homepage section-->
    <white-section>
      <home-events-section :events="events"/>
    </white-section>

    <!--Featured work homepage section-->
    <grey-section>
      <home-featured-work-section
        :featured-work="featuredWork" />
    </grey-section>

    <!--Featured content homepage section-->
    <white-section>
      <home-featured-content-section :featured-content="featuredContent"/>
    </white-section>

    <!--Join us homepage section-->
    <grey-section>
      <home-join-us-section
        :title="joinUsSectionTitle"
        :description-html="joinUsSectionParagraphDescription"/>
    </grey-section>
  </div>
</template>

<script>
import Hero from '../components/Layout/Hero'
import GoogleMap from '../components/Shared/GoogleMap'
import SocialIconsBar from '../components/Shared/SocialIconsBar'
import WhiteSection from '../components/Shared/WhiteSection'
import GreySection from '../components/Shared/GreySection'
import HomeFirstSection from '../components/Home/HomeFirstSection'
import HomeTeamSection from '../components/Home/HomeTeamSection'
import HomeEventsSection from '../components/Home/HomeEventsSection'
import HomeFeaturedWorkSection from "../components/Home/HomeFeaturedWorkSection";
import HomeFeaturedContentSection from "../components/Home/HomeFeaturedContentSection";
import HomeJoinUsSection from "../components/Home/HomeJoinUsSection";
import {parseEvents} from '../modules/utils'

export default {
  layout: 'home',
  components: {
    Hero,
    GoogleMap,
    SocialIconsBar,
    WhiteSection,
    GreySection,
    HomeFirstSection,
    HomeTeamSection,
    HomeEventsSection,
    HomeFeaturedWorkSection,
    HomeFeaturedContentSection,
    HomeJoinUsSection
  },
  head: {
    title: 'Home',
    titleTemplate: '%s | WIP'
  },
  data() {
    return {
      pageHeaderTitle: 'Home'
    }
  },
  async asyncData({ $axios }) {
    // Title and 1 paragraph description
    const firstSection = await $axios.get('https://edgeryders.eu/t/edgeryders-culture-squad/9591');
    const firstSectionTitle = firstSection.data.title;
    const firstSectionParagraphDescription = firstSection.data.post_stream.posts[0].cooked;

    // Team 1 paragraph description + photos
    const teamSection = await $axios.get('https://edgeryders.eu/t/about-us/9592/2');
    const teamSectionTitle = teamSection.data.title;
    const teamSectionParagraphDescription = teamSection.data.post_stream.posts[0].cooked;

    // Meetup dates
    const meetupDatesSection = await $axios.get('https://edgeryders.eu/tags/webcontent-culturesquad-event');
    const events = parseEvents(meetupDatesSection.data.topic_list.topics, 'excerpt');

    // Featured work
    const featuredWorkSection = await $axios.get('https://edgeryders.eu/tags/webcontent-culturesquad-featured');
    const featuredWork = featuredWorkSection.data.topic_list.topics;

    // Featured content
    const featuredContentSection = await $axios.get('https://edgeryders.eu/tags/webcontent-culturesquad-post');
    const featuredContent = featuredContentSection.data.topic_list.topics;

    // Join us
    const joinUsSection = await $axios.get('https://edgeryders.eu/t/join-us/9597');
    const joinUsSectionTitle = joinUsSection.data.title;
    const joinUsSectionParagraphDescription = joinUsSection.data.post_stream.posts[0].cooked;

    return {
      firstSectionTitle,
      firstSectionParagraphDescription,
      teamSectionTitle,
      teamSectionParagraphDescription,
      events,
      featuredWork,
      featuredContent,
      joinUsSectionTitle,
      joinUsSectionParagraphDescription
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    &__container {
      max-width: 920px;
    }

    @keyframes pushUp {
      0% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes pullDown {
      0% {
        transform: translateY(-30px);
      }
      100% {
        transform: translateY(0);
      }
    }

    &__text {
      &__inner {
        animation-name: pullDown;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
      }
    }

    &__buttons {
      position: relative;

      @media only screen and (max-width: 990px) {
        border-left: none;
        border-top: 1px solid #fff;
        margin-top: 20px;
        padding-top: 30px;
      }

      @media only screen and (min-width: 990px) {
        border-left: 1px solid #fff;
      }

      &__inner {
        animation-name: pushUp;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
      }
    }
  }

  #home-europe-map {
    height: 300px;
    width: 100%;
  }
</style>

