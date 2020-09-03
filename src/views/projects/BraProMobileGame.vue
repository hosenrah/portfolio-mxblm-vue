<template>
  <main class="section-intro light" style="padding:0;">
  <section class="section-cover">
    <div class="video">
    <video src="https://wolffolins.cdn.prismic.io/wolffolins%2F94b08ad4-4a59-4483-986c-05ef36dda8ec_google_dots_loop_01.mp4" poster="https://images.prismic.io/wolffolins%2F66dd954c-131c-442d-bb47-61e58da8347a_google-dots.png?auto=compress,format"
    loop="loop" playsinline="" autoplay="autoplay"></video>
    </div>
  </section>
    <section class="section-text light">
      <h1 class="hl1">BraPro Mobile Game</h1>
    </section>
    <section class="section-text-left light">
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
    <section class="section-text light" style="padding-top: 0;">
      <img class="image"
            src="https://images.prismic.io/wolffolins/5582848f-7d23-43cf-86b2-bb3065242997_WO_Faber_08_ColophonCloseups.jpg"
          />
    </section>
    <section class="section-image light" style="padding-top: 0;">
      <img class="image"
            src="https://images.prismic.io/wolffolins/5582848f-7d23-43cf-86b2-bb3065242997_WO_Faber_08_ColophonCloseups.jpg"
          />
    </section>
    <section class="section-text-right light">
      <span class="square-left">
        <img class="image-left"
              src="https://images.prismic.io/wolffolins/b255cf28-fdc1-4848-8333-4ade26cba942_WO_Enreach_06_BusinessCards.jpg"
            />
      </span>
      <span class="text-right">
        <p class="copy">
        We are very happy with the new brand. It is vibrant,
        exciting and signifies the change we aimed to create.
        People are surprised how much the new design influences
        them and makes them happy. Wolff Olins did a great job for us.
        </p>
    </span>
    </section>
    <section class="section-next dark">
      <router-link class="project-next dark" :to="{ name: 'Project3' }">
        <div class="project-label">Next project
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: 'BraProMobileGame',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
</style>
