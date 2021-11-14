<template>
  <article class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ counter }}</p>
    <!-- <p>{{counterMore}}</p> -->
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['counter']),
    // ...mapGetters(['counterMore']),
  },
  methods: {
    ...mapMutations(['decrement', 'increment']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
