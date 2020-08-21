<template>
  <main class="section-intro">
      <section class="section-text">
        <h1 class="hl1">Product Designer from Germany</h1>
      </section>
      <section class="section-text" style="padding-top: 0;">
        <p class="copy">
          Hello dear world wide web. 👋🏻<br>
          I'm Max Blum - I love to design digital products and brands. Mostly simple, with a clear
          hierarchy and with a little touch of (e)motion.
          <br><br>I offer 10 years of professional experience in the design of
          user interfaces for digital applications and campaigns.
          I am conceptually strong and responsive in my mind. My passion for
          outstanding design drives me, photography and typography <a class="link" target="_blank" href="http://mxblm.tumblr.com">inspire</a> me.
        </p>
      </section>
      <section class="section-image">
        <img class="image"
          src="../assets/images/me-full.jpg"/>
      </section>
    <section class="section-text-left dark">
      <span class="text-left">
        <h2 class="hl2">My history</h2>
        <p class="copy">
          <s>Freelance Creative</s><br>
          <s>Art Director @
          <a class="link" target="_blank" href="http://www.werbewelt.de">WERBEWELT</a></s><br>
          <s>Senior Art Director @
          <a class="link" target="_blank" href="http://www.jvm.com">Jung von Matt</a></s><br>
          Senior Product Designer @
          <a class="link" target="_blank" href="http://www.mercedes-benz.io">MB.io</a>
        </p>
      </span>
      <span class="text-left">
        <h2 class="hl2">My capabilities</h2>
        <p class="copy">
        Art Direction<br>
        UI/UX Design<br>
        Animation Design<br>
        Creative concepts
        </p>
      </span>
      <span class="text-left">
        <h2 class="hl2">My awards</h2>
        <p class="copy">
        Award 1<br>
        Award 2<br>
        Award 3<br>
        Award 4
        </p>
      </span>
      </section>
      <section class="section-next red">
      <router-link class="project-next red" :to="{ name: 'Work' }">
        <div class="project-label">Discover my work
        </div>
      </router-link>
    </section>
    </main>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
</style>
