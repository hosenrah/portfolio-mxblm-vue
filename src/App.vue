<template>
  <div id="app">
    <MBHeader/>
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
    <MBFooter/>
  </div>
</template>

<script>
import MBHeader from '@/components/MBHeader.vue';
import MBFooter from '@/components/MBFooter.vue';

export default {
  name: 'APP',
  components: {
    MBHeader,
    MBFooter,
  },
};
</script>

<style lang="scss">

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
