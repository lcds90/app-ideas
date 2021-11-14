<style scoped>
section {
  background: grey;
  border: 1px solid black;
  padding: 5px;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  overflow-x: hidden;
  max-width: 100vw;
}

.wrapper {
  animation: swipe 20s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}

i {
  font-size: 3rem;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
}

@keyframes swipe {
  0% {
    transform: translateX(0%);
    filter: brightness(100%);
    box-shadow: 25px 0 0 0 rgba(0, 0, 0, 0.25);
  }

  25% {
    filter: brightness(125%);
  }

  50% {
    transform: translateX(-30%);
    filter: brightness(125%);
  }

  75% {
    filter: brightness(175%);
    box-shadow: 25px 0 0 0 rgba(0, 0, 0, 0.25);
  }

  100% {
    transform: translateX(0%);
    filter: brightness(100%);
  }
}
</style>

<template>
  <section>
    <div class="wrapper">
      <i v-for="tech in techs.list" :key="tech.name" :class="tech.class"></i>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Icons',
  computed: mapState(['techs']),
};
</script>
