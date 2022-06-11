<style scoped>
main {
  width: 100%;
  height: 100%;
  overflow:hidden;
}

article {
  display: flex;
  flex-direction: column;
  font-size:1.2rem;
}

h1 {
  margin: 40px 0 0;
  background: var(--primary);
  color: white;
  font-size: 2rem;
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  text-shadow: 0 2px 0.5px rgba(0, 0, 0, 0.25);
}
h2 {
  color: grey;
  font-size: 1.8rem;
}

.explanation {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
}

p {
  background: var(--tertiary);
  border-bottom: 0.5px solid black;
  color: white;
  width: 100%;
  padding: 15px;
  display: grid;
  place-items: center;
  text-align: left;
  margin: 5px 0;
}

a {
  background: var(--primary);
  width:50%;
  height:50px;
  box-shadow: 0.5px 1px 2px rgba(0,0,0,0.5);
  color:white;
  display:grid;
  place-items:center;
  text-decoration: none;
  border-right:var(--tertiary) 5px solid;
  border-top:var(--tertiary) 5px solid;
  align-self: end;
}
</style>

<template>
  <main>
    <Icons />
    <section class="explanation">
      <h1>Seja bem vindo ao jogo de adivinhação de ícones!</h1>
      <article>
        <label for="username">
          <input type="text" id="username" v-model="username" />
          Seu nome de usuário será registrado no ranking como: {{ username }}
        </label>
        <h2>Como funciona o jogo</h2>
        <p>
          O jogo funciona como forma de exercitação de memória referente a
          ícones que represente a algum programa, linguagem ou tecnologia.
          <br />
          Você será desafiado para selecionar alguma descrição que represente o
          ícone, ou pela escolha do seu nome.
        </p>
        <p>
          Divirta-se sua pontuação será registrada em nosso ranking, obrigado
          pelo interesse!
          <br />
          Sinta-se a vontade para apoiar o projeto
        </p>
        <router-link v-on:click="setUsername" to="/game">Play</router-link>
      </article>
    </section>
  </main>
</template>

<script>
import { Icons } from '@/components';

export default {
  name: 'Home',
  components: {
    Icons,
  },
  data() {
    return {
      username: '',
    };
  },
  methods: {
    setUsername() {
      const payload = { username: this.username };
      this.$store.commit('setUsername', payload);
    },
  },
};
</script>
