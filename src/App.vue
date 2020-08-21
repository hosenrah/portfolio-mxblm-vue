<template>
  <div id="app">
      <MBHeader/>
      <vue-page-transition name="fade-in-up">
        <router-view :class="{'dark': !homePath}"/>
      </vue-page-transition>
      <MBFooter :class="{'dark': !homePath}"/>
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
  computed: {
    homePath() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style lang="scss">
// .dark {
//   background-color: $transparent;
// }
</style>
