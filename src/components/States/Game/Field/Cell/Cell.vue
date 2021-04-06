<template>
  <div :class="{ setted: field !== undefined }" @click="onClick" class="cell">
    <p class="cell__data" v-if="field !== undefined">
      <span class="material-icons">{{
        field ? "close" : "radio_button_unchecked"
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    currentTurn: Boolean,
    field: Boolean,
    index: Number,
  },
  methods: {
    onClick() {
      this.$emit("onCellClick", this.$props.index, this.$props.currentTurn);
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  border-radius: 0.5em;
  width: 15em;
  height: 15em;
  background: var(--cell-bg);
  box-shadow: 7px 7px 5px -3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-self: center;
  user-select: none;

  &.setted {
    pointer-events: none;
  }

  p {
    animation: 0.5s FadeIn linear;
    display: flex;
    justify-content: center;
    align-self: center;

    span {
      font-size: 12.5rem;
      color: white;
    }
  }
}
</style>
