<template>
  <header class="mb-header dark">
    <nav class="mb-header__nav mb-header-nav">
    <router-link class="mb-header-nav__link" to="/work">Work</router-link>
    <router-link class="mb-header-nav__logo" to="/">MB.</router-link>
    <router-link class="mb-header-nav__link" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MBHeader',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.mb-header-nav {
  font-size: 1.25rem;
  transition: all .5s;

  &__logo {
    color: $white;
    mix-blend-mode: difference;
    transition: all .5s;


    font-weight: 800;
    font-size: 2rem;
    letter-spacing: 3px;
    text-decoration: none;

    &:hover{
      filter:blur(2px);
      color: $yellow;
    }
  }

  &__link {
    color: $grey;
    text-decoration: none;

    &:hover{
      color: $white;
      transition: all .5s;
    }

    &:active{
      color: $white;
    }

    &:first-child{
      margin-left: 4vw;
    }

    &:last-child{
      margin-right: 4vw;
    }
  }
}

.mb-header{
  z-index: 100;
  position: fixed;
  left: 0;
  top: 6vh;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  mix-blend-mode: difference;

  &__nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
