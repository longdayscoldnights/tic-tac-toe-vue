export default class SquareBoard {
  constructor() {
    this.cells = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  }

  /**
   * @param x The x location
   * @param y The y location
   * @param player The player either 'x' or 'o'
   * @returns {boolean} True if successful, False if invalid move.
   */
  doMove(x, y, player) {
    if (this.cells[x][y] !== "") {
      return false;
    }

    this.cells[x][y] = player;
    return true;
  }
}
