<template>
  <div id="app">
    <MBHeader/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
