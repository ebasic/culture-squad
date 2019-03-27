<template>
  <footer class="footer container-fluid">
    <div class="container">
      <div class="row mb-4">
        <div class="col-sm-6 text-left">
          <b-nav>
            <b-nav-item to="/generic">FAQ</b-nav-item>
            <b-nav-item to="/generic">Support</b-nav-item>
            <b-nav-item to="/generic">Terms</b-nav-item>
            <b-nav-item to="/generic">Contact</b-nav-item>
          </b-nav>
        </div>
        <div class="col-sm-6 text-right">
          <social-icons-bar />
        </div>
      </div>
      <div class="row d-flex align-items-center">
        <div class="col-sm-6 text-left">
          &copy; Untitled. All rights reserved. Lorem ipsum dolor.
        </div>
        <div class="col-sm-6 text-right">
          12345 Somewhere Road Nashville, TN 00000(000) 000-0000
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialIconsBar from '../Shared/SocialIconsBar'

export default {
  components: {
    SocialIconsBar
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .footer{
    color: $white;
    background-image: linear-gradient(to top, rgba(48, 54, 57, 0.2), rgba(48, 54, 57, 0.2)), url("../../assets/banner.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-top: 7rem;
    padding-bottom: 7rem;

    /deep/ {
      .nav-item {
        &:first-of-type {
          .nav-link {
            padding-left: 0;
          }
        }

        &:last-of-type {
          .nav-link {
            border-right: 0;
          }
        }
      }

      .nav-link {
        color: $white;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 0.85rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        padding-right: 1rem;
        border-right: solid 1px $white;

        &:hover {
          color: $white;
        }

        &:active {
          color: $white;
        }
      }
    }
  }
</style>
