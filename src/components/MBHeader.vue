<template>
  <header class="mb-header dark">
    <nav class="mb-header__nav mb-header-nav">
    <router-link class="mb-header-nav__link" to="/work">Work</router-link>
    <router-link class="mb-header-nav__logo" to="/">mxblm<span class="dot"></span></router-link>
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

    font-family: 'Poppins', serif;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-decoration: none;

    &:hover{
      filter:blur(2px);
      color: $red;
    }
  }

  &__link {
    color: $grey;
    letter-spacing: 0.5px;
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

.dot {
  height: 5px;
  width: 5px;
  background-color: $red;
  border-radius: 0%;
  display: inline-block;
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

@media only screen and (max-width: 500px) {

  .mb-header-nav__logo {
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  .mb-header-nav__link {
      font-size: 1rem;
      transform: rotate(-90deg);

      &:first-child{
      margin-left: 0;
      }

      &:last-child{
      margin-right: 0;
      }
  }

  .dot {
  height: 4px;
  width: 4px;
  background-color: $red;
  border-radius: 0%;
  display: inline-block;
}

}
</style>
