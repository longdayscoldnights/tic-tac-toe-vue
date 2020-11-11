<template>
  <div class="board">
    <div v-for="(n, i) in 3" :key="n">
      <div v-for="(n, j) in 3" :key="j">
        <square :value="board[i][j]"></square>
      </div>
    </div>
  </div>
</template>

<script>
import Square from "@/components/Square";
export default {
  name: "TicTacToe",
  components: { Square },
  data() {
    return {
      // This will be the tic tac toe board we gonna play on
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
    };
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-wrap: wrap;
  width: 205px;
  height: 205px;
}
</style>
