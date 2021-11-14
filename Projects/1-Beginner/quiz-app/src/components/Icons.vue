<style scoped>
section {
  background: linear-gradient(207deg, white, var(--secondary), var(--tertiary), var(--primary));
  background-size: 800% 800%;
  animation: Background 5s ease infinite;
  border-bottom: 15px double #948474;
  box-shadow: 0 2px 1.5px rgba(0, 0, 0, 0.5);
  padding: 5px;
  margin-bottom:15px;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  overflow-x: hidden;
  width: 100vw;
  max-width: 100%;
}

.wrapper {
  animation: swipe 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  height: 20vh;
  max-height: 20vh;
  display: grid;
  grid: 1fr 1fr / repeat(auto-fit, minmax(50px, 1fr));
  place-items: center;
  grid-auto-flow: column;
}

i {
  font-size: 3rem;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
}

@keyframes swipe {
  0% {
    transform: translateX(0%);
    filter: brightness(100%);
  }

  25% {
    filter: brightness(125%);
  }

  50% {
    transform: translateX(-20%);
    filter: brightness(125%);
  }

  75% {
    filter: brightness(175%);
  }

  100% {
    transform: translateX(0%);
    filter: brightness(100%);
  }
}

@keyframes background {
  0% {
    background-position: 0% 37%;
  }
  50% {
    background-position: 100% 64%;
  }
  100% {
    background-position: 0% 37%;
  }
}
</style>

<template>
  <section>
    <div class="wrapper">
      <i
        v-for="tech in techs.list"
        :key="tech.name"
        :class="tech.class"
        :title="tech.name"
      ></i>
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
