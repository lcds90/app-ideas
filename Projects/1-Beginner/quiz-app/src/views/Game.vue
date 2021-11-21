<style scoped>
main {
  display: grid;
  grid: 1fr max-content / 1fr;
  place-items: center;
  font-size:1.6rem;
}

.game {
  display: grid;
  width: 100%;
  height: 100%;
  grid: max-content 1fr / 1fr;
  place-items: center;
  background: linear-gradient(203deg, #246655, #5b5b5b);
  background-size: 400% 400%;
  animation: Background 8s ease infinite;
}

.techs {
      display: grid;
    gap: 15px;
    grid: 60px / repeat(3, 1fr);
    grid-auto-rows: 60px;
    padding: 15px;
    width: 100%;
    height: 100%;
    place-items: center;
    align-content: center;
}

.description {
  color:white;
  background: grey;
  border-radius:5px;
  padding:10px;
  font-size:1.6rem;
}

.techs button {
  color: white;
  font-size: 1.4rem;
  border: 0;
  cursor: help;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
  background: var(--primary);
  transition: all 2s ease;
  width: 100%;
  height: 100%;
}

.techs button:hover {
  background: var(--secondary);
}

@media screen and (min-width: 768px) {
  main {
  grid: 1fr / 2fr 1fr;
  }

  .game {
  grid: 1fr 1fr / 1fr;

  }

  .techs {
      grid: 1fr / repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  }
}

@keyframes Background {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

<template>
  <main>
    <section class="game">
      <article class="description">
        {{ generateDescription() }}
      </article>
      <article class="techs">
        <button
          v-for="tech in randomTechs"
          :key="tech.name"
          @click="checkAnswer($event, tech)"
          v-show="tech"
        >
          {{ tech.correct ? `${tech.name} !` : tech.name }}
          <i :class="tech.class" />
        </button>
      </article>
    </section>
    <section>
      <h2>Placar</h2>
      <p>Pontuação: {{ user.score }}</p>
      <p>Acertos: {{ user.answers.length }}</p>
      <p>Erros: {{ user.failed }}</p>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Game',
  data() {
    return {
      round: 0,
    };
  },
  computed: {
    ...mapState(['user']),
    randomTechs() {
      return this.$store.getters.randomTechs();
    },
  },
  methods: {
    checkAnswer(e, answer) {
      e.preventDefault();
      const count = answer.correct ? 10 : -10;
      const payload = { answer, count };

      const win = () => {
        this.checkIfGameIsValid();
        this.$store.commit('checkIfAnswerIsCorrect', payload);
      };

      const fail = () => {
        this.checkIfGameIsValid();
        this.$store.commit('checkIfAnswerIsCorrect', payload);
      };
      this.round += 1;
      return answer.correct ? win() : fail();
    },
    checkIfGameIsValid() {
      if (this.round === 5) this.$router.push('/ranking');
      return this.$store.getters.randomTechs();
    },
    generateDescription() {
      const getRightAnwser = this.randomTechs.find((tech) => tech.correct);
      const hideNameFromDescription = getRightAnwser
        .info.replaceAll(getRightAnwser.name, '🤔❓');
      return hideNameFromDescription;
    },
  },
};
</script>
