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
import { useStore } from "vuex";
import { useRouter } from "vue-router";

/*====================*/

export default {
  name: "Game",
  components: { GamePanel, Field },
  setup() {
    const store = useStore();
    const router = useRouter();

    const winChecker = new WinChecker();
    let fieldData = reactive(
      new Array(winChecker.FIELD_SIZE ** 2).fill(undefined)
    );
    let currentTurn = ref(1);

    function resetFieldData() {
      fieldData.fill(undefined);
    }

    function onCellClick(index, value) {
      fieldData[index] = value;
      currentTurn.value = currentTurn.value === 2 ? 1 : 2;

      const result = winChecker.checkWinner(fieldData, value);

      if (result) {
        store.commit("setWinner", result);
        router.push("/");
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
