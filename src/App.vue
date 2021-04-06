<template>
  <div class="app-container">
    <Game v-if="winner === undefined" @gameOver="setWinner" />
    <GameOver v-else />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import GameOver from "@/components/States/GameOver/GameOver";
import Game from "@/components/States/Game/Game";
export default {
  name: "App",
  components: { Game, GameOver },
  setup() {
    let winner = ref(undefined);

    function setWinner(value) {
      winner.value = value;
    }

    return { winner, setWinner };
  },
};
</script>

<style lang="scss">
@import "assets/main";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: var(--body-bg);
}

.app-container {
  width: 100%;
  height: 100vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
