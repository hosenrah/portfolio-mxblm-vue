<template>
  <section class="mb-footer dark">
    <h3 class="hl3 mb-footer__hl">©2020</h3>
    <router-link class="mb-footer__link" to="/impressum">Impressum</router-link>
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
  height: $footer-height;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between ;
  mix-blend-mode: difference;


  &__hl {
    font-weight: 600;
    font-size: 1.25rem;
    color: $white;
    letter-spacing: 0.5px;
    margin-top: 0;
    margin-bottom: 0;

    &::selection {
      background-color: $red;
    }
  }

  &__link {
      display: block;
      transition: all .5s;
      font-size: 1.25rem;
      letter-spacing: 0.5px;
      margin-bottom: 0;
      color: $grey;
      text-decoration: none;

      &:hover{
        color: $white;
        transition: all .5s;
      }
  }
}

@media only screen and (max-width: 500px) {
  .mb-footer {
      padding: 0 3rem;

      &__hl {
      font-size: 1rem;
    }

      &__link {
      font-size: 1rem;
    }
  }

}

</style>
