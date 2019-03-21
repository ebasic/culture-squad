<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <div class="inner">
        <div class="content">
          <h2>HOME</h2>
          <p>Amet tincidunt arcu suspendisse consequat</p>
        </div>
        <ul class="actions stacked">
          <li><a href="#" class="button primary major">Get Started</a></li>
          <li><a href="#" class="button major">More Info</a></li>
        </ul>
      </div>
    </section>

    <!-- One -->
    <section id="one" class="wrapper style1 split">
      <div class="inner">
        <div class="content">
          <h2>
            Lorem ipsum accumsan nisl feugiat<br>
            sed consequat adipiscing
          </h2>
          <p>Amet lorem vivamus viverra, quis semper consequat, sem nibh mattis arcu, dolore porttitor lorem justo in tellus. Aenean lacinia felis et dui viverra, nec accumsan et quam ultricies. Phasellus sapien lorem, rhoncus ultricies.</p>
          <ul class="actions">
            <li><a href="#" class="button">Our Story</a></li>
          </ul>
        </div>
        <div class="image-circles">
          <div class="images">
            <span class="image"><img src="../assets/theme/images/pic01.jpg" alt=""></span>
            <span class="image"><img src="../assets/theme/images/pic02.jpg" alt=""></span>
          </div>
          <div class="images">
            <span class="image"><img src="../assets/theme/images/pic03.jpg" alt=""></span>
            <span class="image"><img src="../assets/theme/images/pic04.jpg" alt=""></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Two -->
    <section id="two" class="wrapper style2">
      <div class="inner">
        <header class="major">
          <h2>Gravida nunc accumsan</h2>
          <p>
            Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia<br>
            interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.
          </p>
        </header>
        <div class="features">
          <section>
            <span class="icon major fa-tag" />
            <h3>Quam adipiscing</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
          <section>
            <span class="icon major fa-camera-retro" />
            <h3>Semper accumsan</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
          <section>
            <span class="icon major fa-cloud" />
            <h3>Ipsum lorem magna</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
          <section>
            <span class="icon major fa-cube" />
            <h3>Tempus sed mattis</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
          <section>
            <span class="icon major fa-file-text" />
            <h3>Odio fermentum</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
          <section>
            <span class="icon major fa-plane" />
            <h3>Risus et interdum</h3>
            <p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
          </section>
        </div>
        <footer class="major">
          <ul class="actions special">
            <li><a href="#" class="button major">More Features</a></li>
          </ul>
        </footer>
      </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper style1">
      <div class="inner">
        <div class="spotlights">
          <section>
            <span class="image"><img src="../assets/theme/images/pic05.jpg" alt=""></span>
            <div class="content">
              <h2>Convallis integer iaculis</h2>
              <p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
            </div>
          </section>
          <section>
            <span class="image"><img src="../assets/theme/images/pic06.jpg" alt=""></span>
            <div class="content">
              <h2>Ultrices augue faucibus</h2>
              <p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
            </div>
          </section>
          <section>
            <span class="image"><img src="../assets/theme/images/pic07.jpg" alt=""></span>
            <div class="content">
              <h2>Integer sed sodales</h2>
              <p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- Four -->
    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header>
          <h2>Sed vitae massa curabitur</h2>
          <p>
            Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia<br>
            interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.
          </p>
        </header>
        <ul class="actions special">
          <li><a href="#" class="button primary major">Get Started</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$startBannerAnimation()
    this.$startHeaderAnimation()
  }
}
</script>
