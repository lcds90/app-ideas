<style scoped>
.home {
  width: 100%;
  height: 100%;
}

</style>

<template>
  <main class="home">
    <Icons />
    <Welcome msg="Welcome to the Guess the Icon Game" />

    Click to play the game
    <router-link to="/game">Play</router-link>
  </main>
</template>

<script>
import { Icons, Welcome } from '@/components';

export default {
  name: 'Home',
  components: {
    Icons,
    Welcome,
  },
};
</script>
