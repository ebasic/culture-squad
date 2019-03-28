<template>
  <div>
    <hero>
      <h2>{{ pageHeaderTitle }}</h2>
      <p>Lorem justo in tellus aenean lacinia felis.</p>
    </hero>

    <!--Text about team section-->
    <white-section>
      <team-about
        :title="aboutTeamSectionTitle"
        :description-html="aboutTeamSectionDescription"/>
    </white-section>

    <!--Team bios and pictures section-->
    <grey-section>
      <team-bios-pictures :members="members"/>
    </grey-section>

    <!--Logos & partners section-->
    <white-section>
      <team-about
        :title="logosPartnersSectionTitle"
        :description-html="logosPartnersSectionContent"/>
    </white-section>
  </div>
</template>

<script>
  import Hero from '../components/Layout/Hero'
  import WhiteSection from '../components/Shared/WhiteSection'
  import GreySection from '../components/Shared/GreySection'
  import TeamAbout from '../components/Team/TeamAbout'
  import TeamBiosPictures from '../components/Team/TeamBiosPictures'
  import TeamLogosPartners from '../components/Team/TeamLogosPartners'
  import BurningNowContent from '../components/BurningNow/BurningNowContent'

  export default {
    layout: 'default',
    components: {
      Hero,
      WhiteSection,
      GreySection,
      TeamAbout,
      TeamBiosPictures,
      TeamLogosPartners,
      BurningNowContent
    },
    head: {
      title: 'Team',
      titleTemplate: '%s | WIP'
    },
    data() {
      return {
        pageHeaderTitle: 'Team'
      }
    },
    async asyncData({ $axios }) {
      // Text about team
      const aboutTeamSection = await $axios.get('https://edgeryders.eu/t/team-site-description/9603');
      const aboutTeamSectionTitle = aboutTeamSection.data.title;
      const aboutTeamSectionDescription = aboutTeamSection.data.post_stream.posts[0].cooked;

      // Teams bios and pictures from edgeryders.eu
      const teamBiosPicturesSection = await $axios.get('https://edgeryders.eu/tags/webcontent-culturesquad-member');
      const members = teamBiosPicturesSection.data.topic_list.topics;

      // Logos of Edgeryders and partners
      const logosPartnersSection = await $axios.get('https://edgeryders.eu/t/team-site-partners/9604');
      const logosPartnersSectionTitle = logosPartnersSection.data.title;
      const logosPartnersSectionContent = logosPartnersSection.data.post_stream.posts[0].cooked;

      return {
        aboutTeamSectionTitle,
        aboutTeamSectionDescription,
        members,
        logosPartnersSectionTitle,
        logosPartnersSectionContent
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

