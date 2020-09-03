<template>
  <main class="section-home">
    <div class="section-home__content">
      <div class="hlname">Max Blum</div>
    </div>
    <section class="section-video">
    <video class="video-bg" src="../assets/videos/intro-test.mp4"
    loop="loop" autoplay="autoplay"></video>
  </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">

  .section-home {
    font-size: $footer-height;

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: calc(100vh - 128px);
    }
  }

  .video-bg {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

</style>
