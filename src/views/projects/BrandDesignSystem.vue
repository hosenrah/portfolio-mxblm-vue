<template>
  <main class="section-top dark" style="padding:0;">
  <section class="section-cover">
  <div class="video">
    <video src="/assets/videos/browseLike.mp4" loop="loop"
    playsinline autoplay="autoplay"></video>
  </div>
  </section>
    <section class="section-text dark">
      <h1 class="hl1">Design System Evolution</h1>
    </section>
    <section class="section-text-left dark">
      <span class="text-left">
        <h2 class="hl2">Task</h2>
        <p class="copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      </span>
      <span class="text-right">
        <h2 class="hl2">Role</h2>
        <p class="copy">
          Lead Product Designer
        </p>
      </span>
      <span class="text-right">
        <h2 class="hl2">Year</h2>
        <p class="copy">
          2019
        </p>
      </span>
      </section>
    <section class="section-text dark" style="padding-top: 0;">
      <img class="image"
            src="https://images.prismic.io/wolffolins/5582848f-7d23-43cf-86b2-bb3065242997_WO_Faber_08_ColophonCloseups.jpg"
          />
    </section>
    <section class="section-text-left dark" style="padding-top: 0;">
      <span class="text-left">
      <p class="quote">
        “We are very happy with the new brand. It is vibrant,
        exciting and signifies the change we aimed to create.
        People are surprised how much the new design influences
        them and makes them happy. Wolff Olins did a great job for us.”
      </p>
    </span>
    <span class="square-right">
      <img class="image-right"
            src="https://images.prismic.io/wolffolins/b255cf28-fdc1-4848-8333-4ade26cba942_WO_Enreach_06_BusinessCards.jpg"
          />
    </span>
    </section>
    <section class="section-text-right dark">
      <span class="square-left">
        <img class="image-left"
              src="https://images.prismic.io/wolffolins/b255cf28-fdc1-4848-8333-4ade26cba942_WO_Enreach_06_BusinessCards.jpg"
            />
      </span>
      <span class="text-right">
        <h3 class="hl3" style="margin-bottom: 0;">Max Blum</h3>
        <p class="copy">
        Product Designer
        </p>
    </span>
    </section>
    <section class="section-next light">
      <router-link class="project-next light" :to="{ name: 'Project2' }">
        <div class="project-label">Next project
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: 'BrandDesignSystem',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
</style>
