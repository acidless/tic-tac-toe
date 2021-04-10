<template>
  <div class="game-panel">
    <p>{{ currentTurn }}'s turn!</p>
    <button class="default-btn" @click="onResetGame">
      <span class="material-icons"> refresh </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "GamePanel",
  props: {
    onResetGame: Function,
    currentTurn: Number,
  },
};
</script>

<style lang="scss">
.game-panel {
  width: 100%;
  background: var(--main-color);
  margin-bottom: 0.5em;
  padding: 1.5em 0;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: var(--cell-bg);
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.25em;
  }

  span {
    font-size: 2.25rem;
  }
}
</style>
