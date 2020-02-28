export const DisplayController = (function () {
  const gameboardElement = document.getElementById('gameboard');
  const cells = gameboardElement.children;

  /**
   * Sets the symbol for each cell
   * @param {string[]} board Array of each cell value
   */
  const setBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      setCell(cells[i], board[i])
    }
  }

  /**
   * Sets the symbol of a cell
   * @param {HTMLElement} cell Cell HTMLElement
   * @param {string} value Cell value
   * @returns {boolean} Returns true if the cell was set and false otherwise
   */
  const setCell = (cell, value) => {
    cell.querySelector('span').innerHTML = value;
  }

  return {
    cells,
    setBoard
  }
})();