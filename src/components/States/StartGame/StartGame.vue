<template>
  <div class="start-game">
    <div class="game-result" v-if="winner !== undefined">
      <p v-if="winner !== 'draw'">
        <span class="material-icons"> celebration </span>The winner is
        {{ winner }}st player!<span class="material-icons"> celebration </span>
      </p>
      <p v-else>It's a draw!</p>
    </div>
    <router-link class="button" to="/game">Start</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

/*====================*/

export default {
  name: "GameOver",
  computed: {
    ...mapGetters(["winner"]),
  },
};
</script>

<style lang="scss" scoped>
.game-result {
  margin-bottom: 1em;

  p {
    color: lightgray;
    display: flex;
    font-size: 1.25rem;

    .material-icons {
      margin: 0 0.25em;
    }
  }
}

.start-game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
