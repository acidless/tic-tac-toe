<template>
  <div :style="{ gridTemplateColumns: `repeat(${size}, 15em)` }" class="field">
    <Cell
      :current-turn="currentTurn"
      @onCellClick="onCellClick"
      v-for="(field, index) in fieldData"
      :field="field"
      :index="index"
      :key="index"
    />
  </div>
</template>

<script>
import Cell from "@/components/States/Game/Field/Cell/Cell";

/*====================*/

export default {
  name: "Field",
  components: { Cell },
  props: {
    size: Number,
    currentTurn: Boolean,
    fieldData: Array,
    onCellClick: Function,
  },
};
</script>

<style lang="scss" scoped>
.field {
  display: grid;
  grid-gap: 1em;
  justify-content: center;
}
</style>
