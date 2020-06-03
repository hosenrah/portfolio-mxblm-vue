<template>
  <div id="app">
    <MBHeader/>
    <router-view/>
  </div>
</template>

<script>
import MBHeader from '@/components/MBHeader.vue';

export default {
  name: 'APP',
  components: {
    MBHeader,
  },
};
</script>

<style lang="scss">
</style>
