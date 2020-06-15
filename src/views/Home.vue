<template>
  <main class="section-home dark">
      <div class="section-home__content">
        <div class="hlintro slideIn">MXBLM</div>
      </div>
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

</style>
