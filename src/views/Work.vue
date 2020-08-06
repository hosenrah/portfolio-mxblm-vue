<template>
  <main class="section-intro">
    <section class="section-text">
    <h2 class="hl2">My work</h2>
    <h1 class="hl1">Get a taste of what I love to do</h1>
   </section>
    <section class="section-work">
      <router-link class="project-teaser" :to="{ name: 'Project1' }">
        <div class="project-label">The Design System Evolution
        </div>
        <p class="copy">Mercedes-Benz</p>
      </router-link>
      <router-link class="project-teaser" :to="{ name: 'Project2' }">
        <div class="project-label">BraPro Mobile Game
        </div>
        <p class="copy">MEY</p>
      </router-link>
      <router-link class="project-teaser" :to="{ name: 'Project3' }">
        <div class="project-label">Launch Campaign
        </div>
        <p class="copy">KIA</p>
      </router-link>
      <router-link class="project-teaser" :to="{ name: 'Project4' }">
        <div class="project-label">Travel Plattform
        </div>
        <p class="copy">ITS</p>
      </router-link>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Work',
};
</script>

<style lang="scss">
</style>
