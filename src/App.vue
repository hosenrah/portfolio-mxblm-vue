<template>
  <div id="app">
    <video-bg :sources="['https://s3.amazonaws.com/www-assets.invisionapp.com/Homepage/enterprise-loop.mp4']" img="../assets/Loop_klein.mp4">
      <MBHeader/>
      <vue-page-transition name="fade-in-up">
        <router-view :class="{'dark': !homePath}"/>
      </vue-page-transition>
      <MBFooter :class="{'dark': !homePath}"/>
    </video-bg>
  </div>
</template>

<script>
import MBHeader from '@/components/MBHeader.vue';
import MBFooter from '@/components/MBFooter.vue';
import VideoBg from 'vue-videobg';

export default {
  name: 'APP',
  components: {
    MBHeader,
    MBFooter,
    VideoBg,
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
