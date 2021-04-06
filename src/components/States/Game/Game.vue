<template>
  <div class="game">
    <GamePanel :on-reset-game="resetFieldData" :current-turn="currentTurn" />
    <Field
      :on-cell-click="onCellClick"
      :current-turn="currentTurn"
      :field-data="fieldData"
      :size="winChecker.FIELD_SIZE"
    />
  </div>
</template>

<script>
import Field from "@/components/States/Game/Field/Field";
import WinChecker from "../../../../utils/WinChecker";
import { reactive, ref } from "@vue/reactivity";
import GamePanel from "@/components/States/Game/GamePanel/GamePanel";

/*====================*/

export default {
  name: "Game",
  components: { GamePanel, Field },
  setup(props, { emit }) {
    const winChecker = new WinChecker();
    let fieldData = reactive(
      new Array(winChecker.FIELD_SIZE ** 2).fill(undefined)
    );
    let currentTurn = ref(false);

    function resetFieldData() {
      fieldData.fill(undefined);
    }

    function onCellClick(index, value) {
      fieldData[index] = value;
      currentTurn.value = !currentTurn.value;

      if (winChecker.checkWinner(fieldData, value)) {
        emit("gameOver", value);
      }
    }

    return {
      winChecker,
      currentTurn,
      fieldData,
      onCellClick,
      resetFieldData,
    };
  },
};
</script>
