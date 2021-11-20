<style scoped>
main {
  display: grid;
  grid: 1fr / 2fr 1fr;
  place-items: center;
}

.game {
  display: grid;
  width: 100%;
  height: 100%;
  grid: 1fr 1fr / 1fr;
  place-items: center;
  background: linear-gradient(203deg, #246655, #5b5b5b);
  background-size: 400% 400%;
  animation: Background 8s ease infinite;
}

.techs {
  display: grid;
  gap: 15px;
  grid: 1fr / repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  padding: 15px;
  width: 100%;
  height: 100%;
}

.description {
  color:white;
  background: grey;
  border-radius:5px;
  padding:10px;
  margin:20px;
}

.techs button {
  color: white;
  font-size: 1.5rem;
  border: 0;
  cursor: help;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
  background: var(--primary);
  transition: all 2s ease;
}

.techs button:hover {
  background: var(--secondary);
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
          {{ tech.correct ? `${tech.name} correta...` : tech.name }}
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
  computed: {
    ...mapState(['user']),
    randomTechs() {
      return this.$store.getters.randomTechs;
    },
  },
  methods: {
    generateDescription() {
      const getRightAnwser = this.randomTechs.find((tech) => tech.correct);
      const hideNameFromDescription = getRightAnwser.info.replaceAll(
        getRightAnwser.name,
        '🤔❓',
      );
      return hideNameFromDescription;
    },
    checkAnswer(e, answer) {
      e.preventDefault();
      const count = answer.correct ? 10 : -10;
      const payload = {
        answer,
        count,
      };

      const win = () => {
        this.$store.commit('checkIfAnswerIsCorrect', payload);
      };

      const fail = () => {
        this.$store.commit('checkIfAnswerIsCorrect', payload);
      };

      return answer.correct ? win() : fail();
    },
  },
};
</script>
