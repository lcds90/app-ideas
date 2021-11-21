<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Sobre</router-link> |
    <router-link to="/ranking">Ranking</router-link>
  </nav>
  <router-view/>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Titillium Web', sans-serif;
}

:root {
  --primary: #948474;
  --secondary: #1e3cd6;
  --tertiary: #afbdd4;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #dfdfdf;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: grid;
  grid: max-content 1fr / 1fr;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size:2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (min-width: 768px) {
  #nav {
    padding: 30px;
  }
}
</style>
