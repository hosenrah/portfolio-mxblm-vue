<template>
  <main class="section-intro light">
      <section class="section-text light">
        <h2 class="hl2">About me</h2>
        <h1 class="hl1">I'm Max Blum. Product Designer from Germany</h1>
        <p class="copy">
          Hello dear world wide web.
          I love to design digital things. Mostly simple, with a clear
          hierarchy and with a little touch of (e)motion.
          That’s the way<sup>*</sup>.
          <br>I offer 10 years of professional experience in the design of
          user interfaces for digital applications and campaigns.
          I am conceptually strong and responsive in my mind. My passion for
          outstanding design drives me, photography and typography inspire me.
        </p>
        <img
          class="image"
          src="https://images.unsplash.com/photo-1590117051772-76cb36cf9007?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3273&q=80"
        />
      </section>
      <section class="footer light">
        <h3 class="hl3" style="margin-bottom: 0;">© 2020</h3>
        <a href="/impressum">Impressum</a>
      </section>
    </main>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
</style>
