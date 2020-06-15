<template>
  <section class="mb-footer dark">
        <h3 class="hl3" style="margin-bottom: 0;">© 2020</h3>
        <router-link to="/impressum">Impressum</router-link>
      </section>
</template>

<script>
export default {
  name: 'MBFooter',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">

.mb-footer{
  height: 8rem;
  margin-left: 4vw;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between ;

  a {
      display: block;
      transition: all .5s;
      font-size: 1.25rem;
      color: $grey;
      text-decoration: none;
      &:hover{
        color: $white;
        transition: all .5s;
      }
  }
}
</style>
