<template>
  <div class="board">
    <div v-for="(n, i) in 3" :key="n">
      <div v-for="(n, j) in 3" :key="j">
        <square @click="move(i, j)" :value="board[i][j]"></square>
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
  },
  methods: {
    move(x, y) {
      // invalid move if the field is already filled
      if (this.board[x][y] !== "") {
        return;
      }
      this.board[x][y] = "x";
      this.$forceUpdate();
    }
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
