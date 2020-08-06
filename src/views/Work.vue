<template>
  <main class="section-intro dark">
    <section class="section-text dark">
    <h1 class="hl1">Get a taste of what I love to do</h1>
   </section>
    <section class="section-work dark">
      <router-link class="project-teaser dark" :to="{ name: 'Project1' }">
        <div class="project-label">The Design System Evolution
        </div>
        <p class="copy">Mercedes-Benz</p>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project2' }">
        <div class="project-label">BraPro Mobile Game
        </div>
        <p class="copy">MEY</p>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project3' }">
        <div class="project-label">Launch Campaign
        </div>
        <p class="copy">KIA</p>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project4' }">
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
