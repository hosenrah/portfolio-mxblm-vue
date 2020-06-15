<template>
  <div id="app">
    <MBHeader/>
    <router-view/>
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
</style>
