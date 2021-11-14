<style>
</style>

<template>
  <main>
    <section>
      {{ randomTechs.correct.name }}
      <i :class="randomTechs.correct.class" />
    </section>
    <section v-for="tech in randomTechs.wrongs" :key="tech.name">
      {{ tech.name }}
      <i :class="tech.class" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    randomTechs() {
      // console.log(this.$store);
      return this.$store.getters.randomTechs;
    },
  },
};
</script>
