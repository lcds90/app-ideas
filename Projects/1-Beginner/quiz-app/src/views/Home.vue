<style scoped>
main {
  width: 100%;
  height: 100%;
}

article {
  display: grid;
  grid: 1fr / repeat(3, 1fr);
}

h1 {
  margin: 40px 0 0;
  background: var(--primary);
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  width: max-content;
  padding: 5px;
  text-shadow: 0 2px 0.5px rgba(0, 0, 0, 0.25);
}
h2 {
  color: grey;
  font-size: 2rem;
  grid-column: span 3;
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
}

a {
  background: var(--primary);
  width:50%;
  height:25%;
  box-shadow: 0.5px 1px 2px rgba(0,0,0,0.5);
  color:white;
  display:grid;
  place-items:center;
  text-decoration: none;
  border-right:var(--tertiary) 5px solid;
  border-top:var(--tertiary) 5px solid;
}
</style>

<template>
  <main>
    <Icons />
    <section>
      <h1>Seja bem vindo ao jogo de adivinhação de ícones!</h1>
      <hr />
      <article>
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
        <router-link to="/game">Play</router-link>
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
};
</script>
