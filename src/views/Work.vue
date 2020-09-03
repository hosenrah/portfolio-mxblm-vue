<template>
  <main class="section-intro">
    <section class="section-text">
    <h1 class="hl1">Get an idea of what I do</h1>
   </section>
    <section class="section-work">
      <router-link class="project-teaser dark" :to="{ name: 'Project1' }">
        <p class="copy">Mercedes-Benz</p>
        <div class="project-label">Design System Evolution
        </div>
        <img class="project-img" src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Mercedes-Benz Design System"/>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project2' }">
        <p class="copy">MEY</p>
        <div class="project-label">BraPro Mobile Game
        </div>
        <img class="project-img" src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Mey BraPro Mobile Game"/>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project3' }">
        <p class="copy">KIA</p>
        <div class="project-label">Launch Campaign
        </div>
        <img class="project-img" src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="KIA Launch Campaign"/>
      </router-link>
      <router-link class="project-teaser dark" :to="{ name: 'Project4' }">
        <p class="copy">ITS</p>
        <div class="project-label">Travel Plattform
        </div>
        <img class="project-img" src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="ITS Travel Plattform"/>
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
